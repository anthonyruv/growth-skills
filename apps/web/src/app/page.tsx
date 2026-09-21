import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  FileText,
  FlaskConical,
} from "lucide-react";
import { InstallCommand } from "@/components/install-command";
import { skills, repository } from "@/lib/catalog";
const icons = [Layers, FileText, FlaskConical];
export default function Home() {
  return (
    <div className="overview">
      <div className="eyebrow">
        <span className="release-tag">THE FIRST COLLECTION</span> Open source ·
        v0.1
      </div>
      <h1>
        Business know-how.
        <br />
        <span className="subtle-heading">Ready for your agent.</span>
      </h1>
      <p className="intro">
        Practical skills for sharper offers, clearer landing pages, and better
        experiments. Take the thinking into the tools you already use.
      </p>
      <InstallCommand />
      <div className="compatibility">
        <span>Works with</span>
        <strong>Claude Code</strong>
        <strong>Codex</strong>
        <strong>Cursor</strong>
        <strong>Copilot</strong>
      </div>
      <section className="library-section" aria-labelledby="library-heading">
        <div className="section-heading">
          <div>
            <span className="eyebrow">THE LIBRARY</span>
            <h2 id="library-heading">Pick the job to be done.</h2>
          </div>
          <span className="count-label">03 skills</span>
        </div>
        <div className="skill-grid">
          {skills.map((skill, i) => {
            const Icon = icons[i]!;
            return (
              <Link
                className="skill-card"
                href={`/skills/${skill.slug}`}
                key={skill.slug}
              >
                <div className="card-top">
                  <span className={`skill-icon icon-${i}`}>
                    <Icon size={21} strokeWidth={1.6} />
                  </span>
                  <ArrowUpRight size={18} className="card-arrow" />
                </div>
                <span className="card-category">{skill.category}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
                <div className="card-bottom">
                  <code>/{skill.slug}</code>
                  <span>
                    Read the docs <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="workflow-note">
        <div className="note-label">
          <span>01 → 02 → 03</span>
          <h2>
            A small set.
            <br />A connected workflow.
          </h2>
        </div>
        <p>
          Shape what you sell. Turn it into a page. Test the part that matters
          next. Each skill leaves you with a concrete artifact you can use in
          the next step.
        </p>
      </section>
      <section className="principles">
        <div>
          <span className="eyebrow">BUILT TO BE INSPECTED</span>
          <h2>
            Read the reasoning.
            <br />
            Make it your own.
          </h2>
          <p>
            Original workflows informed by Alex Hormozi’s public teaching, with
            references you can follow. Install the files, inspect the
            instructions, and adapt them to your business.
          </p>
          <Link className="text-link" href="/docs/sources">
            Our sources and method <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="file-preview">
          <div>
            <FileText size={16} />
            <span>build-landing-page/</span>
          </div>
          <code>
            ├── SKILL.md
            <br />
            └── references/
            <br />
            &nbsp;&nbsp;&nbsp; └── sources.md
          </code>
          <p>Plain files. Yours to edit.</p>
        </div>
      </section>
      <footer className="page-footer">
        <span>
          Independent project. Not affiliated with Alex Hormozi or
          Acquisition.com.
        </span>
        <a href={repository}>
          View source <ArrowUpRight size={14} />
        </a>
      </footer>
    </div>
  );
}
