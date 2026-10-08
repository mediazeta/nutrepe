import { Component } from '@angular/core';
import { LegalPageComponent } from './legal-page.component';

@Component({
  selector: 'app-terminos-suscripcion',
  standalone: true,
  imports: [LegalPageComponent],
  template: `
    <app-legal-page title="Términos y condiciones de suscripción">
      <h2>Estado del servicio</h2>
      <p>
        Nutrepe se encuentra en fase de desarrollo. Actualmente esta web no procesa pagos ni
        gestiona altas reales de suscripción: las modalidades y precios mostrados son una
        propuesta comercial orientativa.
      </p>
      <h2>Condiciones pendientes de confirmación</h2>
      <ul>
        <li>Importes definitivos de cada modalidad y de la posible cuota inicial.</li>
        <li>Condiciones de permanencia y proceso de cancelación.</li>
        <li>Alcance exacto de la supervisión profesional incluida en cada plan.</li>
        <li>Medio de pago y entidad responsable del cobro.</li>
      </ul>
      <p>
        Estos términos se completarán y publicarán en su versión definitiva antes de activar
        cualquier cobro real a los usuarios.
      </p>
    </app-legal-page>
  `,
})
export class TerminosSuscripcionComponent {}
