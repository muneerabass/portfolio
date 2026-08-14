import { personal, projects, skillGroups } from "@/lib/data";

export const siteUrl = "https://muneerabass.dev";

export const nameAliases = [
  personal.name,
  "Muneer Abass",
  "Muneer Abbas",
  "Muneerabbas",
  "Muneerabass",
  "Muneer Abas",
  "Muneer Abbaas",
  "Muneer Abbass",
  "Muneer Abbas PICT",
  "Muneer Abass PICT",
];

export const seoTitle = `${personal.name} | Full-Stack & Mobile Developer`;

export const seoDescription =
  "Portfolio of Muneer Abbas, also searched as Muneer Abass: Full-Stack and Mobile Software Engineer building React Native, SwiftUI, Next.js, Go, Node.js, and iOS products.";

export const seoKeywords = [
  ...nameAliases,
  `${personal.name} portfolio`,
  "Muneer Abass portfolio",
  "Muneer Abbas developer",
  "Muneer Abass developer",
  "Muneer Abbas software engineer",
  "Muneer Abass software engineer",
  "Muneer Abbas full stack developer",
  "Muneer Abass full stack developer",
  "Muneer Abbas mobile developer",
  "Muneer Abass mobile developer",
  "Full-Stack Developer",
  "Mobile Developer",
  "Software Engineer",
  "React Native Developer",
  "SwiftUI Developer",
  "iOS Developer",
  "Next.js Developer",
  "Go Developer",
  "Node.js Developer",
  "Pune Developer",
  "PICT Developer",
  "Pune Institute of Computer Technology",
];

export const absoluteUrl = (pathOrUrl: string) => {
  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, siteUrl).toString();
};

export const projectImages = Array.from(
  new Set(
    projects
      .flatMap((project) => [project.thumbnail, ...project.screenshots])
      .filter((image): image is string => Boolean(image))
      .map(absoluteUrl),
  ),
);

export const allSkills = skillGroups.flatMap((group) => group.items);
