import { Component } from '@angular/core';
import { LegalPageComponent } from './legal-page.component';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [LegalPageComponent],
  template: `
    <app-legal-page title="Política de cookies">
      <h2>1. Situación actual</h2>
      <p>
        Según la revisión técnica facilitada por desarrollo, actualmente no se incluyen Google
        Analytics, Google Tag Manager, Meta/Facebook Pixel, Hotjar, Clarity, Mixpanel, PostHog,
        Sentry ni otros SDK de analítica o publicidad.
      </p>

      <h2>2. Tecnologías necesarias</h2>
      <p>
        Nutrepe puede utilizar cookies o almacenamiento local estrictamente necesarios para
        seguridad, autenticación, sesión o funcionamiento del servicio. Estas tecnologías no se
        utilizan para publicidad ni para analizar el comportamiento con fines comerciales.
      </p>

      <h2>3. Consentimiento</h2>
      <p>
        Mientras solo se utilicen tecnologías estrictamente necesarias y exentas, no se mostrará
        un banner de consentimiento que resulte innecesario. Si se incorpora una tecnología no
        necesaria, se revisará esta política antes de activarla y se bloqueará hasta obtener
        consentimiento cuando sea exigible.
      </p>

      <h2>4. Si se incorporan cookies no necesarias</h2>
      <p>
        El panel deberá ofrecer aceptar y rechazar al mismo nivel y con la misma visibilidad,
        además de permitir configurar por finalidades. Se documentarán nombre, proveedor,
        finalidad y duración, y se facilitará retirar el consentimiento con facilidad.
      </p>

      <h2>5. Control de cambios</h2>
      <p>
        Desarrollo deberá informar al responsable antes de añadir cualquier SDK, píxel, analítica
        o cookie no necesaria para permitir la revisión legal y técnica previa.
      </p>
    </app-legal-page>
  `,
})
export class CookiesComponent {}
