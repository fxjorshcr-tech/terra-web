import { whatsappUrl } from "@/data/contacto";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { Dict } from "@/i18n/dictionaries";

export default function WhatsAppButton({ dict }: { dict: Dict }) {
  return (
    <a
      href={whatsappUrl(dict.comun.whatsappMsgGeneral)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5b] text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
