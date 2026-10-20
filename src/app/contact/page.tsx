import type { Metadata } from "next";
import { Container, PageHero, Verse } from "@/components/ui";
import { site, verses } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with De_Light Foundation in Lagos, Nigeria.",
};

const channels = [
  { label: "Call", value: site.phone, href: site.phoneHref },
  { label: "WhatsApp", value: site.phone, href: site.whatsappHref },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "Visit", value: site.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We’d love to hear from you"
        intro="Whether you want to give, volunteer as a mentor, partner with us, or ask about our programs — reach out."
      />

      <section className="py-24">
        <Container className="grid max-w-4xl gap-5 sm:grid-cols-2">
          {channels.map((c) => {
            const inner = (
              <>
                <p className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">{c.label}</p>
                <p className="mt-2 font-serif text-xl font-semibold break-all text-navy">{c.value}</p>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="rounded-2xl border border-navy/10 bg-white p-7 transition hover:border-gold hover:shadow-md"
              >
                {inner}
              </a>
            ) : (
              <div key={c.label} className="rounded-2xl border border-navy/10 bg-white p-7">
                {inner}
              </div>
            );
          })}
        </Container>
      </section>

      <section className="bg-navy py-20">
        <Container>
          <Verse light {...verses.light} />
        </Container>
      </section>
    </>
  );
}
