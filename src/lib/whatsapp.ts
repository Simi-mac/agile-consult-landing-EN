// Número Telegram com código do país (BR = 55). Formato: 55 + DDD + número
const TELEGRAM_NUMBER = "55" + "41999484680"; // 41999484680 -> +55 41 99948-4680

export const whatsappLink = (message: string) =>
  `https://t.me/+${TELEGRAM_NUMBER}?text=${encodeURIComponent(message)}`;

export const WA_MESSAGES = {
  general:     "Hi! I'd like to learn more about Tribo Ágil's services.",
  academia:    "Hi! I'm interested in the Tribo Ágil Academy and would like more information.",
  treinamento: "Hi! I'd like to request a proposal for customized in-person training.",
  mentoria:    "Hi! I'd like to learn more about individual and group mentoring at Tribo Ágil.",
  consultoria: "Hi! I'm interested in organizational consulting and would like a free assessment.",
  diagnostico: "Hi! I'd like to learn more about Tribo Ágil's services and get a free operations assessment.",
};
