import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({ title, description, tags, image, onClick }: ProjectCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group relative h-[400px] overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] bg-white shadow-lg"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-end">
        <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-2">
              {tags.map((tag, i) => (
                <span 
                  key={i}
                  className="inline-flex items-center rounded-full bg-emerald-500/10 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-emerald-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ArrowUpRight className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          
          <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}