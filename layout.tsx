import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apexstriker.tech"),
  title: {
    default: "Apex Striker Technologies — Salesforce Solutions",
    template: "%s | Apex Striker Technologies",
  },
  description:
    "Apex Striker Technologies helps organizations simplify complex Salesforce challenges through modern applications, automation, and platform innovation.",
  keywords: [
    "Salesforce development",
    "AppExchange",
    "Salesforce automation",
    "Salesforce consulting",
    "CRM solutions",
    "Salesforce integration",
    "platform customization",
  ],
  authors: [{ name: "Apex Striker Technologies" }],
  creator: "Apex Striker Technologies",
  publisher: "Apex Striker Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apexstriker.tech",
    siteName: "Apex Striker Technologies",
    title: "Apex Striker Technologies — Salesforce Solutions",
    description:
      "Building smarter Salesforce solutions through modern applications, automation, and platform innovation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Striker Technologies",
    description:
      "Building smarter Salesforce solutions through modern applications, automation, and platform innovation.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
