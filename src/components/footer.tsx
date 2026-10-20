import Link from "next/link";
import { Logo } from "@/components/logo";
import { nav, site, verses } from "@/lib/site";

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {site.tagline}. Equipping minds, funding futures, and strengthening faith — from secondary school
              through university and beyond.
            </p>
            <p className="mt-6 max-w-sm font-serif text-sm italic text-gold-light">
              “{verses.light.text}” <span className="not-italic text-white/60">— {verses.light.source}</span>
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Explore</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/give" className="hover:text-white">
                  Give
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">Reach us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>{site.address}</li>
              <li>
                <a href={site.phoneHref} className="hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>
            © <CopyrightYear /> {site.name}. All glory to God.
          </p>
          <p>Serving young people in Nigeria since {site.founded}.</p>
        </div>
      </div>
    </footer>
  );
}
