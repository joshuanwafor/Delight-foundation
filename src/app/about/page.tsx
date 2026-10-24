import type { Metadata } from "next";
import { Button, Check, Container, GiveBand, PageHero, SectionHeading, Verse } from "@/components/ui";
import { mission, objectives, pillars, requirements, scholarshipProvidesSummary, skills, verses } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Our mission, our story, and the faith that drives De_Light Foundation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A light for the younger generation"
        intro="De_Light Foundation was born out of a desire to make a life-changing impact in the lives of young people in Nigeria — equipping their minds, funding their futures, and strengthening their faith in Jesus Christ."
      />

      {/* Intro */}
      <section className="bg-white py-16">
        <Container className="max-w-3xl text-center">
          <p className="font-serif text-xl leading-relaxed text-navy sm:text-2xl">
            Rooted in the love of Christ, we are committed to raising young Christian techpreneurs, nurturing
            Christlike character, and providing the skills, resources, and mentorship young people need to thrive.
            Through technology training, scholarships, and sustained mentorship, we seek to brighten the future of young
            people in Nigeria.
          </p>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-24">
        <Container className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our mission" title={mission} />
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Our objectives</h3>
            <ol className="mt-6 space-y-6">
              {objectives.map((o, i) => (
                <li key={o.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-gold-light">
                    {i + 1}
                  </span>
                  <div className="pt-1">
                    <h4 className="text-lg font-semibold text-navy">{o.title}</h4>
                    <p className="mt-1 leading-relaxed text-muted">{o.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="The problem we are solving"
            title="Excelling beyond the limitations of formal education"
          />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              While formal education provides an important foundation, it does not always adequately prepare students
              for the practical demands of today’s job market and entrepreneurial landscape. Consequently, some
              graduates struggle to secure employment or find themselves needing additional practical training after
              spending four to five years in higher institutions.
            </p>
            <p>
              This gap between academic learning and real-world demands presents a challenge, but it also presents an
              opportunity.
            </p>
            <p>
              We believe the younger generation deserves more than the knowledge required to pass examinations. They
              need practical skills, mentorship, godly values, and the confidence to create opportunities for themselves
              and others.
            </p>
            <p>
              Rather than simply lamenting the limitations of the system, De_Light Foundation is committed to taking
              deliberate steps to equip young people to excel, guided by faith in Jesus Christ and empowered to make a
              meaningful difference in society.
            </p>
          </div>
        </Container>
      </section>

      {/* Skills program */}
      <section className="py-24">
        <Container className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="How we do this"
              title="Technology Skills Acquisition Program"
              intro="When De_Light Foundation began in 2022, our curriculum centred on Web Development, Graphics Design, and Data Analysis. Since then, the skills young people need to thrive in a fast-moving digital economy have expanded — so our program has grown with them."
            />
            <p className="mt-5 text-lg leading-relaxed text-muted">
              De_Light Foundation now runs a three-day intensive Skills Acquisition Training Program across five
              high-demand areas.
            </p>
          </div>
          <div>
            <ul className="space-y-3">
              {skills.map((s) => (
                <li key={s.title} className="flex gap-3 rounded-xl border border-navy/10 bg-white p-4">
                  <Check className="mt-0.5 h-5 w-5" />
                  <span className="font-medium text-navy">{s.title}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-navy p-6 text-white">
              <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">
                Unlike programs that focus primarily on public speaking and motivation, we go further
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-3">
                  <Check />
                  We provide at least three Core i5 laptops to our trainees.
                </li>
                <li className="flex gap-3">
                  <Check />
                  We enrol every successful trainee in a structured mentorship scheme.
                </li>
              </ul>
            </div>
            <p className="mt-6 text-muted">
              De_Light Foundation does not charge trainees a dime. The program is sustained entirely through the
              generosity of community members who wish to give back to society.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder story */}
      <section className="bg-white py-24">
        <Container className="grid items-start gap-14 md:grid-cols-[1fr_1.4fr]">
          <div className="md:sticky md:top-28">
            <SectionHeading eyebrow="Our expanded vision · 2026" title="Why mentorship matters to us" />
          </div>
          <div className="space-y-5 border-l-2 border-gold pl-6 text-lg leading-relaxed text-ink sm:pl-8">
            <p className="font-serif text-2xl leading-snug text-navy italic">
              “What hurt most was not the missing funds alone, but the absence of mentorship.”
            </p>
            <p className="text-muted">
              In 2018, our founder sat the Bilateral Education Agreement (BEA) scholarship examination, hoping it would
              relieve the financial pressure of his education. No feedback ever came — no word of a pass or a fail — and
              the funding never arrived.
            </p>
            <p className="text-muted">
              Looking back, a structured — or even unstructured — support system would have saved years of struggle and
              self-navigation through the post-graduation phase.
            </p>
            <p className="text-muted">
              That experience is why, in 2026, De_Light Foundation expanded its mission beyond technology training to
              include an <strong className="text-navy">Undergraduate Scholarship &amp; Mentorship Program</strong> — so
              that no student has to walk the journey alone.
            </p>
            <div className="pt-2">
              <Button href="/scholarship" variant="navy">
                Explore the scholarship
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Scholarship summary */}
      <section className="py-24">
        <Container>
          <SectionHeading eyebrow="What we provide" title="The Undergraduate Scholarship & Mentorship Program" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {scholarshipProvidesSummary.map((p) => (
              <li key={p} className="flex gap-3 rounded-2xl bg-sand p-6 text-ink">
                <Check className="mt-0.5 h-5 w-5" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Pillars */}
      <section className="bg-navy py-24 text-white">
        <Container>
          <SectionHeading
            light
            center
            eyebrow="Our root"
            title="To spread the love of Jesus Christ"
            intro="The pillar, essence, and root of everything we do is the love of Christ. Specifically, we aim to:"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="font-serif text-xl font-semibold text-gold-light">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Verse {...verses.train} />
        </Container>
      </section>

      {/* Who we serve + requirements */}
      <section className="bg-white py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we serve" title="Christian students on Nigerian campuses" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Our scholarship and mentorship program primarily serves Christian undergraduate students in Nigerian
                tertiary institutions, with the aim of building a stronger Christian community on Nigerian campuses.
              </p>
              <p>
                In keeping with our faith-centred mission, we intend for 80–90% of program funds to support Christian
                students, while remaining open to accommodating a percentage of non-Christian students.
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-sand p-8">
            <h3 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Application requirements</h3>
            <p className="mt-3 text-muted">Applicants should:</p>
            <ol className="mt-4 space-y-4">
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
        </Container>
      </section>

      {/* Track record + looking ahead */}
      <section className="py-24">
        <Container className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Our track record" title="We are not starting from zero" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                De_Light Foundation already runs an active mentorship cohort (2025/2026), and this expanded program
                builds directly on that foundation.
              </p>
              <p>
                Going forward, we are committed to holding quarterly meetings for each cohort until graduation —
                ensuring that no sponsored student is left to walk the journey alone.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Looking ahead" title="A generation that reflects the love of Jesus" />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Through our Technology Skills Acquisition Program and Undergraduate Scholarship &amp; Mentorship
                Program, De_Light Foundation serves the younger generation from secondary school through university and
                into the years beyond graduation.
              </p>
              <p>
                Our desire is not simply to equip young people with technical skills or provide financial assistance.
                We want to raise a generation whose lives reflect the love of Jesus Christ — young people who are
                equipped to thrive, empowered to serve, and committed to making a meaningful difference in their
                communities.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <GiveBand />
    </>
  );
}
