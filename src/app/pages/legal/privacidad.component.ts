import { Component } from '@angular/core';
import { LegalPageComponent } from './legal-page.component';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [LegalPageComponent],
  template: `
    <app-legal-page title="Política de privacidad">
      <h2>Qué datos tratamos</h2>
      <p>
        En esta web solo recogemos los datos mínimos necesarios para gestionar tu interés en
        Nutrepe (nombre y correo electrónico a través del formulario de lista de espera). No se
        recopilan datos de salud ni historiales clínicos a través de esta web pública.
      </p>
      <h2>Finalidad</h2>
      <p>
        Los datos facilitados se utilizan exclusivamente para contactar contigo sobre la
        disponibilidad de Nutrepe. No se usan con fines publicitarios sin tu consentimiento
        explícito.
      </p>
      <h2>Base jurídica y derechos</h2>
      <p>
        El tratamiento se basa en tu consentimiento. Puedes ejercer tus derechos de acceso,
        rectificación y supresión escribiendo a eguenutricion&#64;gmail.com.
      </p>
      <h2>Pendiente de validación</h2>
      <p>
        Esta política es un borrador orientativo. El documento definitivo, incluyendo el
        responsable del tratamiento, los plazos de conservación y, en su caso, el régimen
        aplicable a datos de salud dentro de la futura aplicación, se completará antes del
        lanzamiento junto con asesoría legal especializada en RGPD.
      </p>
    </app-legal-page>
  `,
})
export class PrivacidadComponent {}
