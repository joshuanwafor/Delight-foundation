import type { Metadata } from "next";
import { Button, Container, GiveBand, PageHero, SectionHeading, Verse } from "@/components/ui";
import { objectives, pillars, verses } from "@/lib/site";

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

      {/* Mission */}
      <section className="py-24">
        <Container className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our mission"
              title="Raising and establishing 100 young techpreneurs from the secondary-school level within Nigeria by 2040."
            />
          </div>
          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Our objectives</h3>
            <ol className="mt-6 space-y-5">
              {objectives.map((o, i) => (
                <li key={o} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-serif text-gold-light">
                    {i + 1}
                  </span>
                  <p className="pt-1.5 text-lg text-ink">{o}</p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section className="bg-white py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="The problem we are solving" title="Excelling in spite of a gloomy system" />
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              After careful examination, we observed that Nigeria’s education system leaves most students with
              theoretical knowledge alone. As a result, many graduates remain jobless — or, after four to five years in
              a higher institution, still have to learn practical skills from non-graduates. It is a troubling irony
              that is gradually becoming the norm.
            </p>
            <p>
              The education system has been battered, but we cannot simply keep blaming government and the system.
              As the saying goes, <em>“when two elephants fight, it is the ground that suffers most.”</em> It is time to
              excel in spite of a gloomy system — and that requires deliberate steps and action.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder story */}
      <section className="py-24">
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
              relieve the financial pressure of their education. No feedback ever came — no word of a pass or a fail —
              and the funding never arrived.
            </p>
            <p className="text-muted">
              Looking back, a structured — or even unstructured — support system would have saved years of struggle
              and self-navigation through the “post-graduation” phase.
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

      <GiveBand />
    </>
  );
}
