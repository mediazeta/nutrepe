// Datos generales del sitio. Centralizados para facilitar el mantenimiento.
// Los marcados como [PENDIENTE DE VALIDAR] requieren confirmación antes de publicar.

export const site = {
  name: "Nutrepe",
  tagline: "Nutrición personalizada, seguimiento profesional e inteligencia artificial. Todo en un mismo lugar.",
  url: "https://www.nutrepe.com", // [PENDIENTE DE VALIDAR] dominio definitivo
  description:
    "Nutrepe combina planes de alimentación personalizados, supervisión de un dietista-nutricionista colegiado y un asistente de inteligencia artificial para acompañarte en tu día a día.",
  contact: {
    email: "eguenutricion@gmail.com",
    phone: "636 298 492",
    location: "Gijón, Asturias",
  },
  professional: {
    name: "Pablo Egüen",
    license: "Colegiado nº AS00041",
    personalSite: "https://www.pabloeguennutricion.com/",
  },
  social: {
    instagram: "https://www.instagram.com/pabloeguendn/", // cuenta personal de Pablo; [PENDIENTE DE VALIDAR] cuenta propia de Nutrepe
    facebook: "https://www.facebook.com/eguenutricion/",
  },
} as const;
