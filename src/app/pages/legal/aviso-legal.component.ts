import { Component } from '@angular/core';
import { LegalPageComponent } from './legal-page.component';

@Component({
  selector: 'app-aviso-legal',
  standalone: true,
  imports: [LegalPageComponent],
  template: `
    <app-legal-page title="Aviso legal">
      <h2>1. Titular</h2>
      <p>
        Titular: Pablo Egüen Sariego<br />
        NIF: 53649673B<br />
        Domicilio: Avd. de la Playa 21, 3B, 33320 Colunga (Asturias)<br />
        Email: eguenutricion&#64;gmail.com<br />
        Actividad: servicios de nutrición clínica y tratamiento nutricional.
      </p>
      <h2>2. Profesión regulada</h2>
      <p>
        Datos profesionales: Dietista-Nutricionista colegiado en el Colegio Profesional de
        Dietistas-Nutricionistas del Principado de Asturias (CODINUPA), n.º de colegiado AS00041.
      </p>
      <h2>3. Objeto</h2>
      <p>
        La web y aplicaciones asociadas facilitan información, contratación y acceso a Nutrepe,
        servicio de nutrición clínica personalizado con apoyo tecnológico e inteligencia
        artificial y supervisión profesional.
      </p>
      <h2>4. Condiciones de uso</h2>
      <p>
        El usuario se compromete a utilizar el servicio de forma lícita, a no acceder a datos de
        terceros, no interferir con los sistemas y no utilizar Nutrepe con fines fraudulentos o
        contrarios a la ley.
      </p>
      <h2>5. Propiedad intelectual e industrial</h2>
      <p>
        La marca, textos, diseños, materiales nutricionales, estructura, software y demás
        contenidos propios están protegidos por la normativa aplicable. La contratación no supone
        cesión de derechos de propiedad intelectual o industrial.
      </p>
      <h2>6. Responsabilidad y disponibilidad</h2>
      <p>
        Nutrepe adopta medidas razonables para mantener el servicio disponible y seguro, aunque
        pueden existir interrupciones por mantenimiento, actualización o incidencias. Nutrepe no
        es un servicio de urgencias ni sustituye la atención médica que resulte necesaria.
      </p>
      <h2>7. Precios</h2>
      <p>
        Cuando se muestren precios, se indicará de forma clara el importe total y si incluye los
        impuestos aplicables.
      </p>
      <h2>8. Ley aplicable</h2>
      <p>
        Se aplica la legislación española, sin perjuicio de los derechos imperativos de
        consumidores y usuarios.
      </p>
    </app-legal-page>
  `,
})
export class AvisoLegalComponent {}
