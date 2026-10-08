import { Component } from '@angular/core';
import { ContainerComponent } from '../../ui/container.component';
import { WaitlistFormComponent } from '../../waitlist-form/waitlist-form.component';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [ContainerComponent, WaitlistFormComponent],
  templateUrl: './final-cta.component.html',
})
export class FinalCtaComponent {}
