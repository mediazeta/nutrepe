import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';

const API = 'http://localhost:8080';
type PaymentState = { status?: 'pending' | 'paid' | 'failed'; state?: string; message?: string };

@Component({
  selector: 'app-payment-result', standalone: true, imports: [RouterLink],
  template: `
    <section class="flex min-h-[75vh] items-center justify-center bg-cream-2 px-4 py-16">
      <div class="w-full max-w-xl rounded-3xl bg-white p-7 text-center shadow-sm sm:p-11">
        @if (state() === 'loading') {
          <div class="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-forest/15 border-t-forest"></div>
          <h1 class="mt-6 text-2xl font-extrabold text-forest">Comprobando tu pago</h1>
          <p class="mt-2 text-sm text-muted">Estamos consultando el estado confirmado por Redsys.</p>
        } @else if (state() === 'paid') {
          <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-mint-soft text-2xl text-mint">✓</div>
          <h1 class="mt-6 text-3xl font-extrabold text-forest">¡Ya está, tu plan está activo!</h1>
          <p class="mt-3 text-sm leading-6 text-muted">El pago ha sido confirmado. Ya puedes iniciar sesión en Nutrepe con la cuenta que acabas de crear.</p>
          <a href="https://app.nutrepe.com" class="mt-7 inline-flex rounded-full bg-forest px-7 py-3.5 text-sm font-bold text-white transition hover:bg-forest-2">Ir a Nutrepe <span class="ml-2">→</span></a>
        } @else if (state() === 'pending') {
          <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-forest-soft text-2xl text-forest">…</div>
          <h1 class="mt-6 text-3xl font-extrabold text-forest">Pago pendiente de confirmación</h1>
          <p class="mt-3 text-sm leading-6 text-muted">Redsys todavía no ha confirmado la operación. Esta página se actualizará automáticamente; no vuelvas a pagar.</p>
          <button (click)="refresh()" class="mt-7 rounded-full border border-ink/15 px-6 py-3 text-sm font-bold text-forest transition hover:border-forest">Comprobar de nuevo</button>
        } @else {
          <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-warm-soft text-2xl text-warm">!</div>
          <h1 class="mt-6 text-3xl font-extrabold text-forest">No se ha confirmado el pago</h1>
          <p class="mt-3 text-sm leading-6 text-muted">No hemos recibido confirmación de un pago válido. Puedes intentarlo de nuevo; no se activará ningún cargo sin autorización.</p>
          <a routerLink="/" fragment="planes" class="mt-7 inline-flex rounded-full bg-forest px-7 py-3.5 text-sm font-bold text-white transition hover:bg-forest-2">Volver a los planes</a>
        }
      </div>
    </section>
  `,
})
export class PaymentResultComponent implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  readonly state = signal<'loading' | 'paid' | 'pending' | 'failed'>('loading');
  private order = '';
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit() {
    this.order = this.route.snapshot.queryParamMap.get('order') ?? '';
    if (!this.order) { this.state.set('failed'); return; }
    this.refresh();
  }

  refresh() {
    const token = sessionStorage.getItem('nutrepe.checkoutToken');
    if (!token) { this.state.set('failed'); return; }
    this.state.set('loading');
    this.http.get<PaymentState>(`${API}/payments/redsys/${encodeURIComponent(this.order)}`, { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) }).subscribe({
      next: (result) => {
        const status = result.status ?? result.state;
        if (status === 'paid') {
          this.http.post(`${API}/payments/session/activate`, {}, { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) }).subscribe({
            next: (session: any) => { if (session?.token) localStorage.setItem('nutrepe.token', session.token); this.state.set('paid'); sessionStorage.removeItem('nutrepe.checkoutToken'); },
            error: () => this.state.set('paid'),
          });
        } else if (status === 'failed') this.state.set('failed');
        else { this.state.set('pending'); this.timer = setTimeout(() => this.refresh(), 5000); }
      }, error: () => { this.state.set('pending'); },
    });
  }
}
