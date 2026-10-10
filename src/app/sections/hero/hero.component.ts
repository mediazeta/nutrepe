import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from '../../ui/container.component';
import { ButtonComponent } from '../../ui/button.component';
import { PhoneFrameComponent } from '../../ui/phone-frame.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent, ButtonComponent, PhoneFrameComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
