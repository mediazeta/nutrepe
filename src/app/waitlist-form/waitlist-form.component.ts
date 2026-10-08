import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LucideAngularModule } from 'lucide-angular';

type Status = 'idle' | 'submitting' | 'done';

@Component({
  selector: 'app-waitlist-form',
  standalone: true,
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './waitlist-form.component.html',
})
export class WaitlistFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  readonly status = signal<Status>('idle');
  readonly formError = signal<string | null>(null);
  readonly wasDuplicate = signal(false);

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    // Honeypot: campo oculto que solo rellenan los bots.
    company: [''],
  });

  get firstName(): string {
    return (this.form.value.name ?? '').split(' ')[0];
  }

  get nameError(): string | null {
    const control = this.form.controls.name;
    if (!control.touched || !control.errors) return null;
    if (control.errors['server']) return control.errors['server'];
    return 'Indica tu nombre.';
  }

  get emailError(): string | null {
    const control = this.form.controls.email;
    if (!control.touched || !control.errors) return null;
    if (control.errors['server']) return control.errors['server'];
    return 'Introduce un correo válido.';
  }

  submit() {
    this.formError.set(null);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('submitting');
    this.http.post<{ ok: boolean; duplicate?: boolean }>('/api/waitlist', this.form.value).subscribe({
      next: (res) => {
        this.wasDuplicate.set(Boolean(res.duplicate));
        this.status.set('done');
      },
      error: (err: HttpErrorResponse) => {
        this.status.set('idle');
        if (err.status === 422 && err.error?.errors) {
          const errors = err.error.errors as Record<string, string>;
          if (errors['name']) this.form.controls.name.setErrors({ server: errors['name'] });
          if (errors['email']) this.form.controls.email.setErrors({ server: errors['email'] });
          return;
        }
        if (err.status === 429) {
          this.formError.set('Has hecho varios intentos seguidos. Prueba de nuevo en unos minutos.');
          return;
        }
        this.formError.set('No hemos podido registrar tu solicitud. Inténtalo de nuevo en un momento.');
      },
    });
  }
}
