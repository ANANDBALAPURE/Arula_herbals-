import type { Metadata } from "next";
import { SectionHeading, Eyebrow } from "@/components/Sections";
import { RootMotif, LeafSprig } from "@/components/Botanical";
import { CTAButtons } from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Arula Herbals is an organic superfood brand built on farm-to-bottle transparency, shade-dried processing and honest, additive-free formulations.",
};

const values = [
  {
    title: "Organic sourcing",
    body: "We partner with small organic farms that avoid synthetic pesticides and fertilisers, so purity starts in the soil.",
  },
  {
    title: "Shade-dried, not heat-processed",
    body: "Every leaf and root is dried slowly at low temperature to protect chlorophyll, enzymes and antioxidants.",
  },
  {
    title: "Single-ingredient formulas",
    body: "No fillers, no synthetic colours, no anti-caking agents — just the plant, ground fine.",
  },
  {
    title: "Radically transparent",
    body: "Every batch is lab tested, and results are shared openly rather than buried in fine print.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h1 className="mt-2 font-display text-4xl leading-tight text-forest text-balance md:text-5xl">
              A small herbal brand with a farm-sized promise.
            </h1>
            <p className="mt-6 font-body text-base leading-relaxed text-ink/75">
              Arula Herbals began with a simple frustration: most
              &ldquo;superfood&rdquo; powders on the shelf were over-processed,
              over-packaged, and far from the farms they claimed to represent.
              We set out to build something closer to the source — organic
              Moringa, Ashwagandha, Beetroot, Amla, Wheatgrass and Raw Banana,
              shade-dried in small batches and shipped with nothing hidden.
            </p>
            <p className="mt-4 font-body text-base leading-relaxed text-ink/75">
              Every product on this site is grown, harvested and dried with
              the same standard — the one we'd want for our own family's
              kitchen.
            </p>
          </div>
          <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-blob2 bg-sand/60" />
            <LeafSprig className="relative h-32 w-32 text-sage-dark sm:h-40 sm:w-40" />
          </div>
        </div>
      </section>

      <div className="divider-vine" />

      <section className="bg-sand/30 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we stand for"
            title="Four commitments behind every jar"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-forest/10 bg-cream p-7">
                <h3 className="font-display text-lg text-forest">{v.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-16 text-cream md:py-20">
        <div className="container-page grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <RootMotif className="h-28 w-full text-sage-light" />
          <div>
            <h2 className="font-display text-2xl leading-tight text-balance md:text-3xl">
              Farm-to-bottle, on purpose.
            </h2>
            <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-cream/75">
              We keep the supply chain short: organic farm, careful harvest,
              low-temperature shade drying, lab testing, small-batch packing.
              No intermediaries reprocessing the product, no long shelf life
              tricks — just plants, dried well.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 text-center">
        <div className="container-page flex flex-col items-center gap-6">
          <h2 className="max-w-lg font-display text-2xl leading-tight text-forest text-balance md:text-3xl">
            Curious about a specific harvest or batch?
          </h2>
          <CTAButtons productName="Herbal Powders" align="center" />
        </div>
      </section>
    </>
  );
}
