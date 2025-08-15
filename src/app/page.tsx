import { HeroSection } from 'components/landing/me';
import { Header } from '../components/landing/header';
import { AboutSection } from 'components/landing/about';
import { ExperienceSection } from 'components/landing/experience';
import { PortfolioSection } from 'components/landing/portfolio';
import { SkillsSection } from 'components/landing/skills';
import { ContactSection } from 'components/landing/contact';


export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
