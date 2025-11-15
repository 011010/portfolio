'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '@/types';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer"
    >
      <div className="glass glow-effect rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
          />

          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

          {/* Year badge */}
          <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-sm font-medium">
            {project.year}
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs uppercase tracking-wider">
            {project.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <motion.h3
            className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0)' }}
          >
            {project.title}
          </motion.h3>

          <motion.p
            className="text-white/70 mb-4"
            style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)' }}
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className="px-3 py-1 text-xs rounded-full glass border border-white/10"
                style={{
                  transform: isHovered ? 'translateZ(15px)' : 'translateZ(0)',
                  backgroundColor: `${project.color}20`,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-white/10">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-2 px-4 rounded-lg text-center font-medium bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-${project.color}/50 transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ transform: isHovered ? 'translateZ(25px)' : 'translateZ(0)' }}
              >
                Ver Demo
              </motion.a>
            )}

            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-4 rounded-lg text-center font-medium glass border border-white/20 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ transform: isHovered ? 'translateZ(25px)' : 'translateZ(0)' }}
              >
                GitHub
              </motion.a>
            )}
          </div>
        </div>

        {/* Glow effect on hover */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${x.get() * 100 + 50}% ${y.get() * 100 + 50}%, ${project.color}40, transparent 50%)`,
            }}
          />
        )}
      </div>
    </motion.div>
  );
}
