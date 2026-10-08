import { Component, HostListener, signal } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonComponent } from '../ui/button.component';
import { LogoComponent } from '../ui/logo.component';
import { ContainerComponent } from '../ui/container.component';
import { navLinks } from '../data/nav';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, ButtonComponent, LogoComponent, ContainerComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly navLinks = navLinks;
  readonly open = signal(false);
  readonly scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 8);
  }

  get headerClasses(): string {
    return this.scrolled()
      ? 'bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,30,110,0.08)]'
      : 'bg-transparent';
  }

  toggle() {
    this.open.update((v) => !v);
  }

  close() {
    this.open.set(false);
  }
}
