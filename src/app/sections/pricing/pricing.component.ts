import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  private readonly router = inject(Router);
  readonly plans = plans;

  start(planId: string) {
    this.router.navigate(['/contratar'], { queryParams: { plan: planId } });
  }
}
