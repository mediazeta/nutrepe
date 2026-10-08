export type ProductTab = {
  id: string;
  icon: "clipboard-list" | "chef-hat" | "message-circle" | "chart-line" | "stethoscope";
  tabLabel: string;
  title: string;
  description: string;
  points: string[];
};

export const productTabs: ProductTab[] = [
  {
    id: "plan",
    icon: "clipboard-list",
    tabLabel: "Mi plan nutricional",
    title: "Mi plan nutricional",
    description:
      "Tu planificación semanal, siempre a mano, con las cantidades y recomendaciones que tu nutricionista ha definido para ti.",
    points: [
      "Planificación de comidas adaptada a tu día",
      "Distribución semanal clara y organizada",
      "Cantidades y recomendaciones personalizadas",
      "Información nutricional cuando corresponda",
    ],
  },
  {
    id: "recetas",
    icon: "chef-hat",
    tabLabel: "Recetas y alternativas",
    title: "Recetas y alternativas",
    description:
      "Ideas prácticas para no repetir siempre lo mismo, con alternativas que respetan tus gustos dentro de las reglas de tu plan.",
    points: [
      "Ideas de recetas sencillas de preparar",
      "Sustitución de alimentos equivalentes",
      "Alternativas adaptadas a tus preferencias",
      "Organización práctica de tus comidas",
    ],
  },
  {
    id: "asistente",
    icon: "message-circle",
    tabLabel: "Asistente inteligente",
    title: "Asistente inteligente",
    description:
      "Un chat disponible cuando lo necesitas para resolver dudas frecuentes sobre tu alimentación, siempre dentro del marco de tu plan.",
    points: [
      "Chat conversacional disponible en la app",
      "Respuestas a dudas frecuentes sobre nutrición",
      "Consultas sobre recetas y alimentos",
      "Recomendaciones coherentes con tu plan validado",
    ],
  },
  {
    id: "evolucion",
    icon: "chart-line",
    tabLabel: "Mi evolución",
    title: "Mi evolución",
    description:
      "Un registro sencillo de tu progreso, para que veas con claridad el camino recorrido y los objetivos que te quedan.",
    points: [
      "Registro de peso cuando corresponda",
      "Seguimiento de tus objetivos personales",
      "Evolución visual mediante gráficos",
      "Historial de tus progresos",
    ],
  },
  {
    id: "seguimiento",
    icon: "stethoscope",
    tabLabel: "Seguimiento profesional",
    title: "Seguimiento profesional",
    description:
      "Detrás de cada plan hay un profesional real que supervisa tu evolución y ajusta lo necesario dentro del alcance de tu servicio.",
    points: [
      "Supervisión del plan por tu nutricionista",
      "Revisión periódica de tus datos",
      "Ajustes cuando sea necesario",
      "Comunicación profesional dentro del alcance del servicio",
    ],
  },
];
