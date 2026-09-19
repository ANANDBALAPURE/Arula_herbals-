import { site, whatsappLink } from "@/data/site";

export function CTAButtons({
  productName = "Herbal Powders",
  align = "left",
  variantLabel,
}: {
  productName?: string;
  align?: "left" | "center";
  variantLabel?: string;
}) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <a
        href={whatsappLink(productName, undefined, variantLabel)}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="whatsapp"
        className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-white px-6 py-3 text-sm font-bold text-forest shadow-sm shadow-forest/5 transition-colors hover:bg-[#25D366]/10"
      >
        <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
        Order on WhatsApp
      </a>
      <a
        href={site.amazonUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="amazon"
        className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-transparent px-6 py-3 text-sm font-medium text-forest transition-colors hover:border-forest hover:bg-forest/5"
      >
        Buy on Amazon
      </a>
      <a
        href={site.flipkartUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="flipkart"
        className="inline-flex items-center gap-2 rounded-full border border-forest/30 bg-transparent px-6 py-3 text-sm font-medium text-forest transition-colors hover:border-forest hover:bg-forest/5"
      >
        Buy on Flipkart
      </a>
    </div>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.345 5.001L2 22l5.117-1.334a9.96 9.96 0 0 0 4.887 1.28h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.669-1.04-5.178-2.929-7.067a9.936 9.936 0 0 0-7.072-2.879zm0 18.166h-.003a8.16 8.16 0 0 1-4.157-1.14l-.298-.177-3.037.792.811-2.96-.194-.304a8.163 8.163 0 0 1-1.253-4.38c0-4.512 3.673-8.184 8.188-8.184a8.13 8.13 0 0 1 5.79 2.398 8.126 8.126 0 0 1 2.396 5.79c-.002 4.512-3.674 8.185-8.243 8.165z" />
    </svg>
  );
}
