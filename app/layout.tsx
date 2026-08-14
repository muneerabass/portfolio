import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { education, personal, projects } from "@/lib/data";
import {
  absoluteUrl,
  allSkills,
  nameAliases,
  projectImages,
  seoDescription,
  seoKeywords,
  seoTitle,
  siteUrl,
} from "@/lib/seo";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: `${personal.name} Portfolio`,
  title: {
    default: seoTitle,
    template: `%s | ${personal.name}`,
  },
  description: seoDescription,
  keywords: seoKeywords,
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  publisher: personal.name,
  category: "portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: seoTitle,
    description: seoDescription,
    siteName: personal.name,
    images: [
      {
        url: absoluteUrl(personal.profileImage),
        width: 1200,
        height: 630,
        alt: `${personal.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: [absoluteUrl(personal.profileImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      me: [personal.github, personal.linkedin],
    },
  },
  other: {
    "profile:first_name": "Muneer",
    "profile:last_name": "Abbas",
    "profile:username": "muneerabass",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: siteUrl,
      name: seoTitle,
      description: seoDescription,
      image: [absoluteUrl(personal.profileImage), ...projectImages],
      inLanguage: "en",
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: personal.name,
      alternateName: nameAliases,
      jobTitle: personal.title,
      description: personal.summary,
      email: personal.email,
      telephone: personal.phone,
      url: siteUrl,
      image: absoluteUrl(personal.profileImage),
      sameAs: [personal.github, personal.linkedin],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressCountry: "IN",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: education.institution,
      },
      knowsAbout: allSkills,
      hasOccupation: {
        "@type": "Occupation",
        name: personal.title,
        skills: allSkills.join(", "),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: `${personal.name} Portfolio`,
      alternateName: nameAliases,
      description: seoDescription,
      inLanguage: "en",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    ...projects.map((project) => ({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${siteUrl}/#${project.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")}`,
      name: project.name,
      description: project.description,
      url: project.href,
      image: project.thumbnail ? absoluteUrl(project.thumbnail) : undefined,
      creator: {
        "@id": `${siteUrl}/#person`,
      },
      keywords: [project.subtitle, project.type, ...allSkills].join(", "),
    })),
  ];

  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-background text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
