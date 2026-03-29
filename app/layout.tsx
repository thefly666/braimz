import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Braimz – We Think Ahead",
  description:
    "Braimz is an AI oversight and software development firm. We build our own products, direct emerging technology, and help businesses navigate what's coming before it arrives.",
  keywords: ["AI oversight", "AI software development", "artificial intelligence", "emerging technology", "AI strategy", "software development"],
  openGraph: {
    title: "Braimz – We Think Ahead",
    description:
      "AI oversight and software development firm. We build, we oversee, we deploy.",
    url: "https://braimz.com",
    siteName: "Braimz",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
    >
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
