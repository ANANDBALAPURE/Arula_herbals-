import { site } from "@/data/site";

export function AnnouncementBar() {
  if (!site.promotion.active) return null;

  const offer = `${site.promotion.discountPercent}% OFF ON ALL PRODUCTS`;
  const message = `${offer} / LIMITED TIME OFFER / SHOP NOW / ${offer}`;

  return (
    <div className="overflow-hidden bg-forest py-2 text-cream" aria-label={message}>
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap font-body text-xs font-bold uppercase tracking-[0.22em] sm:text-sm">
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index}>{message}</span>
        ))}
      </div>
    </div>
  );
}
