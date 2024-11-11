import React from 'react';
import { X, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    fullDescription: string;
    tags: string[];
    image: string;
    liveDemo?: string;
    github?: string;
  };
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 mb-8">{project.fullDescription}</p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{t('common.methodology')}</h3>
            <ul className="space-y-2">
              {t(`projects.${project.id}.methodology`, { returnObjects: true }).map((method: string, i: number) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span className="text-gray-600">{method}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                {t('common.liveDemo')}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <Github className="h-4 w-4" />
                {t('common.viewCode')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}