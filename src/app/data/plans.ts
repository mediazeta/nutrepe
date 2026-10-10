// Precios orientativos, TODAVÍA NO CONFIRMADOS. Ver nota legal en la sección de planes y en el README.
// No se procesan cobros reales: la web solo presenta la propuesta comercial.

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
    price: "40 €",
    priceDetail: "/mes",
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
    billingNote: "Equivalente a 33,33 €/mes",
    savingsNote: "Ahorras 40 € frente a 6 mensualidades",
    recommended: true,
    features: [
      "Todo lo incluido en el plan mensual",
      "Precio reducido por mantener la constancia",
      "Pensado para ver resultados con continuidad",
    ],
  },
];
