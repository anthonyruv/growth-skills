import type { Metadata } from "next";
import { Inter, Geist_Mono, Instrument_Serif } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import { DocsShell } from "@/components/docs-shell";
const sans = Inter({ variable: "--font-geist-sans", subsets: ["latin"] });
const editorial = Instrument_Serif({
  variable: "--font-editorial",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const mono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    default: "Growth Skills — Business know-how for your AI agent",
    template: "%s · Growth Skills",
  },
  description:
    "Install practical, source-backed business skills for offers, landing pages, and conversion experiments into Claude Code, Codex, Cursor, and more.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${sans.variable} ${mono.variable} ${editorial.variable}`}
      >
        <Providers>
          <DocsShell>{children}</DocsShell>
        </Providers>
      </body>
    </html>
  );
}
