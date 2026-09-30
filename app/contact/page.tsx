import type { Metadata } from "next";
import { Eyebrow } from "@/components/Sections";
import { WhatsAppIcon } from "@/components/CTAButtons";
import { LeafSprig } from "@/components/Botanical";
import { site, whatsappLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Arula Herbals over WhatsApp or email for pricing, delivery details and bulk orders.",
};

const channels = [
  {
    label: "WhatsApp",
    value: site.whatsappDisplay,
    href: whatsappLink("Herbal Powders"),
    cta: "Chat now",
  },
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    cta: "Send email",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container-page grid gap-12 md:grid-cols-[1fr_0.8fr]">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="mt-2 font-display text-4xl leading-tight text-forest text-balance md:text-5xl">
            Questions about pricing, delivery or bulk orders?
          </h1>
          <p className="mt-6 max-w-lg font-body text-base leading-relaxed text-ink/75">
            We keep things simple: reach us on WhatsApp for the fastest
            response, or drop us an email. We&apos;re happy to send product
            photos, current offers and delivery timelines directly.
          </p>

          <div className="mt-10 space-y-4">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-forest/10 bg-white/50 px-6 py-5 transition-shadow hover:shadow-md"
              >
                <div>
                  <p className="font-body text-xs uppercase tracking-wide text-ink/50">
                    {c.label}
                  </p>
                  <p className="mt-1 font-display text-lg text-forest">{c.value}</p>
                </div>
                <span className="flex items-center gap-2 font-body text-sm font-medium text-clay">
                  {c.label === "WhatsApp" && <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />}
                  {c.cta}
                </span>
              </a>
            ))}

            <div className="rounded-2xl border border-forest/10 bg-white/50 px-6 py-5">
              <p className="font-body text-xs uppercase tracking-wide text-ink/50">
                Address
              </p>
              <p className="mt-1 font-display text-lg text-forest">{site.address}</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
          <div className="absolute inset-0 rounded-blob bg-sage/20" />
          <LeafSprig className="relative h-32 w-32 text-forest sm:h-40 sm:w-40" />
        </div>
      </div>
    </section>
  );
}
