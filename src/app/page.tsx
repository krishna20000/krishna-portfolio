import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import CareerObjectiveSection from '@/components/CareerObjectiveSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="space-y-4">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CareerObjectiveSection />
      <ContactSection />
    </div>
  );
}
