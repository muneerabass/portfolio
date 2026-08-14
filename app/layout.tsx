import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { personal } from "@/lib/data";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muneer Abbas- Full-Stack & Mobile Developer",
  description:
    "Full-Stack & Mobile Software Engineer building production web and mobile apps with React Native, SwiftUI, Next.js, Go and Node.js.",
  keywords: [
    "Muneer Abbas",
    "Muneer Abass",
    "Software Engineer",
    "Full-Stack Developer",
    "React Native Developer",
    "iOS Developer",
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
    title: "Muneer Abbas- Full-Stack & Mobile Developer",
    description:
      "Full-Stack & Mobile Software Engineer building production web and mobile apps.",
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
    title: "Muneer Abbas- Full-Stack & Mobile Developer",
    description:
      "Full-Stack & Mobile Software Engineer building production web and mobile apps.",
    images: [personal.profileImage],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personal.name,
    jobTitle: "Full-Stack & Mobile Developer",
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
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
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
