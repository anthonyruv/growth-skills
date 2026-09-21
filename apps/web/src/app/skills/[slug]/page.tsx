import { notFound } from "next/navigation";
import { DocPage } from "@/components/doc-page";
import { skills as entries } from "@/lib/catalog";
import Page0 from "../../../../content/create-offer.mdx";
import Page1 from "../../../../content/build-landing-page.mdx";
import Page2 from "../../../../content/plan-conversion-test.mdx";
const pages = {
  "create-offer": {
    Content: Page0,
    sections: [
      { id: "what-you-get", label: "What you get" },
      { id: "when-to-use-it", label: "When to use it" },
      { id: "what-to-bring", label: "What to bring" },
      { id: "how-it-works", label: "How it works" },
      { id: "try-it", label: "Try it" },
      { id: "sources", label: "Sources" },
    ],
  },
  "build-landing-page": {
    Content: Page1,
    sections: [
      { id: "what-you-get", label: "What you get" },
      { id: "when-to-use-it", label: "When to use it" },
      { id: "what-to-bring", label: "What to bring" },
      { id: "how-it-works", label: "How it works" },
      { id: "try-it", label: "Try it" },
      { id: "sources", label: "Sources" },
    ],
  },
  "plan-conversion-test": {
    Content: Page2,
    sections: [
      { id: "what-you-get", label: "What you get" },
      { id: "when-to-use-it", label: "When to use it" },
      { id: "what-to-bring", label: "What to bring" },
      { id: "how-it-works", label: "How it works" },
      { id: "try-it", label: "Try it" },
      { id: "sources", label: "Sources" },
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
      category={entry.category}
      skill={entry.slug}
      sections={sections}
    >
      <Content />
    </DocPage>
  );
}
