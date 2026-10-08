import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AvisoLegalComponent } from './pages/legal/aviso-legal.component';
import { PrivacidadComponent } from './pages/legal/privacidad.component';
import { CookiesComponent } from './pages/legal/cookies.component';
import { TerminosSuscripcionComponent } from './pages/legal/terminos-suscripcion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Nutrepe — Nutrición personalizada con IA y seguimiento profesional' },
  { path: 'legal/aviso-legal', component: AvisoLegalComponent, title: 'Aviso legal | Nutrepe' },
  { path: 'legal/privacidad', component: PrivacidadComponent, title: 'Política de privacidad | Nutrepe' },
  { path: 'legal/cookies', component: CookiesComponent, title: 'Política de cookies | Nutrepe' },
  { path: 'legal/terminos-suscripcion', component: TerminosSuscripcionComponent, title: 'Términos y condiciones de suscripción | Nutrepe' },
  { path: '**', redirectTo: '' },
];
