import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div [class]="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl text-left'">
      @if (eyebrow) {
        <span
          [class]="
            'mb-3 inline-block rounded-full px-3.5 py-1 text-xs font-semibold uppercase tracking-wide ' +
            (light ? 'bg-white/10 text-mint' : 'bg-mint-soft text-forest-2')
          "
        >
          {{ eyebrow }}
        </span>
      }
      <h2
        [class]="
          'text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.6rem] ' +
          (light ? 'text-white' : 'text-forest')
        "
      >
        {{ title }}
      </h2>
      @if (description) {
        <p
          [class]="
            'mt-4 text-base leading-relaxed sm:text-lg ' + (light ? 'text-white/75' : 'text-muted')
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
  @Input() align: 'center' | 'left' = 'center';
  @Input() light = false;
}
