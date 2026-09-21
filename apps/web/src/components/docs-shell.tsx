"use client";
import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  BookOpen,
  ChevronRight,
  CodeXml,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@growth-skills/ui/components/button";
import { Input } from "@growth-skills/ui/components/input";
import { repository, searchablePages, skills } from "@/lib/catalog";
export function DocsShell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const results = searchablePages.filter((p) =>
    `${p.title} ${p.description} ${p.category}`
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
        searchRef.current?.blur();
      }
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, []);
  const go = () => {
    setMobileOpen(false);
    setSearchOpen(false);
    setQuery("");
  };
  const navLink = (href: string, title: string, icon?: React.ReactNode) => (
    <Link
      href={href as Route}
      className={`nav-link ${path === href ? "active" : ""}`}
      aria-current={path === href ? "page" : undefined}
      onClick={go}
    >
      {icon}
      {title}
      {path === href && <ChevronRight className="nav-chevron" size={14} />}
    </Link>
  );
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <Link href="/" className="brand" onClick={go}>
          <span className="brand-mark" aria-hidden="true">
            g<span>↗</span>
          </span>
          <span>
            Growth<span className="brand-light">Skills</span>
          </span>
        </Link>
        <div className="header-right">
          <div
            className="search-area"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget))
                setSearchOpen(false);
            }}
          >
            <Search size={16} />
            <Input
              ref={searchRef}
              aria-label="Search documentation"
              placeholder="Search docs…"
              value={query}
              onFocus={() => setSearchOpen(true)}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearchOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  e.currentTarget.parentElement
                    ?.querySelector<HTMLAnchorElement>(".search-results a")
                    ?.focus();
                }
              }}
            />
            <kbd>⌘ K</kbd>
            {searchOpen && (
              <div className="search-results" aria-label="Search results">
                <p>{query ? `${results.length} results` : "Jump to a page"}</p>
                {results.length ? (
                  results.map((result) => (
                    <Link
                      key={result.href}
                      href={result.href as Route}
                      onClick={go}
                    >
                      <span>
                        {result.title}
                        <small>{result.category}</small>
                      </span>
                      <ArrowUpRight size={14} />
                    </Link>
                  ))
                ) : (
                  <div className="empty-search">
                    No pages found. Try “landing page” or “install”.
                  </div>
                )}
              </div>
            )}
          </div>
          <a
            href={repository}
            aria-label="GitHub repository"
            className="header-icon"
          >
            <CodeXml size={20} />
          </a>
          <Button
            variant="ghost"
            size="icon"
            className="header-icon theme-button"
            aria-label="Toggle color theme"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            <Sun className="sun-icon" size={19} />
            <Moon className="moon-icon" size={19} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="mobile-menu"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            aria-controls="site-sidebar"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={21} /> : <Menu size={21} />}
          </Button>
        </div>
      </header>
      {mobileOpen && (
        <button
          className="sidebar-backdrop"
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <aside
        className={`site-sidebar ${mobileOpen ? "is-open" : ""}`}
        id="site-sidebar"
        aria-label="Documentation navigation"
      >
        <nav>
          <div className="nav-group">
            <p>START HERE</p>
            {navLink("/", "Overview", <BookOpen size={16} />)}
            {navLink("/docs/introduction", "Introduction")}
            {navLink("/docs/installation", "Installation")}
          </div>
          <div className="nav-group">
            <p>
              THE SKILLS <span>3</span>
            </p>
            {skills.map((skill) => (
              <div key={skill.slug}>
                {navLink(`/skills/${skill.slug}`, skill.title)}
              </div>
            ))}
          </div>
          <div className="nav-group">
            <p>GO DEEPER</p>
            {navLink("/docs/sources", "Sources & method")}
            {navLink("/docs/changelog", "Changelog")}
            <a className="nav-link" href={repository}>
              View on GitHub <ArrowUpRight size={13} />
            </a>
          </div>
        </nav>
        <div className="sidebar-bottom">
          <span className="sidebar-version">
            v0.1 <span>First collection</span>
          </span>
          <p>
            Good thinking.
            <br />
            Put to work.
          </p>
          <a href="https://skills.sh/docs">
            About skills.sh <ArrowUpRight size={13} />
          </a>
        </div>
      </aside>
      <main className="main-content" id="main">
        {children}
      </main>
    </>
  );
}
