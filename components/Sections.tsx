import Link from "next/link";
import Image from "next/image";
import type { NutrientRow, Product, Recipe, TimelineEntry } from "@/data/products";
import { JarGlyph } from "./Botanical";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-sm font-medium text-clay">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-2 font-display text-3xl leading-tight text-forest text-balance md:text-4xl">
        {title}
      </h2>
      {lede && (
        <p className="mt-4 font-body text-base leading-relaxed text-ink/75">
          {lede}
        </p>
      )}
    </div>
  );
}

const accentMap = {
  sage: "text-sage-dark bg-sage/15",
  clay: "text-clay bg-clay/10",
  forest: "text-forest bg-forest/10",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white/40 transition-shadow hover:shadow-md hover:shadow-forest/10"
    >
      <div className={`relative flex h-48 items-center justify-center overflow-hidden ${accentMap[product.accent]}`}>
        {product.heroImage ? (
          <Image
            src={product.heroImage}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <JarGlyph className="h-32 w-32 transition-transform duration-300 group-hover:scale-105" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="font-body text-xs uppercase tracking-wide text-ink/50">
          {product.shortName} Powder
        </span>
        <h3 className="font-display text-xl text-forest">{product.title}</h3>
        <p className="mt-1 line-clamp-2 font-body text-sm leading-relaxed text-ink/70">
          {product.subtitle}
        </p>
        <span className="mt-auto pt-4 font-body text-sm font-medium text-clay">
          View details →
        </span>
      </div>
    </Link>
  );
}

export function NutrientList({ nutrients }: { nutrients: NutrientRow[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
      {nutrients.map((n) => (
        <div key={n.label} className="border-l-2 border-sage/50 pl-3">
          <dt className="font-body text-xs uppercase tracking-wide text-ink/50">
            {n.label}
          </dt>
          <dd className="font-display text-lg text-forest">{n.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="space-y-6 border-l border-sage/40 pl-6">
      {entries.map((e) => (
        <li key={e.period} className="relative">
          <span className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-clay" />
          <p className="font-body text-sm font-medium text-clay">{e.period}</p>
          <p className="mt-1 font-body text-base leading-relaxed text-ink/80">
            {e.effect}
          </p>
        </li>
      ))}
    </ol>
  );
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="rounded-2xl border border-forest/10 bg-white/50 p-6">
      <h4 className="font-display text-lg text-forest">{recipe.name}</h4>
      <p className="mt-2 font-body text-sm leading-relaxed text-ink/75">
        {recipe.steps}
      </p>
    </div>
  );
}
