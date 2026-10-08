export type FaqItem = {
  question: string;
  answer: string;
  provisional?: boolean;
};

export const faqs: FaqItem[] = [
  {
    question: "¿Qué es Nutrepe?",
    answer:
      "Nutrepe es una plataforma digital de nutrición personalizada que combina un plan de alimentación elaborado y supervisado por un dietista-nutricionista con herramientas digitales y un asistente de inteligencia artificial que te acompaña en tu día a día.",
  },
  {
    question: "¿En qué se diferencia de una dieta convencional?",
    answer:
      "Tu plan no es una plantilla fija: se adapta a tus circunstancias y evoluciona con seguimiento profesional. Además, dispones de herramientas digitales y un asistente inteligente para resolver dudas entre consultas, algo que una dieta en papel no ofrece.",
  },
  {
    question: "¿Quién elabora mi plan de alimentación?",
    answer:
      "Tu plan lo elabora o valida un dietista-nutricionista colegiado. La tecnología ayuda a que la experiencia sea más cómoda, pero las decisiones sobre tu alimentación corresponden al profesional.",
  },
  {
    question: "¿Cómo funciona el asistente con inteligencia artificial?",
    answer:
      "El asistente te ayuda a resolver dudas frecuentes sobre alimentación, recetas y alternativas, siempre dentro de las reglas de tu plan validado. No diagnostica enfermedades, no prescribe tratamientos ni modifica tu plan clínico de forma autónoma.",
  },
  {
    question: "¿Es necesario tener conocimientos de nutrición?",
    answer:
      "No. Nutrepe está pensado para que cualquier persona pueda seguir su plan sin necesidad de conocimientos previos. El profesional y la app te acompañan en cada paso.",
  },
  {
    question: "¿Puedo utilizar Nutrepe desde mi móvil?",
    answer:
      "Sí. Nutrepe está diseñado para usarse cómodamente desde el móvil, la tablet o el ordenador, allá donde te resulte más práctico.",
  },
  {
    question: "¿La aplicación sustituye a un nutricionista?",
    answer:
      "No. Nutrepe es una herramienta que acompaña el trabajo del profesional, no un sustituto. Determinadas situaciones clínicas requieren una valoración específica que solo un profesional puede realizar.",
  },
  {
    question: "¿El plan se adapta a mis objetivos?",
    answer:
      "Sí, el plan se diseña a partir de tus objetivos, hábitos y preferencias, y se ajusta con el seguimiento profesional que incluya tu modalidad de suscripción.",
  },
  {
    question: "¿Qué incluye la suscripción?",
    answer:
      "Cada modalidad detalla qué incluye exactamente: acceso a la app, plan personalizado, asistente inteligente, herramientas de seguimiento y supervisión profesional según los términos definidos. Las condiciones exactas de cada plan están sujetas a confirmación final.",
    provisional: true,
  },
  {
    question: "¿Puedo cancelar mi suscripción?",
    answer:
      "La idea es ofrecer condiciones flexibles de cancelación, pero las condiciones definitivas de permanencia y cancelación todavía están pendientes de confirmación.",
    provisional: true,
  },
  {
    question: "¿Puedo utilizar el servicio si tengo una patología?",
    answer:
      "Algunas situaciones clínicas requieren una valoración profesional específica antes de empezar. Si tienes una patología, coméntalo durante el proceso de alta para que el equipo profesional pueda valorar si Nutrepe es adecuado para tu caso.",
  },
];
