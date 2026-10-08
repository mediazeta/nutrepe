import { Component, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from '../../ui/container.component';
import { SectionHeadingComponent } from '../../ui/section-heading.component';
import { faqs } from '../../data/faq';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent, SectionHeadingComponent],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  readonly faqs = faqs;
  readonly openIndex = signal<number | null>(0);

  toggle(i: number) {
    this.openIndex.update((current) => (current === i ? null : i));
  }
}
