import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${light ? "text-gold-light" : "text-gold"}`}>
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 font-serif text-3xl leading-tight font-semibold sm:text-4xl ${light ? "text-white" : "text-navy"}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>{intro}</p>
      )}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "gold",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "gold" | "navy" | "outline" | "outline-light";
  external?: boolean;
}) {
  const styles = {
    gold: "bg-gold text-navy-deep hover:bg-gold-light shadow-sm",
    navy: "bg-navy text-white hover:bg-navy-deep",
    outline: "border border-navy/20 text-navy hover:border-navy/50 hover:bg-white",
    "outline-light": "border border-white/30 text-white hover:border-white/70 hover:bg-white/5",
  }[variant];
  const className = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${styles}`;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function Verse({ text, source, light = false }: { text: string; source: string; light?: boolean }) {
  return (
    <figure className="mx-auto max-w-3xl text-center">
      <svg viewBox="0 0 24 24" className="mx-auto h-6 w-6 text-gold" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3v18M7 8h10" strokeLinecap="round" />
      </svg>
      <blockquote
        className={`mt-5 font-serif text-2xl leading-snug italic sm:text-3xl ${light ? "text-white" : "text-navy"}`}
      >
        “{text}”
      </blockquote>
      <figcaption className={`mt-4 text-sm font-semibold tracking-widest uppercase ${light ? "text-gold-light" : "text-gold"}`}>
        {source} <span className="font-normal opacity-60">(KJV)</span>
      </figcaption>
    </figure>
  );
}

export function Check({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={`shrink-0 text-gold ${className}`} fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="rays absolute inset-0" />
      <div className="glow absolute inset-0" />
      <Container className="relative py-20 text-center sm:py-24">
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight font-semibold sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>
      </Container>
    </section>
  );
}

export function GiveBand() {
  return (
    <section className="bg-gold-pale">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-navy sm:text-3xl">A student is praying for provision.</h2>
          <p className="mt-2 text-muted">You could be the “yes” they’ve been waiting for.</p>
        </div>
        <Button href="/give" variant="navy">
          Sponsor a student from $50
        </Button>
      </Container>
    </section>
  );
}
