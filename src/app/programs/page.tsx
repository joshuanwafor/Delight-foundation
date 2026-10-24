import type { Metadata } from "next";
import { Button, Container, GiveBand, PageHero, SectionHeading } from "@/components/ui";
import { scholarshipProvides, skills } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Scholarships and mentorship for undergraduates in Nigeria, and a planned technology skills training program for young people.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our programs"
        title="Serving young people from the classroom to the career"
        intro="Two programs, one purpose: helping young Nigerians grow in faith, develop practical skills, and find the support they need to thrive."
      />

      <section className="bg-white py-16">
        <Container className="max-w-3xl text-center">
          <p className="font-serif text-xl leading-relaxed text-navy sm:text-2xl">
            Rooted in the love of Jesus Christ, De_Light Foundation seeks to equip the younger generation through
            technology, education, and mentorship. Our scholarship and mentorship initiative is our current focus, while
            our technology training program remains part of our vision for the future.
          </p>
        </Container>
      </section>

      {/* Skills — planned */}
      <section id="skills" className="py-24">
        <Container>
          <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
            <div>
              <SectionHeading
                eyebrow="Program 01 · Planned initiative"
                title="Technology Skills Acquisition Program"
                intro="Preparing young people for a changing digital world."
              />
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  We envision a future where young Nigerians have access to practical technology skills that prepare
                  them for employment, entrepreneurship, and meaningful contributions to society.
                </p>
                <p>
                  Our planned Technology Skills Acquisition Program builds on our original focus on web development,
                  graphics design, and data analysis, while recognising the growing importance of new digital skills.
                </p>
                <p>
                  Subject to funding and available resources, we hope to develop a three-day intensive training program
                  covering five key areas.
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
                <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">Beyond the training</p>
                <p className="mt-3 leading-relaxed text-white/80">
                  As resources permit, we hope to complement skills training with access to learning equipment and
                  structured mentorship, helping participants continue developing their abilities beyond the classroom.
                </p>
                <p className="mt-3 leading-relaxed text-white/80">
                  Our vision is to make practical technology education accessible to young people who might otherwise
                  struggle to access such opportunities.
                </p>
              </div>
              <p className="mt-6 rounded-xl bg-gold-pale p-5 text-ink">
                This initiative will commence when sufficient funding and resources are available. We welcome the
                support of individuals and organisations who share this vision.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Scholarship */}
      <section id="scholarship" className="bg-white py-24">
        <Container>
          <SectionHeading
            eyebrow="Program 02 · Scholarship & Mentorship"
            title="Undergraduate Scholarship & Mentorship Program"
            intro="Supporting students in faith, education, and life beyond graduation."
          />
          <div className="mt-6 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              We believe that students need more than financial assistance. They also need encouragement, guidance, and
              a community that supports their growth.
            </p>
            <p>
              Our Undergraduate Scholarship &amp; Mentorship Program seeks to support students in Nigerian tertiary
              institutions, with a particular emphasis on nurturing Christian faith, strengthening character, and
              preparing young people for life beyond graduation.
            </p>
            <p>
              The program is rooted in the love of Jesus Christ and the desire to encourage recipients to share that
              love with others.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {scholarshipProvides.map((p) => (
              <div
                key={p.title}
                id={p.title.startsWith("Post") ? "post-graduate" : undefined}
                className="rounded-2xl bg-sand p-7"
              >
                <h3 className="font-serif text-lg font-semibold text-navy">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl bg-navy p-8 text-white">
            <h3 className="font-serif text-xl font-semibold text-gold-light">Our foundation: the love of Christ</h3>
            <p className="mt-3 leading-relaxed text-white/80">
              Our purpose extends beyond helping students complete their education. We seek to encourage spiritual
              growth, nurture Christlike character, strengthen Christian fellowship on campus, and help students
              approach the future with faith and purpose.
            </p>
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
            intro="De_Light Foundation seeks to serve the younger generation through complementary initiatives: supporting students through scholarships and mentorship while working towards a future in which more young people can access practical technology education."
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            <p>
              Our vision is to help young people grow in knowledge, faith, character, and purpose — equipping them to
              create opportunities, serve others, and make a meaningful difference in their communities.
            </p>
            <p>
              We recognise that this vision requires resources, partnerships, and the generosity of people who believe
              in the potential of the younger generation. We invite you to be part of the journey.
            </p>
          </div>
        </Container>
      </section>

      <GiveBand />
    </>
  );
}
