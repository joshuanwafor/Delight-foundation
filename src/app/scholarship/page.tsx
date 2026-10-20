import type { Metadata } from "next";
import { ApplyForm } from "@/components/apply-form";
import { Check, Container, PageHero, SectionHeading, Verse } from "@/components/ui";
import { requirements, scholarshipProvides, verses } from "@/lib/site";

export const metadata: Metadata = {
  title: "Scholarship",
  description:
    "The De_Light Undergraduate Scholarship & Mentorship Program — school fees and quarterly mentorship for Nigerian Christian undergraduates.",
};

export default function ScholarshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Undergraduate Scholarship & Mentorship"
        title="Your fees paid. A mentor beside you. All the way to graduation."
        intro="For Nigerian undergraduates who want to grow in faith and finish strong — and not walk the journey alone."
      />

      <section className="py-24">
        <Container className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="What we provide" title="More than a cheque" />
            <ul className="mt-8 space-y-5">
              {scholarshipProvides.map((p) => (
                <li key={p.title} className="flex gap-3">
                  <Check className="mt-1 h-5 w-5" />
                  <div>
                    <h3 className="font-semibold text-navy">{p.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-navy p-8 text-white">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-gold-light uppercase">Who we serve</h3>
              <p className="mt-4 leading-relaxed text-white/80">
                This program is for Christian undergraduate students, in service of building a stronger Christian
                community on Nigerian campuses. 80–90% of program funds go to Christian students, and we remain open to
                accommodating a percentage of non-Christian students.
              </p>
            </div>
            <div className="rounded-2xl bg-sand p-8">
              <h3 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Application requirements</h3>
              <ol className="mt-5 space-y-4">
                {requirements.map((r, i) => (
                  <li key={r} className="flex gap-3 text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white font-serif text-sm font-semibold text-gold">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{r}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section id="apply" className="bg-white py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            center
            eyebrow="Apply"
            title="Start your application"
            intro="Fill in your details and write your letter of motivation below. We read every application prayerfully."
          />
          <div className="mt-12">
            <ApplyForm />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Verse {...verses.hope} />
        </Container>
      </section>
    </>
  );
}
