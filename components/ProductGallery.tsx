"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Product } from "@/data/products";
import { JarGlyph } from "./Botanical";

type GalleryImage = NonNullable<Product["galleryImages"]>[number];

export function ProductGallery({ product }: { product: Product }) {
  const images = useMemo<GalleryImage[]>(() => {
    if (product.galleryImages?.length) return product.galleryImages;
    if (product.heroImage) {
      return [
        {
          src: product.heroImage,
          alt: product.title,
          label: "Product",
        },
      ];
    }
    return [];
  }, [product]);

  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [autoplayReset, setAutoplayReset] = useState(0);
  const current = images[active];

  const resetAutoplay = useCallback(() => {
    setAutoplayReset((value) => value + 1);
  }, []);

  const showNext = useCallback(() => {
    setActive((value) => (value + 1) % Math.max(images.length, 1));
    resetAutoplay();
  }, [images.length, resetAutoplay]);

  const showPrevious = useCallback(() => {
    setActive((value) => (value - 1 + images.length) % Math.max(images.length, 1));
    resetAutoplay();
  }, [images.length, resetAutoplay]);

  const selectImage = useCallback(
    (index: number) => {
      setActive(index);
      resetAutoplay();
    },
    [resetAutoplay]
  );

  useEffect(() => {
    if (images.length < 2 || isHovered) return;

    const timer = window.setInterval(showNext, 4000);
    return () => window.clearInterval(timer);
  }, [autoplayReset, images.length, isHovered, showNext]);

  useEffect(() => {
    setActive(0);
  }, [product.slug]);

  function handleTouchEnd(x: number) {
    if (touchStart === null || images.length < 2) return;
    const distance = touchStart - x;
    if (Math.abs(distance) > 42) {
      if (distance > 0) showNext();
      else showPrevious();
    }
    setTouchStart(null);
  }

  if (!current) {
    return (
      <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-forest/10 text-forest">
        <JarGlyph className="h-40 w-40" />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className="relative aspect-square w-full overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm shadow-forest/5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)}
        onTouchEnd={(event) => handleTouchEnd(event.changedTouches[0]?.clientX ?? 0)}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          fill
          priority={active === 0}
          sizes="(min-width: 1024px) 46vw, (min-width: 768px) 48vw, 100vw"
          className="animate-gallery-fade object-contain"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Show previous product image"
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-transparent text-forest/75 drop-shadow-[0_1px_2px_rgba(255,255,255,0.75)] transition hover:scale-110 hover:text-forest focus-visible:bg-transparent"
            >
              <span aria-hidden="true" className="text-3xl leading-none">←</span>
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Show next product image"
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-transparent text-forest/75 drop-shadow-[0_1px_2px_rgba(255,255,255,0.75)] transition hover:scale-110 hover:text-forest focus-visible:bg-transparent"
            >
              <span aria-hidden="true" className="text-3xl leading-none">→</span>
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => selectImage(index)}
              aria-label={`Show ${image.label}`}
              aria-current={active === index}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border bg-white transition ${
                active === index
                  ? "border-clay ring-2 ring-clay/20"
                  : "border-forest/10 hover:border-forest/30"
              }`}
            >
              <Image
                src={image.src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
                loading={index === 0 ? "eager" : "lazy"}
              />
              <span className="sr-only">{image.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
