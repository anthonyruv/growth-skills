"use client";
import { useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { Button } from "@growth-skills/ui/components/button";
import { installCommand } from "@/lib/catalog";
export function InstallCommand({
  skill,
  compact = false,
}: {
  skill?: string;
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const command = skill ? `${installCommand} --skill ${skill}` : installCommand;
  async function copy() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setError(false);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setError(true);
    }
  }
  return (
    <div className={`install-block ${compact ? "compact" : ""}`}>
      <div className="install-label">
        <Terminal size={15} />
        <span>{skill ? "Install this skill" : "Install the collection"}</span>
        <span className="install-tool">skills.sh</span>
      </div>
      <div className="install-code">
        <span aria-hidden="true" className="terminal-dollar">
          $
        </span>
        <code>{command}</code>
        <Button
          variant="ghost"
          size="icon"
          className="copy-button"
          aria-label="Copy install command"
          onClick={copy}
        >
          {copied ? <Check size={17} /> : <Copy size={17} />}
        </Button>
      </div>
      <span className="sr-only" aria-live="polite">
        {copied
          ? "Install command copied"
          : error
            ? "Copy failed. Select and copy the command above."
            : ""}
      </span>
      {error && (
        <p className="copy-error">Select and copy the command above.</p>
      )}
    </div>
  );
}
