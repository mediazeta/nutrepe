import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-frame',
  standalone: true,
  template: `
    <div
      [class]="
        'relative shadow-2xl ' +
        (tone === 'dark' ? 'bg-white/10' : 'bg-forest') +
        ' ' +
        (compact
          ? 'w-[132px] rounded-[1.6rem] border-[2.5px] p-1'
          : 'w-[260px] rounded-[2.6rem] border-[3px] p-1.5 sm:w-[300px]') +
        ' ' +
        (tone === 'dark' ? 'border-white/20' : 'border-forest') +
        ' ' +
        className
      "
    >
      <!-- botón lateral, detalle de realismo -->
      <span
        [class]="
          'absolute right-[-3px] rounded-r-sm ' +
          (tone === 'dark' ? 'bg-white/20' : 'bg-forest') +
          ' ' +
          (compact ? 'top-6 h-4 w-[2.5px]' : 'top-14 h-8 w-[3px]')
        "
      ></span>

      <div
        [class]="
          'relative overflow-hidden bg-cream ' +
          (compact ? 'h-[224px] rounded-[1.25rem]' : 'h-[440px] rounded-[2.15rem] sm:h-[508px]')
        "
      >
        <div
          [class]="
            'absolute left-1/2 z-10 -translate-x-1/2 rounded-full ' +
            (tone === 'dark' ? 'bg-ink/80' : 'bg-ink/90') +
            ' ' +
            (compact ? 'top-1.5 h-2.5 w-10' : 'top-2.5 h-4 w-20')
          "
        ></div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class PhoneFrameComponent {
  @Input() compact = false;
  @Input() className = '';
  /** "dark" usa un marco translúcido claro, pensado para secciones de fondo oscuro (bg-forest). */
  @Input() tone: 'light' | 'dark' = 'light';
}
