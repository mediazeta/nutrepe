import { Component } from '@angular/core';
import { LegalPageComponent } from './legal-page.component';

@Component({
  selector: 'app-terminos-suscripcion',
  standalone: true,
  imports: [LegalPageComponent],
  template: `
    <app-legal-page title="Términos y condiciones de contratación">
      <h2>1. Prestador</h2>
      <p>
        Pablo Egüen Sariego, NIF 53649673B, Avd. de la Playa 21, 3B, 33320 Colunga (Asturias).
        Contacto: eguenutricion&#64;gmail.com.
      </p>

      <h2>2. Qué es Nutrepe</h2>
      <p>
        Nutrepe es un servicio de nutrición clínica personalizado prestado mediante aplicación
        propia, con apoyo de inteligencia artificial y supervisión profesional. No es un servicio
        de urgencias ni sustituye el diagnóstico, prescripción o seguimiento médico cuando sean
        necesarios.
      </p>

      <h2>3. Requisitos</h2>
      <ul>
        <li>Ser mayor de 18 años.</li>
        <li>Facilitar información veraz y actualizada.</li>
        <li>Aceptar estas condiciones y haber recibido la información de privacidad.</li>
        <li>Abonar el plan contratado.</li>
      </ul>

      <h2>4. Planes y renovación</h2>
      <ul>
        <li>
          <strong>Mensual</strong> — 39,90 €, duración 1 mes. Renovación automática cada mes por
          39,90 €, salvo cancelación previa.
        </li>
        <li>
          <strong>6 meses</strong> — 200 €, duración 6 meses. Renovación automática por nuevos
          periodos de 6 meses por 200 €, salvo cancelación previa.
        </li>
      </ul>
      <p>
        El precio total, impuestos aplicables, duración y condiciones de renovación se mostrarán
        de forma clara inmediatamente antes del pago.
      </p>

      <h2>5. Qué incluye</h2>
      <ul>
        <li>Acceso a Nutrepe durante el periodo contratado.</li>
        <li>Cuestionario y valoración nutricional inicial.</li>
        <li>Propuesta personalizada y validación profesional obligatoria del primer plan.</li>
        <li>Seguimiento digital de evolución y adherencia.</li>
        <li>Apoyo mediante IA dentro del tratamiento y supervisión profesional.</li>
        <li>Adaptaciones del tratamiento cuando sean necesarias dentro del seguimiento contratado.</li>
      </ul>
      <p>
        Las consultas individuales presenciales o por videollamada no están incluidas salvo que la
        oferta lo indique expresamente. Las condiciones y precio de cualquier consulta adicional
        se mostrarán antes de reservarla.
      </p>

      <h2>6. Contratación y pago</h2>
      <p>
        El pago se procesa mediante TPV virtual de Banco Sabadell. Antes de finalizar el pedido se
        mostrará de manera destacada la información esencial y el botón indicará inequívocamente
        que existe obligación de pago. Tras contratar, recibirás confirmación en soporte duradero
        con las condiciones aplicables.
      </p>

      <h2>7. Inicio del servicio y desistimiento</h2>
      <p>
        Dispones, con carácter general, de 14 días naturales desde la celebración del contrato
        para desistir, salvo las excepciones legalmente previstas. Si solicitas que el servicio
        comience durante ese plazo, Nutrepe recabará una solicitud expresa. Si desistes después de
        que la prestación haya comenzado a petición tuya, podrá corresponder el importe
        proporcional a la parte ya prestada. La pérdida del derecho por completa ejecución de un
        servicio de pago solo operará cuando concurran los requisitos legales y hayas sido
        informado de ello.
      </p>

      <h2>8. Cancelación de la renovación</h2>
      <p>
        Puedes cancelar futuras renovaciones mediante el mecanismo habilitado en tu cuenta. La
        cancelación evita el siguiente cobro y mantiene el acceso hasta el final del periodo ya
        abonado, salvo causa legítima de suspensión. Cancelar la suscripción no equivale a borrar
        la documentación clínica.
      </p>

      <h2>9. Impago</h2>
      <p>
        Si un cobro de renovación falla, Nutrepe podrá suspender el servicio activo mientras
        persista el impago. El bloqueo no implica el borrado de documentación que deba
        conservarse.
      </p>

      <h2>10. IA y supervisión profesional</h2>
      <p>
        La IA puede cometer errores y es una herramienta de apoyo. El primer plan requiere
        validación profesional y las incidencias clínicamente relevantes pueden ser revisadas por
        el equipo. El usuario debe comunicar cambios en diagnóstico, medicación, alergias,
        embarazo u otras circunstancias relevantes.
      </p>

      <h2>11. Límites</h2>
      <ul>
        <li>Nutrepe no garantiza un resultado clínico, pérdida de peso o evolución concreta.</li>
        <li>Ante síntomas graves o una urgencia debes acudir a los servicios sanitarios correspondientes.</li>
        <li>La cuenta es personal e intransferible y no puede utilizarse para acceder a datos de terceros ni con fines ilícitos.</li>
      </ul>

      <h2>12. Soporte y reclamaciones</h2>
      <p>
        Las consultas y reclamaciones pueden dirigirse a eguenutricion&#64;gmail.com. Los derechos
        de consumidores y usuarios se mantienen íntegramente.
      </p>

      <h2>13. Legislación</h2>
      <p>
        Se aplica la legislación española. Cuando contrates como consumidor, cualquier regla de
        jurisdicción se entenderá sin perjuicio de los fueros y derechos imperativos que te
        correspondan.
      </p>
    </app-legal-page>
  `,
})
export class TerminosSuscripcionComponent {}
