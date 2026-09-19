import { whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "./CTAButtons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Herbal Powders")}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp-float"
      aria-label="Chat with Arula Herbals on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-[#25D366]/25 bg-white text-[#25D366] shadow-lg shadow-forest/20 transition-transform hover:scale-105 hover:bg-[#25D366]/10 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
