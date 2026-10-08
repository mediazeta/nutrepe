import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-frame',
  standalone: true,
  template: `
    <div
      [class]="
        'relative rounded-[2.2rem] border-[6px] border-forest bg-forest shadow-2xl ' +
        (compact ? 'w-[132px] p-1.5' : 'w-[260px] p-2 sm:w-[300px]') +
        ' ' +
        className
      "
    >
      <div
        [class]="
          'absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-forest ' +
          (compact ? 'top-1.5 h-3 w-12' : 'top-2 h-5 w-24')
        "
      ></div>
      <div
        [class]="
          'relative overflow-hidden rounded-[1.7rem] bg-cream ' +
          (compact ? 'h-[264px]' : 'h-[520px] sm:h-[600px]')
        "
      >
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class PhoneFrameComponent {
  @Input() compact = false;
  @Input() className = '';
}

@Component({
  selector: 'app-illustrative-tag',
  standalone: true,
  template: `
    <span
      class="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/85 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-cream shadow-md"
    >
      Vista ilustrativa
    </span>
  `,
})
export class IllustrativeTagComponent {}
