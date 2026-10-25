// Single source of truth for identity facts. Pages, JSON-LD, llms.txt and the sitemap all read from here,
// so the same wording appears everywhere search engines and AI crawlers look.

export const SITE_URL = "https://ravishah.dev";
export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const OG_IMAGE = `${SITE_URL}/images/og-card.png`;

export const PERSON = {
  name: "Ravi Shah",
  jobTitle: "Executive Architect",
  employer: "IBM Consulting UK&I",
  employerUrl: "https://www.ibm.com/consulting",
  city: "London",
  country: "GB",
  tagline: "Agentic engineering for Financial Services",
  // The one-line identity used verbatim on every profile (LinkedIn headline, GitHub bio, Medium, DEV, speaker bios).
  identity: "Executive Architect at IBM Consulting UK&I, London — agentic engineering for Financial Services",
  photo: `${SITE_URL}/images/profile.jpg`,
  knowsAbout: [
    "Agentic engineering",
    "Context engineering",
    "Deep agents",
    "Model Context Protocol (MCP)",
    "AI FinOps and token budgets",
    "Shift-left security",
    "Financial services digital transformation",
    "Hybrid cloud and APIs",
    "Resilience engineering",
  ],
};

export const BIO = {
  // Third person, fact-first: written so search snippets and AI answers can quote it directly.
  short:
    "Ravi Shah is an Executive Architect at IBM Consulting UK&I, based in London, specialising in agentic engineering for Financial Services. Ravi writes about agentic patterns, context engineering, token budgets and shift-left security, and publishes runnable open-source companions to that writing.",
  long: [
    "Ravi Shah is an Executive Architect at IBM Consulting UK&I, based in London. Ravi has spent more than two decades helping enterprises deliver digital services, and now focuses on agentic engineering: building software with AI agents and shipping agentic capability into production systems for Financial Services.",
    "Ravi's writing covers agentic design patterns, context engineering, deep agents, token budget discipline, the Model Context Protocol (MCP) in banking, and shift-left security in the pull-request loop. Each practical article is paired with open-source code on GitHub, including gitleaks-repo-scan-agent, deep-agent-anatomy and llm-token-budget.",
    "Ravi has logged more than 1.4 billion tokens of hands-on agentic development and has spoken at the AWS European FSI Industry Analyst Summit (2024) and to IBM UK&I Chief Architects on engineering culture (2026).",
  ],
};

export const PROFILES = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ravishah01/" },
  { name: "GitHub", url: "https://github.com/shahravir" },
  { name: "Medium", url: "https://medium.com/@shah.ravir" },
  { name: "DEV", url: "https://dev.to/shahravir" },
];

export type Talk = {
  event: string;
  year: number;
  topic?: string;
  // Fill these in as you have them. Event structured data is only emitted for talks with a full date and location.
  title?: string;
  date?: string; // YYYY-MM-DD
  location?: string;
  summary?: string;
  url?: string;
  slides?: string;
  video?: string;
};

export const TALKS: Talk[] = [
  { event: "IBM UK&I Chief Architects", year: 2026, topic: "Engineering culture" },
  { event: "AWS European FSI Industry Analyst Summit", year: 2024, topic: "Financial Services" },
];

export const PROJECTS = [
  {
    name: "deep-agent-anatomy",
    url: "https://github.com/shahravir/deep-agent-anatomy",
    description:
      "Runnable companion to “A deep agent anatomy”: shallow vs. deep agents, the four components, and a from-scratch deep agent you can run with no API key.",
    tags: ["Agentic AI", "Deep agents", "Python"],
    article: "a-deep-agent-anatomy",
  },
  {
    name: "gitleaks-repo-scan-agent",
    url: "https://github.com/shahravir/gitleaks-repo-scan-agent",
    description:
      "Shift-left security for the agentic era — an AI agent skill that runs Gitleaks in Cursor, Copilot CLI and CI, interprets findings and guides remediation before secrets reach production.",
    tags: ["DevSecOps", "Agent skills", "Gitleaks"],
    article: "ibm-project-bob-shift-left-security",
  },
  {
    name: "llm-token-budget",
    url: "https://github.com/shahravir/llm-token-budget",
    description: "Utilities to keep LLM token spend under control. Companion code for “Token Budget Discipline”.",
    tags: ["AI FinOps", "LLM tools", "Tokens"],
    article: "token-budget-discipline",
  },
  {
    name: "carbon-compute",
    url: "https://github.com/shahravir/carbon-compute",
    description:
      "Enterprise carbon accounting for AI, cloud, Kubernetes, facilities and LLM workloads, with tamper-evident auditability.",
    tags: ["Sustainability", "Carbon accounting", "JavaScript"],
  },
  {
    name: "my-advisor-v1",
    url: "https://github.com/shahravir/my-advisor-v1",
    description:
      "Agentic financial advisor prototype — Flutter web frontend, FastAPI backend, Anthropic-powered advice and realistic mock datasets for Financial Services demos.",
    tags: ["Financial Services", "Flutter", "FastAPI"],
  },
  {
    name: "pms-v4",
    url: "https://github.com/shahravir/pms-v4",
    description: "Portfolio management system with an AI assistant — an agentic engineering demo.",
    tags: ["Financial Services", "React", "Node.js"],
  },
  {
    name: "todo-app-v1",
    url: "https://github.com/shahravir/todo-app-v1",
    description:
      "Reference full-stack app — React Native (Expo) client, Express + MongoDB API, Socket.IO real-time sync and offline queue support.",
    tags: ["Expo", "Express", "MongoDB"],
  },
];

// Bump whenever /now changes — shown on the page and used as its sitemap lastmod.
export const NOW_UPDATED = "2026-10-25";

export const NAV = [
  { href: "/about/", label: "About" },
  { href: "/writing/", label: "Writing" },
  { href: "/projects/", label: "Projects" },
  { href: "/speaking/", label: "Speaking" },
];

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON.name,
    url: `${SITE_URL}/`,
    image: PERSON.photo,
    jobTitle: PERSON.jobTitle,
    description: BIO.short,
    worksFor: { "@type": "Organization", name: "IBM Consulting", url: PERSON.employerUrl },
    address: { "@type": "PostalAddress", addressLocality: PERSON.city, addressCountry: PERSON.country },
    knowsAbout: PERSON.knowsAbout,
    sameAs: PROFILES.map((p) => p.url),
  };
}

// Compact reference for pages other than home/about.
export const personRef = { "@type": "Person", "@id": PERSON_ID, name: PERSON.name, url: `${SITE_URL}/about/` };
