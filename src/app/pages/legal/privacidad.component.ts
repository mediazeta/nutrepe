import { Component } from '@angular/core';
import { LegalPageComponent } from './legal-page.component';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [LegalPageComponent],
  template: `
    <app-legal-page title="Política de privacidad e información sobre IA">
      <h2>1. Responsable</h2>
      <p>
        Responsable: Pablo Egüen Sariego<br />
        NIF: 53649673B<br />
        Domicilio: Avd. de la Playa 21, 3B, 33320 Colunga (Asturias)<br />
        Correo de privacidad y contacto: eguenutricion&#64;gmail.com
      </p>

      <h2>2. Qué datos tratamos</h2>
      <p>
        Según el uso que hagas de Nutrepe, podemos tratar datos identificativos y de contacto;
        datos de cuenta, contratación y pago; hábitos y alimentación; antropometría y objetivos;
        alergias e intolerancias; patologías, antecedentes, medicación y suplementación; síntomas;
        analíticas, informes, documentos e imágenes; plan nutricional; evolución, adherencia y
        alertas; y conversaciones mantenidas dentro del servicio.
      </p>

      <h2>3. Para qué los usamos y por qué</h2>
      <ul>
        <li>
          <strong>Crear y gestionar la cuenta, suscripción, soporte y relación contractual</strong
          > — base: ejecución del contrato y obligaciones legales.
        </li>
        <li>
          <strong>Valorar el caso, elaborar/validar/adaptar el plan y realizar seguimiento
          nutricional</strong> — base: ejecución del servicio; para datos de salud, tratamiento
          necesario para asistencia o tratamiento sanitario por profesional sujeto a secreto
          profesional (RGPD art. 9.2.h).
        </li>
        <li>
          <strong>Seguridad, trazabilidad y defensa ante incidencias/reclamaciones</strong> —
          base: obligaciones legales y, cuando corresponda, interés legítimo en seguridad y
          defensa jurídica.
        </li>
        <li>
          <strong>Comunicaciones comerciales opcionales</strong> — base: consentimiento, que puede
          retirarse en cualquier momento.
        </li>
      </ul>

      <h2>4. Cómo utiliza Nutrepe la inteligencia artificial</h2>
      <p>
        Nutrepe utiliza inteligencia artificial como herramienta de apoyo al tratamiento.
        Dependiendo de la función, puede enviar al proveedor de IA la información necesaria para
        contextualizar la respuesta: tu mensaje, historial reciente o resumen de conversación,
        objetivo, calorías/macros, alergias, patologías, restricciones, medicación, reglas y plan
        activo, cuestionario, evolución, alertas, adherencia y fragmentos relevantes de
        documentos. Si solicitas analizar un documento o imagen, su contenido puede procesarse
        para esa finalidad.
      </p>
      <p>
        La IA no sustituye al dietista-nutricionista. El primer plan nutricional requiere
        validación profesional. Las respuestas pueden ser revisadas, corregidas o descartadas y la
        información clínicamente relevante puede escalarse a revisión humana. Nutrepe no pretende
        adoptar decisiones asistenciales con efectos significativos basadas exclusivamente en un
        proceso automatizado.
      </p>
      <p>
        Actualmente se utiliza Google Gemini API en modalidad Paid Tier. El chat y la generación
        de planes utilizan <code>generateContent</code>; se usa también el SDK oficial para
        análisis de documentos/imágenes y <code>embedContent</code> para embeddings. No se usan
        Interactions API, File API, datasets compartidos ni caché explícita. Nutrepe no enviará
        feedback a Google con datos reales de pacientes ni creará datasets compartidos con datos
        clínicos. El proveedor puede mantener logs técnicos conforme a sus condiciones y
        configuración aplicables.
      </p>

      <h2>5. Proveedores</h2>
      <ul>
        <li>
          <strong>Supabase/AWS</strong> — infraestructura principal de producción, base de datos,
          documentos y backups en eu-west-1 (Irlanda).
        </li>
        <li><strong>Google Gemini API</strong> — procesamiento de IA, documentos, imágenes y embeddings cuando sea necesario.</li>
        <li>
          <strong>CloudPoint</strong> — gestión lógica de agenda/slots; según la configuración
          comunicada, recibe únicamente un ID anónimo y no datos personales o de salud.
        </li>
        <li><strong>Banco Sabadell/TPV</strong> — gestión del pago conforme a las condiciones del servicio de pago.</li>
      </ul>

      <h2>6. Conservación</h2>
      <p>
        Cancelar la suscripción no elimina automáticamente la documentación asistencial. Tras la
        baja, el acceso ordinario se bloquea y la documentación clínica se conserva de forma
        restringida durante el plazo legal aplicable. En Asturias, la documentación clínica debe
        conservarse, con carácter general, al menos cinco años desde el alta de cada proceso
        asistencial, sin perjuicio de documentos o situaciones que requieran conservación
        superior. Cuando proceda la supresión, se realizará mediante un proceso independiente y
        controlado.
      </p>

      <h2>7. Seguridad</h2>
      <p>
        Se aplican medidas técnicas y organizativas como HTTPS/TLS, cifrado de infraestructura en
        reposo, contraseñas con hash bcrypt, control por roles, cuentas nominativas y auditoría de
        accesos clínicos. Ningún sistema es absolutamente invulnerable, por lo que las medidas se
        revisan de forma periódica.
      </p>

      <h2>8. Tus derechos</h2>
      <p>
        Puedes solicitar acceso, rectificación, supresión, limitación, oposición o portabilidad
        cuando proceda, y retirar consentimientos, escribiendo a eguenutricion&#64;gmail.com.
        Podremos pedir información razonable para verificar tu identidad. También puedes presentar
        una reclamación ante la Agencia Española de Protección de Datos.
      </p>

      <h2>9. Mayores de edad</h2>
      <p>
        Nutrepe se dirige inicialmente a personas mayores de 18 años. No debe utilizarse para
        registrar a menores en esta fase del servicio.
      </p>

      <h2>10. Cambios</h2>
      <p>
        Esta política se actualizará si cambian finalidades, proveedores, tecnologías, datos
        tratados o requisitos legales. Las modificaciones relevantes se comunicarán de forma
        adecuada y se conservará el historial de versiones.
      </p>
    </app-legal-page>
  `,
})
export class PrivacidadComponent {}
