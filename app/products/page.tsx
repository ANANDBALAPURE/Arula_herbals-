import type { Metadata } from "next";
import { ProductCard, SectionHeading } from "@/components/Sections";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Organic Herbal Powders",
  description:
    "Shop Arula Herbals' full range of organic, shade-dried superfood powders — Moringa, Ashwagandha, Beetroot, Amla, Wheatgrass and Raw Banana.",
};

export default function ProductsPage() {
  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="The full range"
          title="Six powders, sourced and dried with the same discipline"
          lede="Pick the one that matches today's need, or rotate through the range across the week. Every jar is single-ingredient, lab tested and shade-dried at low temperature."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
