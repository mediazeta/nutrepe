import { Component } from '@angular/core';
import { ContainerComponent } from '../../ui/container.component';
import { SectionHeadingComponent } from '../../ui/section-heading.component';
import { steps } from '../../data/steps';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [ContainerComponent, SectionHeadingComponent],
  templateUrl: './how-it-works.component.html',
})
export class HowItWorksComponent {
  readonly steps = steps;
}
