import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from '../ui/container.component';
import { LogoComponent } from '../ui/logo.component';
import { navLinks } from '../data/nav';
import { site } from '../data/site';

const CURRENT_YEAR = 2026;

const legalLinks = [
  { label: 'Aviso legal', href: '/legal/aviso-legal' },
  { label: 'Política de privacidad', href: '/legal/privacidad' },
  { label: 'Política de cookies', href: '/legal/cookies' },
  { label: 'Términos de contratación', href: '/legal/terminos-suscripcion' },
] as const;

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent, LogoComponent, RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly navLinks = navLinks;
  readonly legalLinks = legalLinks;
  readonly site = site;
  readonly currentYear = CURRENT_YEAR;

  get phoneHref(): string {
    return `tel:${site.contact.phone.replace(/\s/g, '')}`;
  }
}
