import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <span class="inline-flex items-center gap-2">
      <img
        src="brand/nutrepe-mark.png"
        alt="Nutrepe"
        [style.width.px]="markSize"
        [style.height.px]="markSize"
        class="shrink-0"
      />
      <span [class]="'text-lg font-extrabold tracking-tight ' + wordmarkClassName">Nutrepe</span>
    </span>
  `,
})
export class LogoComponent {
  @Input() markSize = 36;
  @Input() wordmarkClassName = '';
}
