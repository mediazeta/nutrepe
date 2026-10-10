import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div [class]="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left'">
      @if (eyebrow) {
        <span
          [class]="
            'mb-4 block text-xs font-bold uppercase tracking-[0.14em] ' +
            (light ? 'text-mint' : 'text-mint')
          "
        >
          {{ eyebrow }}
        </span>
      }
      <h2
        [class]="
          'text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ' +
          (light ? 'text-white' : 'text-forest')
        "
      >
        {{ title }}
      </h2>
      @if (description) {
        <p
          [class]="
            'mt-5 text-base leading-relaxed sm:text-lg ' + (light ? 'text-white/70' : 'text-muted')
          "
        >
          {{ description }}
        </p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  @Input() eyebrow?: string;
  @Input() title = '';
  @Input() description?: string;
  @Input() align: 'center' | 'left' = 'left';
  @Input() light = false;
}
