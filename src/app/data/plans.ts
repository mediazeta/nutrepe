// Precios según los Términos y Condiciones de Contratación v1.0 (11/09/2026),
// todavía marcados por el propio documento como "para revisión jurídica final".

export type Plan = {
  id: string;
  name: string;
  price: string;
  priceDetail: string;
  billingNote?: string;
  savingsNote?: string;
  recommended?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "mensual",
    name: "Plan mensual",
    price: "39,90 €",
    priceDetail: "/mes",
    billingNote: "Renovación automática mensual, cancelable en cualquier momento",
    features: [
      "Acceso completo a la aplicación",
      "Plan de alimentación personalizado",
      "Asistente inteligente",
      "Herramientas de seguimiento y registro",
      "Supervisión profesional según los términos del plan",
    ],
  },
  {
    id: "semestral",
    name: "Plan semestral",
    price: "200 €",
    priceDetail: "/ cada 6 meses",
    billingNote: "Equivalente a 33,33 €/mes · renovación automática cada 6 meses",
    savingsNote: "Ahorras 39,40 € frente a 6 mensualidades",
    recommended: true,
    features: [
      "Todo lo incluido en el plan mensual",
      "Precio reducido por mantener la constancia",
      "Pensado para ver resultados con continuidad",
    ],
  },
];
