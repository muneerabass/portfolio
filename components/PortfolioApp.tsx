import TopNav from "@/components/TopNav";
import ProfileCard from "@/components/ProfileCard";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import StackSection from "@/components/sections/StackSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function PortfolioApp() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <TopNav />

      <div className="mx-auto max-w-[1180px] px-6 pb-16 pt-24 sm:px-8 lg:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12">
          {/* Profile card */}
          <aside className="w-full lg:w-[340px] lg:shrink-0">
            <ProfileCard />
          </aside>

          {/* Content */}
          <main className="min-w-0 flex-1 space-y-24 pt-2 sm:space-y-28">
            <Hero />
            <ProjectsSection />
            <ExperienceSection />
            <StackSection />
            <AchievementsSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  );
}
