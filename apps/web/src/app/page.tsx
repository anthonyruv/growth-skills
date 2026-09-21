import Link from "next/link";
import { ArrowUpRight, ArrowRight, Command, Check } from "lucide-react";
import { InstallCommand } from "@/components/install-command";
import { PaperArt } from "@/components/paper-art";
import { skills, repository } from "@/lib/catalog";
export default function Home() {
  return (
    <div className="overview">
      <div className="edition-line">
        <span>
          <i /> A FIELD GUIDE FOR YOUR AI AGENT
        </span>
        <span>INDEPENDENT & OPEN SOURCE</span>
      </div>
      <section className="cover">
        <div className="cover-copy">
          <p className="eyebrow">KNOWLEDGE IS ONLY THE BEGINNING.</p>
          <h1>
            Put good
            <br />
            thinking
            <br />
            <em>to work.</em>
          </h1>
          <p className="intro">
            Business lessons, turned into practical AI skills. Build a sharper
            offer. Write a better page. Make your next move count.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="#library">
              Explore the skills <ArrowUpRight size={19} />
            </Link>
            <Link className="quiet-link" href="/docs/introduction">
              Read the field guide <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <PaperArt />
      </section>
      <div className="install-band">
        <div className="install-band-label">
          <Command size={19} />
          <div>
            Good to go.<span>One command. Your favorite agent.</span>
          </div>
        </div>
        <InstallCommand />
      </div>
      <div className="compatibility">
        <span>AT HOME IN</span>
        <strong>Claude Code</strong>
        <span>·</span>
        <strong>Codex</strong>
        <span>·</span>
        <strong>Cursor</strong>
        <span>·</span>
        <strong>Copilot</strong>
        <span className="compatibility-note">Plain files. Yours to keep.</span>
      </div>
      <section id="library" className="library-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE FIRST COLLECTION / 001—003</p>
            <h2>
              Less blank page.
              <br />
              <em>More forward motion.</em>
            </h2>
          </div>
          <p>
            Three connected skills.
            <br />
            One useful place to start.
          </p>
        </div>
        <div className="skill-index">
          {skills.map((skill, i) => (
            <Link
              className="skill-row"
              href={`/skills/${skill.slug}`}
              key={skill.slug}
            >
              <span className="skill-number">0{i + 1}</span>
              <div className="skill-row-title">
                <span className="card-category">{skill.category}</span>
                <h3>{skill.title}</h3>
              </div>
              <p>{skill.description}</p>
              <span className="skill-row-arrow">
                <ArrowUpRight size={22} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="source-feature">
        <div className="source-mark" aria-hidden="true">
          ✳
        </div>
        <div>
          <span className="eyebrow">THE THINKING HAS A PAPER TRAIL.</span>
          <h2>
            Built on lessons.
            <br />
            <em>Made for action.</em>
          </h2>
          <p>
            Original workflows informed by Alex Hormozi’s public teaching. Every
            skill comes with source notes, a clear job, and something useful to
            take away.
          </p>
          <Link className="text-link" href="/docs/sources">
            Follow the sources <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="source-facts">
          <div>
            <strong>12,112</strong>
            <span>public videos cataloged</span>
          </div>
          <div>
            <strong>03</strong>
            <span>
              video transcripts reviewed
              <br />+ official offer resources
            </span>
          </div>
          <small>
            A growing collection.
            <br />
            Review coverage is always explicit.
          </small>
        </div>
      </section>
      <section className="ownership-note">
        <div>
          <Check size={18} />
          <span>Readable instructions</span>
        </div>
        <div>
          <Check size={18} />
          <span>Traceable sources</span>
        </div>
        <div>
          <Check size={18} />
          <span>No account required</span>
        </div>
        <div>
          <Check size={18} />
          <span>Open to your edits</span>
        </div>
      </section>
      <footer className="page-footer">
        <div className="footer-wordmark">
          Growth Skills<span>GOOD THINKING. PUT TO WORK.</span>
        </div>
        <p>
          An independent project.
          <br />
          Not affiliated with Alex Hormozi or Acquisition.com.
        </p>
        <a href={repository}>
          Made in the open <ArrowUpRight size={15} />
        </a>
      </footer>
    </div>
  );
}
