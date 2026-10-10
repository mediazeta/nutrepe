import { Component } from '@angular/core';
import { ContainerComponent } from '../../ui/container.component';
import { SectionHeadingComponent } from '../../ui/section-heading.component';
import { ButtonComponent } from '../../ui/button.component';
import { plans } from '../../data/plans';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [ContainerComponent, SectionHeadingComponent, ButtonComponent],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  readonly plans = plans;
}
