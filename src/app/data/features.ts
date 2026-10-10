export type ProductTab = {
  id: string;
  icon: 'clipboard-list' | 'chart-line' | 'message-circle' | 'folder' | 'calendar-check';
  tabLabel: string;
  title: string;
  description: string;
  points: string[];
  // Captura real de la app (public/app/*.png), no un mockup ilustrativo.
  screenshot: string;
};

export const productTabs: ProductTab[] = [
  {
    id: 'plan',
    icon: 'clipboard-list',
    tabLabel: 'Mi plan nutricional',
    title: 'Mi plan nutricional',
    description:
      'Tu menú semanal organizado por día, con la adherencia, la racha y el avance del plan siempre a la vista.',
    points: [
      'Menú semanal con cada comida del día',
      'Indicadores de adherencia y racha',
      'Progreso del plan actual de un vistazo',
      'Cantidades que puedes mostrar u ocultar',
    ],
    screenshot: 'plan.png',
  },
  {
    id: 'evolucion',
    icon: 'chart-line',
    tabLabel: 'Mi evolución',
    title: 'Mi evolución',
    description:
      'Registra revisiones de peso, medidas y sensaciones entre consultas, y ve tu progreso semanal resumido.',
    points: [
      'Nuevo registro de peso y medidas en un toque',
      'Progreso de la semana y racha de constancia',
      'Resumen semanal con prioridades para ajustar',
      'Historial de revisiones entre consultas',
    ],
    screenshot: 'evolucion.png',
  },
  {
    id: 'chat',
    icon: 'message-circle',
    tabLabel: 'Asistente Inteligente con IA',
    title: 'Asistente Inteligente con IA',
    description:
      'Resuelve dudas sobre tu menú en cualquier momento, con respuestas basadas en tu plan nutricional real.',
    points: [
      'Chat disponible dentro de la app',
      'Respuestas basadas en tu plan y tus preferencias',
      'Sugerencias concretas para tu próxima comida',
      'Límite de mensajes diarios transparente',
    ],
    screenshot: 'chat.png',
  },
  {
    id: 'documentos',
    icon: 'folder',
    tabLabel: 'Mis documentos',
    title: 'Mis documentos',
    description:
      'Tu cuestionario inicial y tus documentos privados, siempre a mano para ti y para tu nutricionista.',
    points: [
      'Resumen de tu cuestionario: objetivo, actividad, dieta',
      'Documentos privados que puedes subir cuando quieras',
      'Edición del cuestionario si cambia tu situación',
      'Historial con fecha de última actualización',
    ],
    screenshot: 'documentos.png',
  },
  {
    id: 'citas',
    icon: 'calendar-check',
    tabLabel: 'Citas',
    title: 'Citas con tu nutricionista',
    description:
      'Reserva tu próxima consulta y consulta el historial de citas anteriores, sin salir de la app.',
    points: [
      'Reserva de nueva cita en los huecos disponibles',
      'Próximas citas y confirmación automática',
      'Historial de consultas anteriores',
      'Contacto directo si necesitas una cita urgente',
    ],
    screenshot: 'citas.png',
  },
];
