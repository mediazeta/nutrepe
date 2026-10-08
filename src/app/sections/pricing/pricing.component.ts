import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from '../../ui/container.component';
import { SectionHeadingComponent } from '../../ui/section-heading.component';
import { ButtonComponent } from '../../ui/button.component';
import { plans, initialFeeNote, pricingDisclaimer } from '../../data/plans';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent, SectionHeadingComponent, ButtonComponent],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  readonly plans = plans;
  readonly initialFeeNote = initialFeeNote;
  readonly pricingDisclaimer = pricingDisclaimer;
}
