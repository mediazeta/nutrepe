import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  standalone: true,
  template: `
    <div class="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 {{ className }}">
      <ng-content></ng-content>
    </div>
  `,
})
export class ContainerComponent {
  @Input() className = '';
}
