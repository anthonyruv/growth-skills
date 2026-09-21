export const repository = "https://github.com/anthonyruv/growth-skills";
export const installCommand = "npx skills add anthonyruv/growth-skills";
export const skills = [
  {
    slug: "create-offer",
    title: "Create an offer",
    category: "Offers",
    description:
      "Turn a customer problem into an offer people can understand, believe, and buy.",
    output: "An offer brief, delivery plan, and assumptions to validate.",
  },
  {
    slug: "build-landing-page",
    title: "Build a landing page",
    category: "Marketing",
    description:
      "Bring your offer into focus with a clear page structure and evidence-led copy.",
    output: "A page outline, draft copy, proof checklist, and first test.",
  },
  {
    slug: "plan-conversion-test",
    title: "Plan a conversion test",
    category: "Conversion",
    description:
      "Choose one useful experiment and define what a meaningful result looks like.",
    output:
      "A test brief with a hypothesis, measurement plan, and decision rules.",
  },
] as const;
export const guides = [
  {
    slug: "introduction",
    title: "Introduction",
    description: "How the library works and where to start.",
  },
  {
    slug: "installation",
    title: "Installation",
    description: "Install the skills into your preferred AI agent.",
  },
  {
    slug: "sources",
    title: "Sources & method",
    description:
      "What we reviewed, how we adapt it, and what remains unprocessed.",
  },
  {
    slug: "changelog",
    title: "Changelog",
    description: "What changed in the library.",
  },
] as const;
export const searchablePages = [
  ...skills.map((s) => ({
    title: s.title,
    description: s.description,
    href: `/skills/${s.slug}`,
    category: s.category,
  })),
  ...guides.map((g) => ({
    title: g.title,
    description: g.description,
    href: `/docs/${g.slug}`,
    category: "Documentation",
  })),
];
