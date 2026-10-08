import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from '../../ui/container.component';
import { ButtonComponent } from '../../ui/button.component';
import { PhoneFrameComponent, IllustrativeTagComponent } from '../../ui/phone-frame.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent, ButtonComponent, PhoneFrameComponent, IllustrativeTagComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly evolutionBars = [40, 55, 48, 65, 60, 72, 68];
  readonly meals = [
    { meal: 'Desayuno', item: 'Avena con fruta y semillas' },
    { meal: 'Comida', item: 'Arroz, pollo y verduras al horno' },
    { meal: 'Merienda', item: 'Yogur natural con nueces' },
    { meal: 'Cena', item: 'Tortilla de espinacas y tomate' },
  ];
}
