import { Component, computed, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from '../../ui/container.component';
import { SectionHeadingComponent } from '../../ui/section-heading.component';
import { PhoneFrameComponent } from '../../ui/phone-frame.component';
import { productTabs } from '../../data/features';

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent, SectionHeadingComponent, PhoneFrameComponent],
  templateUrl: './product-showcase.component.html',
})
export class ProductShowcaseComponent {
  readonly tabs = productTabs;
  readonly activeId = signal(productTabs[0].id);

  readonly activeTab = computed(
    () => this.tabs.find((t) => t.id === this.activeId()) ?? this.tabs[0]
  );

  select(id: string) {
    this.activeId.set(id);
  }
}
