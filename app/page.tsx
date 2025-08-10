import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Navigation } from "@/components/navigation";
import { AdaptiveBackground } from "@/components/adaptive-background";
import { ThemeProvider } from "@/contexts/theme-context";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-slate-950 dark:text-white bg-white text-gray-900 relative overflow-hidden">
        {/* Adaptive Background */}
        <AdaptiveBackground />

        <Navigation />

        <main className="relative z-10">
          <HeroSection />
          <ProjectsSection />
          <TechStackSection />
          <AboutSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}
