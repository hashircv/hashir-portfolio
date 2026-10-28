import { About } from '../components/sections/About';
import { Certifications } from '../components/sections/Certifications';
import { Contact } from '../components/sections/Contact';
import { Education } from '../components/sections/Education';
import { Experience } from '../components/sections/Experience';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { Skills } from '../components/sections/Skills';
import { sectionConfig } from '../data/config';

export function HomePage() {
  return (
    <>
      <Hero />
      {sectionConfig.about && <About />}
      {sectionConfig.skills && <Skills />}
      {sectionConfig.experience && <Experience />}
      {sectionConfig.projects && <Projects />}
      {sectionConfig.education && <Education />}
      {sectionConfig.certifications && <Certifications />}
      {sectionConfig.contact && <Contact />}
    </>
  );
}
