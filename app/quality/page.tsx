import type { Metadata } from "next";
import { SectionHeading, Eyebrow } from "@/components/Sections";
import { RootMotif, DropletBadge } from "@/components/Botanical";
import { CTAButtons } from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Quality, Lab Reports & Farm Origin",
  description:
    "See how Arula Herbals tests, certifies and traces every batch of organic superfood powder — from farm origin to lab-verified purity.",
};

const labChecks = [
  {
    title: "Heavy metals screening",
    body: "Every batch is screened for lead, arsenic, cadmium and mercury against food-safety thresholds.",
  },
  {
    title: "Microbial safety",
    body: "Tested for pathogenic bacteria, yeast and mould to confirm the powder is safe for daily consumption.",
  },
  {
    title: "Moisture & purity",
    body: "Moisture content is checked to confirm proper shade-drying and to rule out dilution or fillers.",
  },
  {
    title: "Nutrient verification",
    body: "Key actives — chlorophyll, withanolides, Vitamin C, betalains — are verified against our published nutrient charts.",
  },
];

const certifications = [
  {
    title: "Organic-certified sourcing",
    body: "Our partner farms follow organic cultivation practices, free from synthetic pesticides and chemical fertilisers.",
  },
  {
    title: "FSSAI-compliant processing",
    body: "Processing and packing follow Indian food-safety standards for handling and hygiene.",
  },
  {
    title: "Batch-wise Certificate of Analysis",
    body: "Each production batch is assigned a Certificate of Analysis, available on request via WhatsApp.",
  },
];

const farmOrigins = [
  {
    region: "Nashik & Western Maharashtra",
    crops: "Moringa, Beetroot, Raw Banana",
    note: "Fertile black-soil belt with reliable irrigation, ideal for leafy greens and root vegetables.",
  },
  {
    region: "Central India highlands",
    crops: "Ashwagandha",
    note: "Well-drained red soil and a dry climate that concentrates root withanolides.",
  },
  {
    region: "North Indian orchards",
    crops: "Amla",
    note: "Traditional gooseberry-growing belts known for high Vitamin C content.",
  },
  {
    region: "Managed wheatgrass beds",
    crops: "Wheatgrass",
    note: "Harvested at peak young-leaf stage, within days of cutting, to preserve live chlorophyll.",
  },
];

export default function QualityPage() {
  return (
    <>
      <section className="bg-cream py-16 md:py-24">
        <div className="container-page max-w-2xl">
          <Eyebrow>Quality & origin</Eyebrow>
          <h1 className="mt-2 font-display text-4xl leading-tight text-forest text-balance md:text-5xl">
            Every claim on this site, checked twice.
          </h1>
          <p className="mt-6 font-body text-base leading-relaxed text-ink/75">
            We know &ldquo;organic&rdquo; and &ldquo;lab tested&rdquo; are
            easy words to print and hard to prove. This page is where we show
            our work — what we test for, what we&apos;re certified against, and
            where each powder is actually grown.
          </p>
        </div>
      </section>

      <div className="divider-vine" />

      {/* Lab Reports */}
      <section className="bg-sand/30 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Lab reports"
            title="What we test for in every batch"
            lede="Certificates of Analysis are generated per production batch and shared with customers on request."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {labChecks.map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl border border-forest/10 bg-cream p-6">
                <DropletBadge className="h-9 w-9 shrink-0 text-clay" />
                <div>
                  <h3 className="font-display text-lg text-forest">{c.title}</h3>
                  <p className="mt-1 font-body text-sm leading-relaxed text-ink/70">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 font-body text-sm text-ink/60">
            Want to see the Certificate of Analysis for a specific batch?{" "}
            <a
              href="https://wa.me/919067777196"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-clay underline underline-offset-4"
            >
              Ask us on WhatsApp
            </a>
            .
          </p>
        </div>
      </section>

      {/* Certification */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Certification" title="Standards we hold ourselves to" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {certifications.map((c) => (
              <div key={c.title} className="rounded-2xl border border-forest/10 bg-white/40 p-6">
                <h3 className="font-display text-lg text-forest">{c.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Origin */}
      <section className="bg-forest py-16 text-cream md:py-20">
        <div className="container-page">
          <Eyebrow>Farm origin</Eyebrow>
          <h2 className="mt-2 max-w-xl font-display text-3xl leading-tight text-balance md:text-4xl">
            Grown across India&apos;s organic growing belts
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {farmOrigins.map((f) => (
              <div key={f.region} className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
                <RootMotif className="h-14 w-24 text-sage-light" />
                <h3 className="mt-4 font-display text-lg">{f.region}</h3>
                <p className="mt-1 font-body text-xs uppercase tracking-wide text-sage-light">
                  {f.crops}
                </p>
                <p className="mt-3 font-body text-sm leading-relaxed text-cream/75">
                  {f.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 text-center">
        <div className="container-page flex flex-col items-center gap-6">
          <h2 className="max-w-lg font-display text-2xl leading-tight text-forest text-balance md:text-3xl">
            Ready to try a batch for yourself?
          </h2>
          <CTAButtons productName="Herbal Powders" align="center" />
        </div>
      </section>
    </>
  );
}
