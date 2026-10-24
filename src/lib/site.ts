export const site = {
  name: "De_Light Foundation",
  shortName: "De_Light",
  tagline: "Brightening the younger generation",
  email: "udealorfestus@gmail.com",
  phone: "+234 816 996 5380",
  phoneHref: "tel:+2348169965380",
  whatsappHref: "https://wa.me/2348169965380",
  address: "No. 14 Ajakaiye Street, Lagos, Nigeria",
  paypalEmail: "udealorfestus@gmail.com",
  founded: 2022,
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/scholarship", label: "Scholarship" },
  { href: "/contact", label: "Contact" },
];

/** PayPal donation link for a given USD amount. */
export function paypalLink(amount?: number) {
  const params = new URLSearchParams({
    cmd: "_donations",
    business: site.paypalEmail,
    item_name: "De_Light Foundation — Student Scholarship Fund",
    currency_code: "USD",
  });
  if (amount) params.set("amount", String(amount));
  return `https://www.paypal.com/cgi-bin/webscr?${params.toString()}`;
}

export const verses = {
  light: {
    text: "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.",
    source: "Matthew 5:16",
  },
  train: {
    text: "Train up a child in the way he should go: and when he is old, he will not depart from it.",
    source: "Proverbs 22:6",
  },
  burdens: {
    text: "Bear ye one another's burdens, and so fulfil the law of Christ.",
    source: "Galatians 6:2",
  },
  hope: {
    text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
    source: "Jeremiah 29:11",
  },
  cheerful: {
    text: "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.",
    source: "2 Corinthians 9:7",
  },
};

export const skills = [
  {
    title: "AI Tools & Applications",
    body: "Introducing young people to practical applications of artificial intelligence that can support learning, creativity, and productivity.",
  },
  {
    title: "Video Creation & Editing",
    body: "Developing the skills to create, edit, and communicate ideas through video.",
  },
  {
    title: "Creative Thinking & Content Writing",
    body: "Encouraging clear thinking, effective communication, and purposeful writing for digital and everyday contexts.",
  },
  {
    title: "Data Analysis",
    body: "Introducing practical approaches to understanding data and using it to inform decisions.",
  },
  {
    title: "Graphics Design",
    body: "Building foundational visual design skills and exploring tools for bringing creative ideas to life.",
  },
];

export const mission = "Raising and establishing 100 young Christian techpreneurs in Nigeria by 2040.";

export const objectives = [
  {
    title: "Pointing the younger generation to Christ",
    body: "To restore hope in the younger generation by pointing them to Jesus Christ, the Light of the world, and grounding them in the truth of His Word.",
  },
  {
    title: "Raising Christian techpreneurs who empower others",
    body: "To equip young Christians with practical technology skills and entrepreneurial knowledge, inspiring them to pass on what they learn and create opportunities for others.",
  },
  {
    title: "Building a society shaped by Christlike character",
    body: "To contribute to a better society by raising whole believers whose faith is reflected in their character, service, leadership, and impact on the world around them.",
  },
];

export const pillars = [
  {
    title: "Mature believers",
    body: "Produce cohorts of believers matured in the nature and character of Christ.",
  },
  {
    title: "Faith on campus",
    body: "Mentor and strengthen students' on-campus Christian faith, and encourage them to share that faith with others.",
  },
  {
    title: "Ready for what's next",
    body: "Prepare every sponsored student for life after graduation, so no one has to navigate it alone.",
  },
];

export const scholarshipProvides = [
  {
    title: "School fee sponsorship",
    body: "We seek to ease the financial burden of higher education by providing school fee assistance to eligible undergraduate students, subject to available funding.",
  },
  {
    title: "Quarterly mentorship",
    body: "We aim to provide regular online mentorship sessions for each active cohort, creating opportunities for guidance, encouragement, and meaningful conversations throughout students' academic journeys.",
  },
  {
    title: "Post-Graduate Life seminar",
    body: "We envision an annual seminar to help graduating students think through the transition from university into employment, entrepreneurship, and other responsibilities of adult life.",
  },
  {
    title: "Ongoing fellowship and support",
    body: "Beyond formal meetings, we hope to maintain a platform where students can continue learning, sharing experiences, and receiving guidance, with opportunities for additional activities recommended by Christian leaders and mentors.",
  },
];

/** The About page's shorter version of what the scholarship provides. */
export const scholarshipProvidesSummary = [
  "School fee sponsorship for at least 10 undergraduate students every academic year.",
  "A quarterly online mentorship session, held four times a year, for every active cohort.",
  "An annual Post-Graduate Life seminar, held at the end of every year, to prepare graduating students for life after school.",
  "An intermittent discussion platform between the four main events, with room for additional programs as recommended by Christian leaders and mentors.",
];

export const requirements = [
  "Be an undergraduate student in a Nigerian tertiary institution.",
  "Submit a motivation letter explaining why you should receive the scholarship.",
  "Provide an academic transcript, where applicable.",
  "Provide two letters of recommendation — one academic and one from a religious leader.",
];

export const giftUnlocks = [
  "A full session (academic year) fee, paid in full.",
  "A personal mentor who checks in every quarter until they graduate.",
  "A place in a community that strengthens their faith, not just their transcript.",
  "A “Post-Graduate Life” seminar that prepares them for what comes after school.",
];
