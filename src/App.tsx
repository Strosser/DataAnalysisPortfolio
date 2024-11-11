import React, { useState } from 'react';
import { BarChart2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import LanguageSwitcher from './components/LanguageSwitcher';
import { projects } from './data/projects';
import './i18n/config';

const App = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/50 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <BarChart2 className="h-8 w-8 text-emerald-600" />
              <div className="ml-2">
                <div className="text-xl font-semibold text-gray-900">
                  {t('header.title')}
                </div>
                <div className="text-sm text-gray-600">
                  {t('header.subtitle')}
                </div>
              </div>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-gray-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Project Preview */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={t(`projects.${project.id}.title`)}
                description={t(`projects.${project.id}.description`)}
                tags={project.tags}
                image={project.image}
                index={index}
                onClick={() => setSelectedProject(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal
          project={{
            ...projects[selectedProject],
            title: t(`projects.${projects[selectedProject].id}.title`),
            description: t(`projects.${projects[selectedProject].id}.description`),
            fullDescription: t(`projects.${projects[selectedProject].id}.fullDescription`)
          }}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default App;