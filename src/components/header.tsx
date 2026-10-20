"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-navy/5 text-navy" : "text-muted hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/give"
            className="ml-2 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy-deep shadow-sm transition hover:bg-gold-light"
          >
            Give
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-navy md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy/10 px-4 pb-4 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy/5 py-3 text-base font-medium text-navy"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/give"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-gold py-3 text-center font-semibold text-navy-deep"
          >
            Give to a student
          </Link>
        </nav>
      )}
    </header>
  );
}
