import type { Metadata } from "next";
import { GivePicker } from "@/components/give-picker";
import { Check, Container, Eyebrow, SectionHeading, Verse } from "@/components/ui";
import { giftUnlocks, verses } from "@/lib/site";

export const metadata: Metadata = {
  title: "Give",
  description: "Fund a Nigerian Christian student's education — starting at just $50.",
};

export default function GivePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="rays absolute inset-0" />
        <div className="glow absolute inset-0" />
        <Container className="relative grid items-start gap-12 py-20 lg:grid-cols-[1fr_1.1fr] lg:py-24">
          <div className="lg:pt-6">
            <Eyebrow light>Fund a Christian student</Eyebrow>
            <h1 className="mt-4 font-serif text-4xl leading-tight font-semibold sm:text-5xl">
              Be the <span className="text-gold-light italic">“yes”</span> a student has been praying for
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              This academic session, we are believing God to fully fund ten Nigerian Christian students. Every gift —
              however small — moves one more name to the top of that list.
            </p>
            <ul className="mt-8 space-y-3">
              {giftUnlocks.map((g) => (
                <li key={g} className="flex gap-3 text-white/90">
                  <Check className="mt-0.5 h-5 w-5" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
          <GivePicker />
        </Container>
      </section>

      <section className="py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <SectionHeading
            eyebrow="What your gift does"
            title="Not a one-time cheque — a journey to graduation"
          />
          <div className="space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Your gift of $50–$100 pays one student’s full session fee — and comes with something money alone can’t
              buy: a mentor who checks in on them every quarter until they cross the finish line.
            </p>
            <p>
              De_Light Foundation already mentors an active 2025/2026 cohort. Your gift lands inside a program that is
              already working, not a plan on paper.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <Verse {...verses.cheerful} />
        </Container>
      </section>
    </>
  );
}
