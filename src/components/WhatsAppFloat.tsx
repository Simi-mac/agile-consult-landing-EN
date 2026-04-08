import { useTranslation } from "react-i18next";
import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/analytics";

const WhatsAppFloat = () => {
  const { t } = useTranslation();

  return (
  <a
    href={whatsappLink(WA_MESSAGES.general)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackWhatsAppClick('float_button')}
    className="fixed bottom-7 right-7 z-50 w-[58px] h-[58px] rounded-full bg-gradient-to-br from-[#2AABEE] to-[#229ED9] flex items-center justify-center animate-wa-pulse hover:scale-110 transition-transform duration-[250ms]"
    aria-label={t("whatsapp.aria_label")}
  >
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.09 14.089l-2.956-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.722.497z"/>
    </svg>
  </a>
  );
};

export default WhatsAppFloat;
