import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ContainerComponent } from '../../ui/container.component';
import { SectionHeadingComponent } from '../../ui/section-heading.component';
import { PhoneFrameComponent } from '../../ui/phone-frame.component';

const GUARANTEES = [
  {
    icon: 'bot',
    title: 'La IA facilita el día a día',
    text: 'Ayuda a resolver dudas frecuentes, sugerir alternativas y acompañar tu seguimiento diario.',
  },
  {
    icon: 'user-check',
    title: 'El profesional decide',
    text: 'Tu dietista-nutricionista es quien elabora, valida y ajusta tu plan de alimentación.',
  },
  {
    icon: 'shield-check',
    title: 'Límites claros',
    text: 'El asistente no diagnostica, no prescribe tratamientos ni modifica tu plan clínico de forma autónoma.',
  },
] as const;

@Component({
  selector: 'app-ai-section',
  standalone: true,
  imports: [LucideAngularModule, ContainerComponent, SectionHeadingComponent, PhoneFrameComponent],
  templateUrl: './ai-section.component.html',
})
export class AiSectionComponent {
  readonly guarantees = GUARANTEES;
}
