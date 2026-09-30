"use client";

import { useState } from "react";
import type { PriceVariant } from "@/data/products";
import { CTAButtons } from "./CTAButtons";

export function PriceSelector({
  productName,
  variants,
}: {
  productName: string;
  variants: PriceVariant[];
}) {
  const [index, setIndex] = useState(0);
  const selected = variants[index];
  const savings = Math.max(selected.mrp - selected.price, 0);

  return (
    <div className="mt-7 rounded-2xl border border-forest/10 bg-white/55 p-5 shadow-sm shadow-forest/5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <label
            htmlFor="quantity-select"
            className="font-body text-xs uppercase tracking-wide text-ink/50"
          >
            Pack size
          </label>
          <select
            id="quantity-select"
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
            className="mt-1 block rounded-full border border-forest/25 bg-white/70 px-4 py-2 font-body text-sm text-forest focus:border-forest"
          >
            {variants.map((v, i) => (
              <option key={v.quantity} value={i}>
                {v.quantity}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-xl bg-forest px-4 py-3 text-cream shadow-sm shadow-forest/10 sm:min-w-[12rem]">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-cream/75">
            Festive Sale
          </p>
          <p className="mt-1 font-body text-sm font-bold uppercase tracking-[0.12em]">
            {selected.discountPercent}% OFF
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-display text-[32px] font-semibold leading-none text-forest sm:text-[38px] md:text-[40px]">
          ₹{selected.price}
        </span>
        <span className="font-body text-sm text-ink/50 line-through sm:text-base">
          <span className="sr-only">MRP </span>₹{selected.mrp}
        </span>
        <span className="basis-full font-body text-sm font-medium text-clay">
          You Save ₹{savings}
        </span>
      </div>

      <p className="mt-3 font-body text-xs text-ink/50">
        MRP inclusive of all taxes. Final price for {selected.quantity} shown above.
      </p>

      <div className="mt-6">
        <CTAButtons productName={productName} variantLabel={`${selected.quantity} — ₹${selected.price}`} />
      </div>
    </div>
  );
}
