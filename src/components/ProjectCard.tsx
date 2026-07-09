'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F1E05A',
  Python: '#3572A5',
  PHP: '#8892BF',
  Vue: '#41B883',
  HTML: '#E34C26',
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const dotColor = LANGUAGE_COLORS[project.language] ?? '#8D8FA3';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: (index % 6) * 0.06, duration: 0.4 }}
      className="panel panel-hover flex flex-col h-full p-6"
    >
      <div className="flex items-center justify-between mb-4 font-mono text-xs text-muted">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: dotColor }} />
          011010/{project.title}
        </span>
        <span className="tabular-nums">{project.year}</span>
      </div>

      <h3 className="font-mono text-lg font-medium text-fg mb-2">{project.title}</h3>
      <p className="text-muted text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-line flex items-center justify-between">
        {project.private ? (
          <span className="font-mono text-xs text-muted flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M4 6V4a4 4 0 1 1 8 0v2h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1Zm2 0h4V4a2 2 0 1 0-4 0v2Z" />
            </svg>
            repositorio privado
          </span>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-signal hover:underline underline-offset-4"
          >
            ver en GitHub →
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted hover:text-fg transition-colors"
          >
            demo →
          </a>
        )}
      </div>
    </motion.div>
  );
}
