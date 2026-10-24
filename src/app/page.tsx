import Link from "next/link";
import { Button, Check, Container, Eyebrow, GiveBand, SectionHeading, Verse } from "@/components/ui";
import { giftUnlocks, skills, verses } from "@/lib/site";

const stats = [
  { value: "$50–$100", label: "Covers one student's full session fee for the year" },
  { value: "10", label: "Christian students — our funding goal this academic session" },
  { value: "4×", label: "Mentorship touchpoints a year, every year, until graduation" },
];

const journey = [
  {
    stage: "Secondary school",
    title: "Technology Skills Acquisition",
    body: "A planned three-day intensive across five high-demand digital skills, launching as funding and resources allow.",
    href: "/programs#skills",
  },
  {
    stage: "University",
    title: "Scholarship & Mentorship",
    body: "School fees paid for Christian undergraduates, plus a mentor who walks with them every quarter until graduation.",
    href: "/scholarship",
  },
  {
    stage: "After graduation",
    title: "Post-Graduate Life",
    body: "An annual seminar so no one steps into life after school alone — prepared in skill, character and faith.",
    href: "/programs#post-graduate",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="rays absolute inset-0" />
        <div className="glow absolute inset-0" />
        <Container className="relative py-24 text-center sm:py-32">
          <Eyebrow light>Brightening the younger generation</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl leading-[1.05] font-semibold sm:text-7xl">
            Be someone’s <span className="text-gold-light italic">answered prayer</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Somewhere on a Nigerian campus right now, a bright, faith-filled student is staring at a school fee they
            cannot pay. They are praying for a way through. You could be that way.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/give">Fund a student from $50</Button>
            <Button href="/scholarship" variant="outline-light">
              Apply for the scholarship
            </Button>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="relative -mt-10 sm:-mt-12">
        <Container>
          <div className="grid divide-y divide-navy/10 overflow-hidden rounded-2xl bg-white shadow-xl shadow-navy/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {stats.map((s) => (
              <div key={s.value} className="p-7 text-center">
                <p className="font-serif text-4xl font-semibold text-gold">{s.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* The need */}
      <section className="py-24">
        <Container className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="The need"
              title="Real potential. Real strain. No one walking beside them."
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Across Nigerian campuses, countless Christian students carry real academic potential and real
                financial strain — with no mentor to guide them, and no guarantee their fees will be paid.
              </p>
              <p>
                Many drift, distracted, in a fast-moving world. De_Light Foundation exists to close that gap — not
                with a one-time cheque, but with sustained mentorship all the way to graduation, and beyond.
              </p>
            </div>
            <div className="mt-8">
              <Button href="/about" variant="outline">
                Read our story
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-sand p-8 sm:p-10">
            <Eyebrow>What $50–$100 unlocks for one student</Eyebrow>
            <ul className="mt-6 space-y-4">
              {giftUnlocks.map((item) => (
                <li key={item} className="flex gap-3 text-ink">
                  <Check className="mt-0.5 h-5 w-5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-navy/10 pt-6 text-sm text-muted">
              Give once, or give in multiples of $50 to sponsor more than one student.
            </p>
          </div>
        </Container>
      </section>

      {/* Verse */}
      <section className="bg-white py-20">
        <Container>
          <Verse {...verses.burdens} />
        </Container>
      </section>

      {/* Journey */}
      <section className="py-24">
        <Container>
          <SectionHeading
            center
            eyebrow="One journey, every stage"
            title="From secondary school, through university, into life"
            intro="Equipping minds, funding futures, and strengthening faith at every stage."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {journey.map((j, i) => (
              <Link
                key={j.title}
                href={j.href}
                className="group relative rounded-2xl border border-navy/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5"
              >
                <span className="font-serif text-5xl font-semibold text-gold-pale">0{i + 1}</span>
                <p className="mt-2 text-xs font-semibold tracking-[0.2em] text-gold uppercase">{j.stage}</p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-navy">{j.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{j.body}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-navy group-hover:text-gold">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="bg-navy py-24 text-white">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
            <div>
              <SectionHeading
                light
                eyebrow="Our mission"
                title="100 young Christian techpreneurs by 2040"
                intro="Young people deserve more than the knowledge required to pass examinations. Our planned skills program will put practical technology skills in young hands — as funding and resources allow."
              />
              <div className="mt-8">
                <Button href="/programs" variant="outline-light">
                  See our programs
                </Button>
              </div>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {skills.map((s) => (
                <li key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <h3 className="font-semibold text-gold-light">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{s.body}</p>
                </li>
              ))}
              <li className="rounded-xl bg-gold p-5 text-navy-deep">
                <h3 className="font-semibold">Beyond the training</h3>
                <p className="mt-1.5 text-sm leading-relaxed">
                  As resources permit: access to learning equipment and structured mentorship.
                </p>
              </li>
            </ul>
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="py-24">
        <Container className="max-w-4xl text-center">
          <Eyebrow>Why you can trust this gift</Eyebrow>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-navy sm:text-4xl">We are not starting cold.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            De_Light Foundation already mentors an active 2025/2026 cohort of students. This scholarship fund builds
            directly on relationships we have already started — so your gift lands inside a program that is already
            working, not a plan on paper.
          </p>
        </Container>
      </section>

      <GiveBand />
    </>
  );
}
