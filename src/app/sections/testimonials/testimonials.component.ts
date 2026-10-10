import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ContainerComponent } from '../../ui/container.component';
import { SectionHeadingComponent } from '../../ui/section-heading.component';
import { professionalTestimonials } from '../../data/testimonials';

const AUTO_ADVANCE_MS = 7000;

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [ContainerComponent, SectionHeadingComponent],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  private readonly destroyRef = inject(DestroyRef);

  readonly testimonials = professionalTestimonials;
  readonly activeIndex = signal(0);

  private timer?: ReturnType<typeof setInterval>;

  constructor() {
    this.startAutoAdvance();
    this.destroyRef.onDestroy(() => this.stopAutoAdvance());
  }

  select(index: number) {
    this.activeIndex.set(index);
    this.restartAutoAdvance();
  }

  private startAutoAdvance() {
    this.timer = setInterval(() => {
      this.activeIndex.update((i) => (i + 1) % this.testimonials.length);
    }, AUTO_ADVANCE_MS);
  }

  private stopAutoAdvance() {
    if (this.timer) clearInterval(this.timer);
  }

  private restartAutoAdvance() {
    this.stopAutoAdvance();
    this.startAutoAdvance();
  }
}
