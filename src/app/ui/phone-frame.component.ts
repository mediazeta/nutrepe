import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-phone-frame',
  standalone: true,
  template: `
    <div
      [class]="
        'relative bg-black shadow-2xl ' +
        (tone === 'dark' ? 'ring-1 ring-white/15' : '') +
        ' ' +
        (compact
          ? 'w-[132px] rounded-[1.6rem] border-[3px] border-black p-1'
          : 'w-[260px] rounded-[2.6rem] border-[5px] border-black p-1.5 sm:w-[300px]') +
        ' ' +
        className
      "
    >
      <!-- botón lateral, detalle de realismo -->
      <span
        [class]="
          'absolute right-[-3px] rounded-r-sm bg-neutral-700 ' +
          (compact ? 'top-6 h-4 w-[2.5px]' : 'top-14 h-8 w-[3px]')
        "
      ></span>

      <div
        [class]="
          'relative overflow-hidden bg-white ' +
          (compact ? 'h-[224px] rounded-[1.25rem]' : 'h-[440px] rounded-[2.15rem] sm:h-[508px]')
        "
      >
        <div
          [class]="
            'absolute left-1/2 z-10 -translate-x-1/2 rounded-full bg-black ' +
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
  /** "dark" añade un halo sutil para que el bisel negro se distinga sobre fondos oscuros. */
  @Input() tone: 'light' | 'dark' = 'light';
}
