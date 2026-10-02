import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hari-om-pandey.vercel.app"),
  title: {
    default: "Hari Om Pandey — Front-End Developer | AI & Automation Engineer",
    template: "%s — Hari Om Pandey",
  },
  description:
    "Portfolio of Hari Om Pandey: frontend engineering, Generative AI, Copilot Agents and Microsoft Power Platform automation.",
  openGraph: {
    title: "Hari Om Pandey — Front-End Developer | AI & Automation Engineer",
    description:
      "Frontend engineering, Generative AI and business-process automation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Om Pandey — Front-End Developer | AI & Automation Engineer",
    description:
      "Frontend engineering, Generative AI and business-process automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="site-shell noise">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
