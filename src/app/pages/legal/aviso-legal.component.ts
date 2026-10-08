import { Component } from '@angular/core';
import { LegalPageComponent } from './legal-page.component';

@Component({
  selector: 'app-aviso-legal',
  standalone: true,
  imports: [LegalPageComponent],
  template: `
    <app-legal-page title="Aviso legal">
      <h2>Titularidad</h2>
      <p>
        Nutrepe es un proyecto vinculado a la actividad profesional de Pablo Egüen, dietista-
        nutricionista colegiado (nº AS00041). Los datos fiscales y de identificación completos del
        titular se incorporarán antes de la publicación definitiva de este aviso.
      </p>
      <h2>Objeto</h2>
      <p>
        Esta web tiene carácter comercial e informativo sobre la plataforma Nutrepe, actualmente en
        desarrollo. No constituye en ningún caso un servicio médico de urgencia ni sustituye la
        atención sanitaria presencial cuando esta sea necesaria.
      </p>
      <h2>Propiedad intelectual</h2>
      <p>
        Los contenidos, textos, diseño e imágenes de esta web son propiedad de Nutrepe o se
        utilizan con la autorización correspondiente, salvo indicación expresa en contrario.
      </p>
    </app-legal-page>
  `,
})
export class AvisoLegalComponent {}
