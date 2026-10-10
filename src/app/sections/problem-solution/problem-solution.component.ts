import { Component } from '@angular/core';
import { ContainerComponent } from '../../ui/container.component';
import { SectionHeadingComponent } from '../../ui/section-heading.component';
import { problems } from '../../data/problems';

const SOLUTIONS = [
  'Un plan flexible, pensado para adaptarse a ti y no al revés',
  'Supervisión profesional que ajusta el rumbo cuando hace falta',
  'Un asistente inteligente disponible para tus dudas del día a día',
  'Planificación semanal clara, siempre accesible desde la app',
  'Herramientas digitales que facilitan mantener la constancia',
];

@Component({
  selector: 'app-problem-solution',
  standalone: true,
  imports: [ContainerComponent, SectionHeadingComponent],
  templateUrl: './problem-solution.component.html',
})
export class ProblemSolutionComponent {
  readonly problems = problems;
  readonly solutions = SOLUTIONS;
}
