import { Component } from '@angular/core';
import { HeroComponent } from '../../sections/hero/hero.component';
import { ProblemSolutionComponent } from '../../sections/problem-solution/problem-solution.component';
import { HowItWorksComponent } from '../../sections/how-it-works/how-it-works.component';
import { ProductShowcaseComponent } from '../../sections/product-showcase/product-showcase.component';
import { AiSectionComponent } from '../../sections/ai-section/ai-section.component';
import { AboutPabloComponent } from '../../sections/about-pablo/about-pablo.component';
import { PricingComponent } from '../../sections/pricing/pricing.component';
import { TestimonialsComponent } from '../../sections/testimonials/testimonials.component';
import { FaqComponent } from '../../sections/faq/faq.component';
import { FinalCtaComponent } from '../../sections/final-cta/final-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ProblemSolutionComponent,
    HowItWorksComponent,
    ProductShowcaseComponent,
    AiSectionComponent,
    AboutPabloComponent,
    PricingComponent,
    TestimonialsComponent,
    FaqComponent,
    FinalCtaComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-problem-solution></app-problem-solution>
    <app-how-it-works></app-how-it-works>
    <app-product-showcase></app-product-showcase>
    <app-ai-section></app-ai-section>
    <app-about-pablo></app-about-pablo>
    <app-pricing></app-pricing>
    <app-testimonials></app-testimonials>
    <app-faq></app-faq>
    <app-final-cta></app-final-cta>
  `,
})
export class HomeComponent {}
