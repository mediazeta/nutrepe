import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LucideAngularModule } from 'lucide-angular';
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Utensils,
  ChartLine,
  CircleX,
  CircleCheck,
  ClipboardList,
  ChefHat,
  MessageCircle,
  Stethoscope,
  Check,
  ShieldCheck,
  Bot,
  UserCheck,
  ExternalLink,
  GraduationCap,
  BadgeCheck,
  Star,
  Quote,
  FlaskConical,
  ChevronDown,
  CircleCheckBig,
  LoaderCircle,
  Mail,
  Phone,
  MapPin,
  Leaf,
  Plus,
  Minus,
  Folder,
  CalendarCheck,
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top', anchorScrolling: 'enabled' })
    ),
    provideHttpClient(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu,
        X,
        Sparkles,
        ArrowRight,
        Utensils,
        ChartLine,
        CircleX,
        CircleCheck,
        ClipboardList,
        ChefHat,
        MessageCircle,
        Stethoscope,
        Check,
        ShieldCheck,
        Bot,
        UserCheck,
        ExternalLink,
        GraduationCap,
        BadgeCheck,
        Star,
        Quote,
        FlaskConical,
        ChevronDown,
        CircleCheckBig,
        LoaderCircle,
        Mail,
        Phone,
        MapPin,
        Leaf,
        Plus,
        Minus,
        Folder,
        CalendarCheck,
      })
    ),
  ],
};
