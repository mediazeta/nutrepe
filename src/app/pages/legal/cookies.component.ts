import { Component } from '@angular/core';
import { LegalPageComponent } from './legal-page.component';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [LegalPageComponent],
  template: `
    <app-legal-page title="Política de cookies">
      <h2>Uso de cookies</h2>
      <p>
        Esta versión de la web no incorpora cookies de analítica ni de publicidad. Si en el futuro
        se incorporan herramientas de medición, se solicitará el consentimiento correspondiente
        antes de activarlas, conforme a la normativa vigente.
      </p>
      <h2>Cookies técnicas</h2>
      <p>
        Podrían utilizarse cookies estrictamente necesarias para el funcionamiento básico del
        sitio, que no requieren consentimiento previo.
      </p>
    </app-legal-page>
  `,
})
export class CookiesComponent {}
