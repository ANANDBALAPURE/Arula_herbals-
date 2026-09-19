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

  return (
    <div className="mt-7 rounded-2xl border border-forest/10 bg-white/55 p-5 shadow-sm shadow-forest/5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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

        <div className="flex w-full flex-wrap items-center gap-3 rounded-xl bg-forest px-5 py-4 text-cream shadow-sm shadow-forest/10 sm:w-auto sm:justify-end">
          <span className="font-display text-[32px] font-semibold leading-none sm:text-[36px] md:text-[40px]">
            ₹{selected.price}
          </span>
          <span className="font-body text-sm text-cream/65 line-through sm:text-base">
            <span className="sr-only">MRP </span>₹{selected.mrp}
          </span>
          <span className="rounded-full bg-cream/15 px-2.5 py-1 font-body text-xs font-bold text-cream">
            {selected.discountPercent}% off
          </span>
        </div>
      </div>

      <p className="mt-2 font-body text-xs text-ink/50">
        MRP inclusive of all taxes. Final price for {selected.quantity} shown above.
      </p>

      <div className="mt-6">
        <CTAButtons productName={productName} variantLabel={`${selected.quantity} — ₹${selected.price}`} />
      </div>
    </div>
  );
}
