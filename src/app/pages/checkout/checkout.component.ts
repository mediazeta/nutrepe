import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

const API = 'http://localhost:8080';
const TERMS_VERSION = '1.0';
type PublicPlan = { id: string; code?: string; name: string; user_price?: number | string; price?: number | string; period_days?: number; cadence?: string };
type RedsysForm = { url?: string; action?: string; Ds_SignatureVersion?: string; Ds_MerchantParameters?: string; Ds_Signature?: string; signatureVersion?: string; merchantParameters?: string; signature?: string };

@Component({
  selector: 'app-checkout', standalone: true, imports: [ReactiveFormsModule, RouterLink],
  template: `
    <section class="min-h-[75vh] bg-cream-2 px-4 py-12 sm:py-20">
      <div class="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-start">
        <div class="rounded-3xl bg-white p-6 shadow-sm sm:p-9">
          <a routerLink="/" fragment="planes" class="text-sm font-semibold text-forest hover:text-mint">← Volver a los planes</a>
          <p class="mt-8 text-xs font-bold uppercase tracking-[.18em] text-mint">Contratación segura</p>
          <h1 class="mt-2 text-3xl font-extrabold tracking-tight text-forest sm:text-4xl">Crea tu cuenta</h1>
          <p class="mt-3 text-sm leading-6 text-muted">Usaremos estos datos para crear tu acceso. La cuenta se activa cuando el pago quede confirmado.</p>

          @if (error()) { <div role="alert" class="mt-5 rounded-xl bg-warm-soft p-3 text-sm text-ink">{{ error() }}</div> }
          @if (loadingPlans()) { <p class="mt-8 animate-pulse text-sm text-muted">Cargando planes…</p> }
          @else if (!selectedPlan()) { <div class="mt-8 rounded-xl bg-warm-soft p-4 text-sm">No hemos podido cargar ese plan. Vuelve a la página de planes e inténtalo de nuevo.</div> }
          @else {
          <form [formGroup]="form" (ngSubmit)="submit()" class="mt-7 space-y-4">
            <label class="block text-sm font-semibold">Nombre completo
              <input formControlName="displayName" autocomplete="name" class="checkout-input mt-1.5" placeholder="Tu nombre y apellidos" />
            </label>
            <label class="block text-sm font-semibold">Email
              <input formControlName="email" type="email" autocomplete="email" class="checkout-input mt-1.5" placeholder="nombre@correo.com" />
            </label>
            <label class="block text-sm font-semibold">Nombre de usuario
              <input formControlName="username" autocomplete="username" class="checkout-input mt-1.5" placeholder="Elige un nombre de usuario" />
            </label>
            <label class="block text-sm font-semibold">Contraseña
              <input formControlName="password" type="password" autocomplete="new-password" class="checkout-input mt-1.5" placeholder="Al menos 8 caracteres" />
            </label>
            <label class="flex gap-3 rounded-xl border border-ink/10 bg-cream p-3 text-sm leading-5">
              <input type="checkbox" formControlName="requiredConsents" class="mt-1 accent-forest" />
              <span>
                Autorizo el cobro de <strong>{{ displayPrice() }}</strong> hoy y cada {{ selectedPlan()?.period_days }} días, con renovación automática hasta que la cancele desde mi cuenta. Puedo cancelar antes del siguiente cobro y conservaré el acceso hasta el final del periodo pagado. Confirmo que este pedido implica una obligación de pago y que he leído y acepto los <a routerLink="/legal/terminos-suscripcion" target="_blank" class="font-semibold text-forest underline">términos de contratación</a> y la <a routerLink="/legal/privacidad" target="_blank" class="font-semibold text-forest underline">política de privacidad</a>.
              </span>
            </label>
            <label class="flex gap-3 text-sm leading-5 text-muted">
              <input type="checkbox" formControlName="marketingConsent" class="mt-1 accent-forest" />
              <span>Quiero recibir novedades y comunicaciones comerciales (opcional).</span>
            </label>
            <button type="submit" [disabled]="submitting()" class="flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-bold text-white transition duration-200 hover:bg-forest-2 active:scale-[.98] disabled:cursor-wait disabled:opacity-60">
              {{ submitting() ? 'Preparando pago…' : 'Contratar con obligación de pago' }} <span aria-hidden="true">→</span>
            </button>
            <p class="text-center text-xs leading-5 text-muted">Pago procesado de forma segura por Redsys. Nutrepe no almacena los datos de tu tarjeta.</p>
          </form> }
        </div>
        <aside class="rounded-3xl bg-forest p-6 text-white shadow-sm sm:p-8">
          <p class="text-xs font-bold uppercase tracking-[.18em] text-white/65">Tu plan</p>
          @if (selectedPlan(); as plan) {
            <h2 class="mt-3 text-2xl font-extrabold">{{ plan.name }}</h2>
            <p class="mt-5 text-4xl font-extrabold">{{ displayPrice() }}</p>
            <p class="mt-1 text-sm text-white/70">hoy y cada {{ plan.period_days }} días</p>
            <div class="my-6 border-t border-white/15"></div>
            <p class="text-sm leading-6 text-white/80">Renovación automática por el mismo importe. Cancela en cualquier momento desde tu cuenta; mantendrás el acceso durante el periodo abonado.</p>
            <p class="mt-6 text-xs leading-5 text-white/55">Proveedor: Pablo Egüen Sariego · eguenutricion&#64;gmail.com</p>
          }
        </aside>
      </div>
    </section>
    <style>.checkout-input{display:block;width:100%;border:1px solid rgb(20 26 46 / .14);border-radius:.8rem;padding:.8rem .9rem;font:inherit;font-size:.9rem;outline:none;transition:border-color .2s,box-shadow .2s}.checkout-input:focus{border-color:#0c57d6;box-shadow:0 0 0 3px rgb(12 87 214 / .12)}</style>
  `,
})
export class CheckoutComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  readonly loadingPlans = signal(true);
  readonly submitting = signal(false);
  readonly error = signal('');
  readonly plans = signal<PublicPlan[]>([]);
  readonly selectedPlan = signal<PublicPlan | null>(null);
  readonly form = this.fb.group({
    displayName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    requiredConsents: [false, Validators.requiredTrue], marketingConsent: [false],
  });

  ngOnInit() {
    const key = this.route.snapshot.queryParamMap.get('plan') ?? '';
    this.http.get<PublicPlan[] | { plans: PublicPlan[] }>(`${API}/payments/plans`).subscribe({
      next: (result) => {
        const plans = Array.isArray(result) ? result : result.plans;
        this.plans.set(plans ?? []);
        this.selectedPlan.set(plans?.find((p) => p.code === key || p.id === key || (key === 'mensual' && p.period_days === 30) || (key === 'semestral' && p.period_days === 180)) ?? null);
        this.loadingPlans.set(false);
      }, error: () => { this.error.set('No hemos podido conectar con el servicio de pagos. Inténtalo de nuevo más tarde.'); this.loadingPlans.set(false); },
    });
  }

  displayPrice(): string {
    const raw = this.selectedPlan()?.user_price ?? this.selectedPlan()?.price;
    if (raw === undefined) return '';
    const amount = Number(raw);
    return Number.isFinite(amount) ? new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(amount) : String(raw);
  }

  submit() {
    this.error.set('');
    if (this.form.invalid || !this.selectedPlan()) { this.form.markAllAsTouched(); return; }
    this.submitting.set(true);
    const f = this.form.getRawValue();
    const plan = this.selectedPlan()!;
    const requiredConsent = Boolean(f.requiredConsents);
    this.http.post<{ token?: string; checkoutToken?: string; payment?: RedsysForm; form?: RedsysForm }>(`${API}/payments/signup`, {
      planId: plan.id, username: f.username, email: f.email, password: f.password, displayName: f.displayName,
      marketingConsent: Boolean(f.marketingConsent), autoRenewConsent: requiredConsent,
      termsAccepted: requiredConsent, privacyAccepted: requiredConsent,
      paymentObligationConfirmed: requiredConsent, termsVersion: TERMS_VERSION,
    }).subscribe({
      next: (response: any) => {
        const token = response.token ?? response.checkoutToken;
        const form = response.payment ?? response.form ?? response.paymentForm ?? response.redsys;
        if (!token || !form) { this.fail('La respuesta del servicio de pago no tiene el formato esperado.'); return; }
        sessionStorage.setItem('nutrepe.checkoutToken', token);
        this.redirectToRedsys(form);
      }, error: (err: HttpErrorResponse) => {
        const message = err.error?.message ?? err.error?.error;
        this.fail(typeof message === 'string' ? message : 'No hemos podido crear tu cuenta. Revisa los datos e inténtalo de nuevo.');
      },
    });
  }

  private fail(message: string) { this.error.set(message); this.submitting.set(false); }
  private redirectToRedsys(payment: RedsysForm) {
    const form = document.createElement('form'); form.method = 'POST'; form.action = payment.url ?? payment.action ?? 'https://sis-t.redsys.es:25443/sis/realizarPago';
    const fields: Record<string, string | undefined> = {
      Ds_SignatureVersion: payment.Ds_SignatureVersion ?? payment.signatureVersion,
      Ds_MerchantParameters: payment.Ds_MerchantParameters ?? payment.merchantParameters,
      Ds_Signature: payment.Ds_Signature ?? payment.signature,
    };
    for (const [name, value] of Object.entries(fields)) { if (!value) { this.fail('Faltan datos de firma para iniciar el pago.'); return; } const input = document.createElement('input'); input.type = 'hidden'; input.name = name; input.value = value; form.appendChild(input); }
    document.body.appendChild(form); form.submit();
  }
}
