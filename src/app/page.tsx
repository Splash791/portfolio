import { HeroSection } from 'components/landing/me';
import { Header } from '../components/landing/header';
import { Button } from '../components/ui/button';
import { AboutSection } from 'components/landing/about';
import { ExperienceSection } from 'components/landing/experience';
import { PortfolioSection } from 'components/landing/portfolio';
import { SkillsSection } from 'components/landing/skills';


export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <ExperienceSection />
      <SkillsSection />
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
        {/* <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="max-w-lg text-center text-gray-600">
          Hi, I’m Tyler! This is my portfolio built with Next.js, TypeScript, and Tailwind CSS.
        </p>
        <Button>Contact Me</Button> */}
      </main>
    </>
  );
}
