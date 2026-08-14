import { education } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border pt-8 text-center">
      <p className="text-sm text-muted">
        {education.degree} · {education.institution} · CGPA {education.cgpa}
      </p>
    </footer>
  );
}
