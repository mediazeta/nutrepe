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
        <p class="mt-2 text-sm text-muted">Versión {{ version }} · {{ date }}</p>
        <div class="mt-4 rounded-xl bg-warm-soft px-4 py-3 text-sm text-warm">
          Documento en revisión jurídica final. El contenido refleja la versión {{ version }}
          preparada para esa revisión y puede sufrir ajustes antes de su publicación definitiva.
        </div>
        <div
          class="mt-8 text-sm leading-relaxed text-ink/80 sm:text-base [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-forest [&_p]:mt-3 [&_p]:leading-relaxed [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_li]:leading-relaxed [&_strong]:font-semibold [&_strong]:text-forest [&_code]:rounded [&_code]:bg-ink/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em]"
        >
          <ng-content></ng-content>
        </div>
      </app-container>
    </div>
  `,
})
export class LegalPageComponent {
  @Input() title = '';
  @Input() version = '1.0';
  @Input() date = '11 de septiembre de 2026';
}
