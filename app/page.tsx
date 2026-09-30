import Link from "next/link";
import Image from "next/image";
import { CTAButtons } from "@/components/CTAButtons";
import { ProductCard, SectionHeading, Eyebrow } from "@/components/Sections";
import { RootMotif, DropletBadge } from "@/components/Botanical";
import { products } from "@/data/products";

const benefits = [
  {
    title: "Immunity",
    body: "Vitamin C, antioxidants and flavonoids from Moringa and Amla help your body defend itself, season after season.",
  },
  {
    title: "Energy",
    body: "Iron, B-vitamins and chlorophyll deliver clean, caffeine-free stamina instead of a sugar-crash spike.",
  },
  {
    title: "Metabolism",
    body: "Living enzymes and resistant starch support digestion, gut flora and a steadier metabolic rhythm.",
  },
];

const badges = [
  "Lab Tested for Purity",
  "Organic Certified Sourcing",
  "Zero Additives, Zero Fillers",
  "Shade-Dried, Not Heat-Processed",
];

const heroHighlights = [
  { title: "Rich in Nutrients", body: "Vitamins, minerals & antioxidants" },
  { title: "Plant Based", body: "Pure herbal goodness" },
  { title: "No Additives", body: "100% natural" },
  { title: "Lab Tested", body: "For your safety" },
  { title: "Organic Certified", body: "Trusted quality" },
];

const testimonials = [
  {
    quote:
      "The moringa tastes clean, not grassy — and I genuinely feel steadier through the afternoon slump.",
    name: "Sneha R.",
    place: "Pune",
  },
  {
    quote:
      "Ashwagandha before bed has become a small ritual in our house. Sleep has been noticeably deeper.",
    name: "Abhijit K.",
    place: "Nashik",
  },
  {
    quote:
      "Ordered on WhatsApp, had questions answered in minutes, and the beetroot powder mixes beautifully.",
    name: "Farida S.",
    place: "Mumbai",
  },
];

