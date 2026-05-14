import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import LoadingScreen from "./loading";
import Providers from "@/providers/Providers";
import NextTopLoader from "nextjs-toploader";
import { config } from "@/utils/config";

const { SITE_NAME, SITE_DESCRIPTION, SITE_URL } = config;

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
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
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
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png", // add later in /public
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@onidev",
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
