import { notFound } from "next/navigation";
import { DocPage } from "@/components/doc-page";
import { guides as entries } from "@/lib/catalog";
import Page0 from "../../../../content/introduction.mdx";
import Page1 from "../../../../content/installation.mdx";
import Page2 from "../../../../content/sources.mdx";
import Page3 from "../../../../content/changelog.mdx";
const pages = {
  introduction: {
    Content: Page0,
    sections: [
      { id: "a-practical-library", label: "A practical library" },
      { id: "choose-a-starting-point", label: "Choose a starting point" },
      { id: "what-a-skill-contains", label: "What a skill contains" },
      { id: "keep-your-judgment", label: "Keep your judgment" },
    ],
  },
  installation: {
    Content: Page1,
    sections: [
      { id: "install-the-collection", label: "Install the collection" },
      { id: "install-one-skill", label: "Install one skill" },
      { id: "use-it-in-your-agent", label: "Use it in your agent" },
      { id: "update-or-download", label: "Update or download" },
      { id: "inspect-the-source", label: "Inspect the source" },
    ],
  },
  sources: {
    Content: Page2,
    sections: [
      { id: "what-we-reviewed", label: "What we reviewed" },
      { id: "the-channel-catalog", label: "The channel catalog" },
      { id: "how-lessons-become-skills", label: "How lessons become skills" },
      {
        id: "attribution-and-independence",
        label: "Attribution and independence",
      },
    ],
  },
  changelog: {
    Content: Page3,
    sections: [
      { id: "september-21-2026", label: "September 21, 2026" },
      { id: "what-comes-next", label: "What comes next" },
    ],
  },
};
export const dynamicParams = false;
export function generateStaticParams() {
  return entries.map((e) => ({ slug: e.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = entries.find((e) => e.slug === slug);
  return { title: entry?.title, description: entry?.description };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = entries.find((e) => e.slug === slug);
  if (!entry || !(slug in pages)) notFound();
  const { Content, sections } = pages[slug as keyof typeof pages];
  return (
    <DocPage
      title={entry.title}
      description={entry.description}
      category="Documentation"
      sections={sections}
    >
      <Content />
    </DocPage>
  );
}
