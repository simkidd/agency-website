import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import LoadingScreen from "./loading";
import Providers from "@/providers/Providers";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vanguard Digital Solutions",
    template: "%s | VDS — Vanguard Digital Solutions",
    
  },
  description:
    "VDS (Vanguard Digital Solutions) is a modern digital agency specializing in web development, UI/UX design, AI solutions, and scalable cloud systems. We build high-performance digital products that drive real business growth.",
  keywords: [
    "VDS",
    "Vanguard Digital Solutions",
    "web development agency",
    "UI UX design agency",
    "AI solutions",
    "Next.js agency",
    "software development company",
    "Nigeria tech agency",
    "cloud engineering",
    "product design studio",
  ],
  authors: [{ name: "VDS Team" }],
  creator: "Vanguard Digital Solutions",
  metadataBase: new URL("https://vds.com"), // replace with real domain later
  openGraph: {
    title: "VDS — Vanguard Digital Solutions",
    description:
      "We design and build high-performance digital products — from web apps to AI systems — for startups and enterprises.",
    url: "https://vds.com",
    siteName: "VDS",
    images: [
      {
        url: "/og-image.png", // add later in /public
        width: 1200,
        height: 630,
        alt: "Vanguard Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VDS — Vanguard Digital Solutions",
    description:
      "Modern digital agency building scalable web, AI, and cloud solutions.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="var(--accent)" showSpinner={false} />
        <Providers>
          <Suspense fallback={<LoadingScreen />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
