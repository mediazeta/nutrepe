import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from '../../ui/container.component';
import { SectionHeadingComponent } from '../../ui/section-heading.component';
import { professionalTestimonials, pilotNote } from '../../data/testimonials';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent, SectionHeadingComponent],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  readonly testimonials = professionalTestimonials;
  readonly pilotNote = pilotNote;
}
