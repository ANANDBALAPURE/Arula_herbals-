"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest/10 bg-cream/90 backdrop-blur">
      <div className="container-page flex h-24 items-center justify-between sm:h-28">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/brand/arula-logo.png"
            alt={`${site.name} logo`}
            width={128}
            height={128}
            className="h-[5.75rem] w-[5.75rem] object-contain sm:h-[6.75rem] sm:w-[6.75rem]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-body text-[15px] transition-colors ${
                  active ? "text-clay" : "text-forest/80 hover:text-forest"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/products"
            className="rounded-full bg-forest px-5 py-2.5 font-body text-[15px] text-cream transition-colors hover:bg-forest-dark"
          >
            Shop Powders
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 top-0 block h-[1.5px] w-4 bg-forest transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-[1.5px] w-4 bg-forest transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-cream md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-base text-forest hover:bg-sand/40"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
