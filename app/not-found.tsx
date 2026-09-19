import Link from "next/link";
import { LeafSprig } from "@/components/Botanical";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-cream px-6 text-center">
      <LeafSprig className="h-16 w-16 text-sage" />
      <h1 className="font-display text-3xl text-forest">This page wandered off the path.</h1>
      <p className="max-w-sm font-body text-sm text-ink/70">
        The page you're looking for doesn't exist. Let's get you back to
        something rooted.
      </p>
      <Link
        href="/"
        className="rounded-full bg-forest px-6 py-3 font-body text-sm text-cream transition-colors hover:bg-forest-dark"
      >
        Back to homepage
      </Link>
    </section>
  );
}