const recipeGuide = [
  { name: "Morning Power Tonic", detail: "Moringa, warm water, lemon, honey" },
  { name: "Golden Night Moon Milk", detail: "Ashwagandha, warm milk, cinnamon" },
  { name: "Pre-Workout Nitric Shot", detail: "Beetroot, water or pomegranate juice" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-cream">
        <div className="absolute inset-0 bg-cream">
          <div className="absolute inset-0 sm:left-auto sm:right-0 sm:w-[82%] md:w-[78%] lg:w-[76%] xl:w-[74%]">
            <Image
              src="/images/home/hero-background.png"
              alt="Arula Herbals powders displayed on a stone table in a forest"
              fill
              priority
              sizes="(min-width: 1280px) 74vw, (min-width: 1024px) 76vw, (min-width: 768px) 78vw, (min-width: 640px) 82vw, 100vw"
              className="object-cover object-[58%_bottom]"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,246,236,0.9)_0%,rgba(250,246,236,0.96)_62%,rgba(250,246,236,0.46)_100%)] sm:hidden" />
          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,#faf6ec_0%,rgba(250,246,236,0.98)_32%,rgba(250,246,236,0.52)_46%,rgba(250,246,236,0.04)_62%)] sm:block" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(255,255,245,0.7),rgba(255,255,245,0.28)_26%,transparent_46%)]" />
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-cream via-cream/70 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream/30 to-transparent" />
        </div>

        <div className="container-page relative z-10 flex min-h-[calc(100svh-5rem)] items-center py-16 sm:py-20 lg:min-h-[760px]">
          <div className="w-full max-w-[46rem] animate-rise-in pt-8 sm:pt-0">
            <p className="font-body text-[0.68rem] font-bold uppercase tracking-[0.52em] text-forest/85 sm:text-xs">
              Pure / Natural / Powerful
            </p>

            <h1 className="mt-5 max-w-[46rem] font-display text-[clamp(2.75rem,12vw,3.45rem)] leading-[1.04] text-forest text-balance drop-shadow-[0_1px_0_rgba(250,246,236,0.55)] sm:text-[clamp(3.1rem,5.45vw,5rem)]">
              Rooted in nature,
              <br />
              backed by purity.
            </h1>

            <p className="mt-6 font-body text-sm font-bold uppercase tracking-[0.32em] text-forest sm:text-lg">
              100% pure herbal products.
            </p>

            <p className="mt-5 max-w-[33rem] font-body text-base leading-relaxed text-ink/72 sm:text-lg">
              Moringa, Ashwagandha, Beetroot, Amla, Wheatgrass and Raw Banana
              &mdash; shade-dried on small organic farms and delivered straight
              to your kitchen.
            </p>

            <div className="mt-8 inline-flex max-w-[26rem] items-center gap-3 rounded-full border border-forest/10 bg-white/95 px-5 py-4 shadow-sm shadow-forest/10 backdrop-blur-md">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#25D366] shadow-sm">
                <WhatsAppGlyph />
              </span>
              <span className="font-body text-sm font-bold uppercase tracking-[0.11em] text-forest">
                We&rsquo;ll send you media on WhatsApp.
              </span>
            </div>

            <div className="mb-16 mt-8 sm:mb-0">
              <CTAButtons productName="Herbal Powders" />
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-forest/10 bg-cream/88 py-6 backdrop-blur-md">
          <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {heroHighlights.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-forest/25 bg-cream/80 text-forest">
                  <LeafIcon />
                </div>
                <h2 className="font-body text-xs font-bold uppercase tracking-[0.16em] text-forest">
                  {item.title}
                </h2>
                <p className="mt-1 font-body text-xs text-ink/65">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Health Benefits */}
      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why it works"
            title="Three pillars, one daily habit"
            lede="Every Arula powder is built around what a busy, health-conscious body actually needs: sustained energy, a resilient immune system and a metabolism that isn't fighting processed food."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-forest/10 bg-white/40 p-7">
                <DropletBadge className="h-10 w-10 text-clay" />
                <h3 className="mt-5 font-display text-xl text-forest">{b.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm to Bottle Story */}
      <section className="bg-forest py-20 text-cream">
        <div className="container-page grid items-center gap-12 md:grid-cols-2">
          <div>
            <Eyebrow>Farm to bottle</Eyebrow>
            <h2 className="mt-2 font-display text-3xl leading-tight text-balance md:text-4xl">
              From organic soil to your morning glass, in five honest steps.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-cream/75">
              We work with small organic farms, harvest at peak potency, and
              shade-dry every leaf and root at low temperature — never
              industrial heat — so the chlorophyll, enzymes and antioxidants
              survive the journey to your kitchen.
            </p>
          </div>
          <div className="rounded-2xl border border-cream/15 bg-cream/5 p-8">
            <RootMotif className="h-24 w-full text-sage-light" />
            <ol className="mt-6 space-y-4">
              {[
                "Organic farm sourcing",
                "Hand harvesting at peak potency",
                "Low-temperature shade drying",
                "Lab testing for purity",
                "Small-batch packing",
              ].map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="font-display text-lg text-sage-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-0.5 font-body text-sm text-cream/85">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Quality Badges */}
      <section className="bg-sand/40 py-16">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-3 rounded-xl border border-forest/10 bg-cream px-5 py-4"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-clay" />
                <span className="font-body text-sm text-forest">{badge}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/quality"
              className="font-body text-sm font-medium text-clay underline underline-offset-4"
            >
              See our lab reports & certification details
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-cream py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="The range"
              title="Six powders, one uncompromising standard"
              lede="Each batch is shade-dried, single-ingredient and free from fillers, colours or synthetic additives."
            />
            <Link
              href="/products"
              className="font-body text-sm font-medium text-clay underline underline-offset-4"
            >
              View all products
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Guide teaser */}
      <section className="bg-sage/10 py-20">
        <div className="container-page grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Usage & recipe guide"
            title="Smoothies, teas and daily mixes"
            lede="A teaspoon a day goes a long way. Every product page includes a full recipe guide, but here are three to start with."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {recipeGuide.map((r) => (
              <div key={r.name} className="rounded-2xl border border-forest/10 bg-cream p-6">
                <h3 className="font-display text-lg text-forest">{r.name}</h3>
                <p className="mt-2 font-body text-sm text-ink/65">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20">
        <div className="container-page">
          <SectionHeading eyebrow="Customer reviews" title="What our community says" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-forest/10 bg-white/50 p-7"
              >
                <blockquote className="font-display text-lg italic leading-relaxed text-forest">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-body text-sm text-ink/60">
                  {t.name}, {t.place}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-clay py-16 text-cream">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-lg font-display text-3xl leading-tight text-balance">
            Ready to add a daily dose of purity to your routine?
          </h2>
          <CTAButtons productName="Herbal Powders" align="center" />
        </div>
      </section>
    </>
  );
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.345 5.001L2 22l5.117-1.334a9.96 9.96 0 0 0 4.887 1.28h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.669-1.04-5.178-2.929-7.067a9.936 9.936 0 0 0-7.072-2.879zm0 18.166h-.003a8.16 8.16 0 0 1-4.157-1.14l-.298-.177-3.037.792.811-2.96-.194-.304a8.163 8.163 0 0 1-1.253-4.38c0-4.512 3.673-8.184 8.188-8.184a8.13 8.13 0 0 1 5.79 2.398 8.126 8.126 0 0 1 2.396 5.79c-.002 4.512-3.674 8.185-8.243 8.165z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
      <path
        d="M5 19C5.5 10.5 10.5 5.7 19 5c-.5 8.5-5.2 13.5-14 14Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19c3.2-4.2 6.7-7.4 11-10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
