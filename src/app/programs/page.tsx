import type { Metadata } from "next";
import { Button, Check, Container, GiveBand, PageHero, SectionHeading } from "@/components/ui";
import { scholarshipProvides, skills } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Free technology skills training for secondary-school students, and scholarships with mentorship for Christian undergraduates.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our programs"
        title="Serving young people from the classroom to the career"
        intro="Two programs, one purpose: young Nigerians who are skilled, supported, and rooted in Christ."
      />

      {/* Skills */}
      <section id="skills" className="py-24">
        <Container>
          <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Program 01 · Since 2022"
                title="Technology Skills Acquisition Program"
                intro="When we began in 2022, our curriculum centred on web development, graphics design and data analysis. The skills young people need have grown — and so has our program."
              />
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Today we run a <strong className="text-navy">three-day intensive</strong> across five high-demand
                areas.
              </p>
              <div className="mt-8 rounded-2xl bg-gold-pale p-6">
                <p className="font-serif text-xl font-semibold text-navy">Completely free for trainees.</p>
                <p className="mt-2 text-muted">
                  De_Light Foundation does not charge trainees a dime. The program is sustained entirely by community
                  members who wish to give back to society.
                </p>
              </div>
            </div>

            <div>
              <ol className="space-y-3">
                {skills.map((s, i) => (
                  <li key={s.title} className="flex gap-4 rounded-xl border border-navy/10 bg-white p-5">
                    <span className="font-serif text-2xl font-semibold text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="font-semibold text-navy">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 rounded-xl bg-navy p-6 text-white">
                <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">
                  Unlike most motivational programs, we go further
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3">
                    <Check />
                    At least three Core i5 laptops provided to our trainees.
                  </li>
                  <li className="flex gap-3">
                    <Check />
                    Every successful trainee enrolled in a structured mentorship scheme.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Scholarship */}
      <section id="scholarship" className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Program 02 · New in 2026"
            title="Undergraduate Scholarship & Mentorship Program"
            intro="Fees paid, and a mentor beside every student until graduation — building a stronger Christian community on Nigerian campuses."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scholarshipProvides.map((p) => (
              <div key={p.title} id={p.title.startsWith("Post") ? "post-graduate" : undefined} className="rounded-2xl bg-sand p-7">
                <h3 className="font-serif text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/scholarship" variant="navy">
              Eligibility &amp; how to apply
            </Button>
            <Button href="/give" variant="outline">
              Sponsor a student
            </Button>
          </div>
        </Container>
      </section>

      {/* Looking ahead */}
      <section className="py-24">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            center
            eyebrow="Looking ahead"
            title="Equipping minds. Funding futures. Strengthening faith."
            intro="Between our Technology Skills Acquisition Program and our Undergraduate Scholarship & Mentorship Program, De_Light Foundation now serves the younger generation from secondary school, through university, and into the years just beyond graduation."
          />
        </Container>
      </section>

      <GiveBand />
    </>
  );
}
