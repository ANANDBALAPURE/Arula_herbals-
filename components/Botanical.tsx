// Lightweight hand-drawn-style botanical line-art used throughout the site
// in place of photography (client photography arrives post-launch and can
// replace these illustration slots without changing layout).

export function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={className} aria-hidden="true">
      <path
        d="M100 190 C90 140 60 120 40 80 C70 90 95 100 100 130 C105 100 130 90 160 80 C140 120 110 140 100 190Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path d="M100 190 L100 60" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      <path
        d="M100 60 C85 40 70 30 55 30 C65 48 80 56 100 60Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M100 60 C115 40 130 30 145 30 C135 48 120 56 100 60Z"
        fill="currentColor"
        opacity="0.7"
      />
    </svg>
  );
}

export function RootMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 120" fill="none" className={className} aria-hidden="true">
      <path
        d="M120 4 V46 M120 46 C120 46 96 56 84 80 M120 46 C120 46 144 56 156 80 M120 46 C120 46 108 66 96 110 M120 46 C120 46 132 66 144 110 M120 46 C120 46 76 60 56 66 M120 46 C120 46 164 60 184 66"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// A generic organic "product jar" glyph, tinted per product accent colour —
// used as an illustration slot until real product photography is supplied.
export function JarGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 260" fill="none" className={className} aria-hidden="true">
      <rect x="55" y="70" width="110" height="150" rx="20" fill="currentColor" opacity="0.16" />
      <rect x="55" y="70" width="110" height="150" rx="20" stroke="currentColor" strokeWidth="2.5" opacity="0.85" />
      <path d="M80 70 V48 C80 38 88 30 98 30 H122 C132 30 140 38 140 48 V70" stroke="currentColor" strokeWidth="2.5" opacity="0.85" />
      <rect x="70" y="20" width="80" height="18" rx="9" fill="currentColor" opacity="0.85" />
      <path d="M75 120 H145 M75 145 H145 M75 170 H145" stroke="currentColor" strokeWidth="2" opacity="0.35" />
      <path
        d="M40 60 C55 40 60 20 55 5 C70 15 78 35 70 55 C90 45 100 25 96 5 C112 20 116 45 100 62"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>
  );
}

export function DropletBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      <path
        d="M40 18 C50 34 58 44 58 54 C58 65 50 72 40 72 C30 72 22 65 22 54 C22 44 30 34 40 18Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}
