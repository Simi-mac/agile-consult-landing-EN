const WHATSAPP_NUMBER = "5541999999999";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_MESSAGES = {
  general: "Olá! Quero saber mais sobre os serviços da Tribo Ágil.",
  academia: "Olá! Tenho interesse na Academia Tribo Ágil e gostaria de mais informações.",
  treinamento: "Olá! Gostaria de solicitar uma proposta de treinamento presencial personalizado.",
  mentoria: "Olá! Quero saber mais sobre as mentorias individuais e em grupo da Tribo Ágil.",
  consultoria: "Olá! Tenho interesse em consultoria organizacional e gostaria de um diagnóstico.",
  diagnostico: "Olá! Quero saber mais sobre os serviços da Tribo Ágil e gostaria de um diagnóstico gratuito.",
};
