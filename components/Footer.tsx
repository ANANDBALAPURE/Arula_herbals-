import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/data/site";
import { products } from "@/data/products";

export function Footer() {
  return (
    <footer className="border-t border-forest/10 bg-forest text-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/brand/logo-footer.png"
              alt={`${site.name} logo`}
              width={72}
              height={72}
              className="h-auto w-[58px] shrink-0 object-contain sm:w-[72px]"
            />
            <span className="font-display text-xl">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-cream/70">
            {site.tagline} Shade-dried, lab-tested superfood powders — farm to
            bottle, without shortcuts.
          </p>
        </div>

        <div>
          <h3 className="font-body text-sm font-medium text-sage-light">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-sm text-cream/75 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-sm font-medium text-sage-light">Powders</h3>
          <ul className="mt-4 space-y-2.5">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/products/${p.slug}`}
                  className="font-body text-sm text-cream/75 transition-colors hover:text-cream"
                >
                  {p.shortName} Powder
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-body text-sm font-medium text-sage-light">Reach us</h3>
          <ul className="mt-4 space-y-2.5 font-body text-sm text-cream/75">
            <li>WhatsApp: {site.whatsappDisplay}</li>
            <li>{site.email}</li>
            <li>{site.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col gap-2 py-6 font-body text-xs text-cream/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Built with care by Tech Buddies.</p>
        </div>
      </div>
    </footer>
  );
}
