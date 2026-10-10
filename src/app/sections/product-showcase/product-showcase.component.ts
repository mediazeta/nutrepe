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
  readonly activeIndex = signal(0);

  readonly activeTab = computed(() => this.tabs[this.activeIndex()]);

  select(id: string) {
    const index = this.tabs.findIndex((t) => t.id === id);
    if (index >= 0) this.activeIndex.set(index);
  }

  selectIndex(index: number) {
    this.activeIndex.set(index);
  }

  previous() {
    this.activeIndex.update((i) => (i - 1 + this.tabs.length) % this.tabs.length);
  }

  next() {
    this.activeIndex.update((i) => (i + 1) % this.tabs.length);
  }
}
