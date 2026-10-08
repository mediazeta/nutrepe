import { Component, Input } from '@angular/core';
import { ContainerComponent } from '../../ui/container.component';

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [ContainerComponent],
  template: `
    <div class="py-20">
      <app-container className="max-w-3xl">
        <h1 class="text-3xl font-extrabold text-forest">{{ title }}</h1>
        <div class="mt-3 rounded-xl bg-warm-soft px-4 py-3 text-sm text-warm">
          Borrador orientativo pendiente de revisión legal definitiva. No debe considerarse
          contenido jurídicamente vigente hasta su validación.
        </div>
        <div
          class="prose prose-sm sm:prose-base mt-8 max-w-none text-ink/80 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-forest [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5"
        >
          <ng-content></ng-content>
        </div>
      </app-container>
    </div>
  `,
})
export class LegalPageComponent {
  @Input() title = '';
}
