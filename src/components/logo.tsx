import Link from "next/link";

/** Cross set inside a rising light — the foundation's mark. */
export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="#14203f" />
      <g stroke="#e8c46a" strokeWidth="1.2" strokeLinecap="round" opacity="0.55">
        <path d="M20 4v3M8.7 8.7l2.1 2.1M31.3 8.7l-2.1 2.1M4 20h3M33 20h3" />
      </g>
      <path d="M20 11v20M14 17h12" stroke="#e8c46a" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="De_Light Foundation home">
      <Mark />
      <span className="leading-tight">
        <span className={`block font-serif text-lg font-semibold ${light ? "text-white" : "text-navy"}`}>
          De_Light
        </span>
        <span className={`block text-[10px] uppercase tracking-[0.2em] ${light ? "text-gold-light" : "text-gold"}`}>
          Foundation
        </span>
      </span>
    </Link>
  );
}
