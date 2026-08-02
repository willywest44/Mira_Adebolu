import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ProjectModal } from './components/ProjectModal';
import { DesignProcess } from './components/DesignProcess';
import { ToolsSkills } from './components/ToolsSkills';
import { BrandKitPlayground } from './components/BrandKitPlayground';
import { Testimonials } from './components/Testimonials';
import { ClientLogos } from './components/ClientLogos';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectPlannerModal } from './components/ProjectPlannerModal';
import { Project } from './types';
import { PROJECTS } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [initialContactService, setInitialContactService] = useState('Brand Identity');

  const handleOpenPlanner = () => {
    setIsPlannerOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setInitialContactService(serviceTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-amber-500 selection:text-neutral-950 antialiased">
      
      {/* Sticky Top Navbar */}
      <Navbar onOpenPlanner={handleOpenPlanner} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* 1. HERO SECTION */}
        <Hero onOpenPlanner={handleOpenPlanner} />

        {/* 2. ABOUT ME */}
        <About />

        {/* 3. SERVICES */}
        <Services onSelectService={handleSelectService} />

        {/* 4. PORTFOLIO / SELECTED WORK */}
        <Portfolio onSelectProject={handleSelectProject} />

        {/* 5. DESIGN PROCESS */}
        <DesignProcess />

        {/* 6. TOOLS & SKILLS */}
        <ToolsSkills />

        {/* INTERACTIVE BRAND PLAYGROUND */}
        <BrandKitPlayground />

        {/* 7. TESTIMONIALS */}
        <Testimonials />

        {/* 8. CLIENTS / BRANDS */}
        <ClientLogos />

        {/* 9. CALL TO ACTION */}
        <CtaSection onOpenPlanner={handleOpenPlanner} />

        {/* 10. CONTACT SECTION */}
        <Contact initialService={initialContactService} />
      </main>

      {/* 11. FOOTER */}
      <Footer />

      {/* PROJECT CASE STUDY MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNextProject={handleNextProject}
        onPrevProject={handlePrevProject}
      />

      {/* QUICK PROJECT PLANNER MODAL */}
      <ProjectPlannerModal
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        preselectedService={initialContactService}
      />

    </div>
  );
}
