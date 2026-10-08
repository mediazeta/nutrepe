import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from '../../ui/container.component';
import { SectionHeadingComponent } from '../../ui/section-heading.component';
import { ButtonComponent } from '../../ui/button.component';
import { pablo } from '../../data/pablo';

@Component({
  selector: 'app-about-pablo',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent, SectionHeadingComponent, ButtonComponent],
  templateUrl: './about-pablo.component.html',
})
export class AboutPabloComponent {
  readonly pablo = pablo;
}
