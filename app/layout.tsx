import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { personal } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muneer Abass",
  description:
    "React Native Developer specializing in building scalable mobile applications and modern digital experiences.",
  keywords: [
    "Muneer Abass",
    "Muneer Abbas",
    "React Native Developer",
    "Mobile App Developer",
    "Software Engineer",
    "Pune",
    "PICT",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: personal.name, url: personal.github }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muneerabass.dev",
    title: "Muneer Abass",
    description:
      "Mobile Developer specializing in building scalable mobile applications and modern digital experiences.",
    siteName: personal.name,
    images: [
      {
        url: personal.profileImage,
        width: 1200,
        height: 630,
        alt: personal.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muneer Abass",
    description:
      "Mobile Developer specializing in building scalable mobile applications and modern digital experiences.",
    images: [personal.profileImage],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: "Mobile App Developer",
    email: personal.email,
    url: "https://muneerabass.dev",
    image: personal.profileImage,
    sameAs: [personal.github, personal.linkedin],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Pune Institute of Computer Technology",
    },
  };

  return (
    <html lang="en" className={`${geistSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-white">{children}</body>
    </html>
  );
}
