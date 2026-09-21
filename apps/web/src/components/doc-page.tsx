import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Download, ChevronRight } from "lucide-react";
import { InstallCommand } from "@/components/install-command";
import { repository } from "@/lib/catalog";
type Section = { id: string; label: string };
export function DocPage({
  title,
  description,
  category,
  skill,
  sections,
  children,
}: {
  title: string;
  description: string;
  category: string;
  skill?: string;
  sections: Section[];
  children: React.ReactNode;
}) {
  return (
    <div className="doc-layout">
      <article className="doc-article">
        <div className="breadcrumbs">
          <Link href="/">Library</Link>
          <ChevronRight size={13} />
          <span>{category}</span>
        </div>
        <h1>{title}</h1>
        <p className="doc-lead">{description}</p>
        {skill && (
          <>
            <div className="doc-meta">
              <span>v0.1</span>
              <span>Original workflow</span>
              <span>Source referenced</span>
            </div>
            <InstallCommand skill={skill} compact />
          </>
        )}
        <div className="prose">{children}</div>
        {skill && (
          <a className="text-link" href={`/downloads/${skill}.zip`} download>
            <Download size={16} /> Download this skill
          </a>
        )}
        <div className="doc-bottom">
          <Link href="/">
            <ArrowLeft size={15} /> All skills
          </Link>
          {skill && (
            <a href={`${repository}/tree/main/skills/${skill}`}>
              View skill source <ArrowUpRight size={15} />
            </a>
          )}
        </div>
        <p className="doc-disclaimer">
          Independent project. Not affiliated with Alex Hormozi or
          Acquisition.com.
        </p>
      </article>
      <aside className="page-toc">
        <p>ON THIS PAGE</p>
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`}>
            {section.label}
          </a>
        ))}
        {skill && (
          <div className="toc-download">
            <a href={`/downloads/${skill}.zip`} download>
              <Download size={15} /> Download skill
            </a>
            <small>SKILL.md + references</small>
          </div>
        )}
        <a
          className="toc-source"
          href={`${repository}/tree/main/apps/web/content`}
        >
          Edit this page <ArrowUpRight size={12} />
        </a>
      </aside>
    </div>
  );
}
