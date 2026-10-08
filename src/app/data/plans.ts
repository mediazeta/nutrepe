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
    price: "49,90 €",
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
    id: "trimestral",
    name: "Plan trimestral",
    price: "129,90 €",
    priceDetail: "/ cada 3 meses",
    billingNote: "Equivalente a 43,30 €/mes",
    savingsNote: "Ahorras 19,80 € frente a 3 mensualidades",
    recommended: true,
    features: [
      "Todo lo incluido en el plan mensual",
      "Precio reducido por mantener la constancia",
      "Pensado para ver resultados con continuidad",
    ],
  },
];

export const initialFeeNote =
  "Podría aplicarse una cuota inicial de 59,90 € si el servicio incluye una evaluación y elaboración inicial del plan que la justifique. [PENDIENTE DE VALIDAR]";

export const pricingDisclaimer =
  "Los importes mostrados son una propuesta comercial orientativa, todavía no confirmada ni operativa. No se realizan cobros reales desde esta web hasta que las tarifas y condiciones queden validadas.";
