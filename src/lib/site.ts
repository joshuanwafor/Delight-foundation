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
    body: "Practical training on using artificial intelligence to think, work, and create faster.",
  },
  {
    title: "Video Creation & Editing",
    body: "Shooting, cutting and telling stories with video for a content-driven world.",
  },
  {
    title: "Creative Thinking & Content Writing",
    body: "Clear thinking and persuasive writing that open doors online and offline.",
  },
  {
    title: "Data Analysis",
    body: "Turning numbers into decisions with tools employers actually use.",
  },
  {
    title: "Graphics Design",
    body: "Visual design fundamentals and the software to bring ideas to life.",
  },
];

export const objectives = [
  "Restoring the dying hopes of the younger generation through technology.",
  "Raising techpreneurs who will pass on tech knowledge to the younger generation.",
  "Raising future millionaires through technology.",
];

export const pillars = [
  {
    title: "Mature believers",
    body: "Produce cohorts of believers matured in the nature and character of Christ.",
  },
  {
    title: "Faith on campus",
    body: "Mentor and strengthen students' on-campus Christian faith, and encourage them to share it with others.",
  },
  {
    title: "Ready for what's next",
    body: "Prepare every sponsored student for life after graduation, so no one has to navigate it alone.",
  },
];

export const scholarshipProvides = [
  {
    title: "School fee sponsorship",
    body: "Full session fees paid for at least 10 undergraduate students every academic year.",
  },
  {
    title: "Quarterly mentorship",
    body: "An online mentorship session four times a year for every active cohort, until graduation.",
  },
  {
    title: "Post-Graduate Life seminar",
    body: "An annual seminar at the end of every year to prepare graduating students for life after school.",
  },
  {
    title: "Ongoing fellowship",
    body: "A discussion platform between the four main events, with extra programs recommended by Christian leaders and mentors.",
  },
];

export const requirements = [
  "Be a Nigerian undergraduate student.",
  "Submit a letter of motivation stating why you should receive the scholarship.",
  "Upload an academic transcript (required for students in 200 level and above).",
  "Provide two letters of recommendation — one academic, and one from a religious leader.",
];

export const giftUnlocks = [
  "A full session (academic year) fee, paid in full.",
  "A personal mentor who checks in every quarter until they graduate.",
  "A place in a community that strengthens their faith, not just their transcript.",
  "A “Post-Graduate Life” seminar that prepares them for what comes after school.",
];
