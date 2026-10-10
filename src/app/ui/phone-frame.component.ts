import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-frame',
  standalone: true,
  template: `
    <div
      [class]="
        'relative rounded-[2.2rem] border-[6px] shadow-2xl ' +
        (tone === 'dark' ? 'border-white/15 bg-white/5' : 'border-forest bg-forest') +
        ' ' +
        (compact ? 'w-[132px] p-1.5' : 'w-[260px] p-2 sm:w-[300px]') +
        ' ' +
        className
      "
    >
      <div
        [class]="
          'absolute left-1/2 z-10 -translate-x-1/2 rounded-full ' +
          (tone === 'dark' ? 'bg-white/15' : 'bg-forest') +
          ' ' +
          (compact ? 'top-1.5 h-3 w-12' : 'top-2 h-5 w-24')
        "
      ></div>
      <div
        [class]="
          'relative overflow-hidden rounded-[1.7rem] bg-cream ' +
          (compact ? 'h-[224px]' : 'h-[440px] sm:h-[508px]')
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
  /** "dark" usa un marco translúcido claro, pensado para secciones de fondo oscuro (bg-forest). */
  @Input() tone: 'light' | 'dark' = 'light';
}
