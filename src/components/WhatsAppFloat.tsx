import { whatsappLink, WA_MESSAGES } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/analytics";

const WhatsAppFloat = () => (
  <a
    href={whatsappLink(WA_MESSAGES.general)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => trackWhatsAppClick('float_button')}
    className="fixed bottom-7 right-7 z-50 w-[58px] h-[58px] rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center animate-wa-pulse hover:scale-110 transition-transform duration-[250ms]"
    aria-label="Falar no WhatsApp"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.107 1.523 5.83L.057 23.7a.5.5 0 0 0 .611.625l6.083-1.596A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.855 9.855 0 0 1-5.023-1.373l-.36-.214-3.733.979.996-3.638-.235-.374A9.862 9.862 0 0 1 2.1 12c0-5.46 4.44-9.9 9.9-9.9 5.46 0 9.9 4.44 9.9 9.9 0 5.46-4.44 9.9-9.9 9.9z" />
    </svg>
  </a>
);

export default WhatsAppFloat;
