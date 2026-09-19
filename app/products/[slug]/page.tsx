import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/data/products";
import { CTAButtons } from "@/components/CTAButtons";
import { PriceSelector } from "@/components/PriceSelector";
import { ProductGallery } from "@/components/ProductGallery";
import { Eyebrow, NutrientList, RecipeCard, SectionHeading, Timeline } from "@/components/Sections";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: product.title,
    description: product.overview,
    keywords: product.keywordFocus.split(", "),
    openGraph: {
      title: product.title,
      description: product.overview,
    },
  };
}


export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="bg-cream py-14 md:py-20">
        <div className="container-page grid items-center gap-12 md:grid-cols-[1fr_0.8fr]">
          <div>
            <nav className="font-body text-sm text-ink/50">
              <Link href="/products" className="hover:text-forest">
                Products
              </Link>{" "}
              / <span className="text-ink/70">{product.shortName}</span>
            </nav>
            <Eyebrow>{product.subtitle}</Eyebrow>
            <h1 className="mt-2 font-display text-3xl leading-tight text-forest text-balance md:text-4xl">
              {product.title}
            </h1>
            <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-ink/75">
              {product.overview}
            </p>
            {product.variants && product.variants.length > 0 ? (
              <PriceSelector productName={`${product.shortName} Powder`} variants={product.variants} />
            ) : (
              <>
                {product.price && (
                  <p className="mt-5 flex items-baseline gap-2">
                    <span className="font-display text-3xl text-forest">{product.price}</span>
                    {product.priceUnit && (
                      <span className="font-body text-sm text-ink/55">/ {product.priceUnit}</span>
                    )}
                  </p>
                )}
                <div className="mt-8">
                  <CTAButtons productName={`${product.shortName} Powder`} />
                </div>
              </>
            )}
          </div>
          <div className="order-first md:order-none">
            <ProductGallery product={product} />
          </div>
        </div>
      </section>

      <div className="divider-vine" />

      {/* Advantages */}
      <section className="bg-cream py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Page 1 — Core advantages" title="Why it belongs in your routine" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {product.advantages.map((a) => (
              <div key={a.title} className="rounded-2xl border border-forest/10 bg-white/40 p-6">
                <h3 className="font-display text-lg text-forest">{a.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/70">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us — comparison */}
      {product.compareImage && (
        <section className="bg-cream py-16">
          <div className="container-page">
            <SectionHeading
              eyebrow="See the difference"
              title="Why Arula, not the regular jar"
              lede="Side by side, the difference between gentle shade-drying and industrial heat-drying is visible before you even open the pouch."
            />
          </div>
        </section>
      )}

      {/* Certification / quality proof */}
      {product.qualityImage && (
        <section className="bg-sand/30 py-16">
          <div className="container-page">
            <SectionHeading
              eyebrow="Certified & lab tested"
              title="Quality you can see, purity you can trust"
              lede="Every batch is manufactured in an FSSAI-licensed facility and tested in NABL-accredited labs for purity, heavy metals and microbial safety."
            />
          </div>
        </section>
      )}

      {/* Nutrient profile + timeline */}
      <section className="bg-sand/30 py-16">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Page 2 — Nutrient profile"
              title="What's inside (per 100g)"
            />
            <div className="mt-8">
              <NutrientList nutrients={product.nutrients} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Real customer timeline" title="What to expect" />
            <div className="mt-8">
              <Timeline entries={product.timeline} />
            </div>
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section className="bg-cream py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Page 3 — Daily usage"
            title="Recipes & daily intake"
            lede={`Recommended daily intake: ${product.dailyIntake}`}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.recipes.map((r) => (
              <RecipeCard key={r.name} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      {/* Order flow reminder */}
      <section className="bg-forest py-14 text-cream">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-lg font-display text-2xl leading-tight text-balance md:text-3xl">
            Order {product.shortName} Powder in one tap
          </h2>
          <p className="max-w-md font-body text-sm text-cream/70">
            Choose WhatsApp for personal guidance on pricing and delivery, or
            checkout instantly on Amazon or Flipkart.
          </p>
          <CTAButtons productName={`${product.shortName} Powder`} align="center" />
        </div>
      </section>

      {/* Explore more */}
      <section className="bg-cream py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Keep exploring" title="More from the range" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {otherProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group rounded-2xl border border-forest/10 bg-white/40 p-6 transition-shadow hover:shadow-md"
              >
                <span className="font-body text-xs uppercase tracking-wide text-ink/50">
                  {p.shortName}
                </span>
                <h3 className="mt-1 font-display text-lg text-forest">{p.title}</h3>
                <span className="mt-4 inline-block font-body text-sm font-medium text-clay">
                  View details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
