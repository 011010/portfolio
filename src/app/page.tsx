'use client';

import { motion } from 'framer-motion';
import Background from '@/components/Background';
import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import About from '@/components/About';
import Contact from '@/components/Contact';
import { projects } from '@/data/projects';

const TERMINAL_LINES = [
  { prompt: '$ whoami', output: 'Husari Orozco' },
  { prompt: '$ role', output: 'Software Engineer' },
  {
    prompt: '$ status',
    output: 'construyendo PWAs y sistemas de automatización en producción',
  },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen relative">
      <Background />
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-14">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="panel overflow-hidden"
          >
            <div className="flex items-center gap-1.5 px-5 py-3 border-b border-line">
              <span className="w-2.5 h-2.5 rounded-full bg-line" />
              <span className="w-2.5 h-2.5 rounded-full bg-line" />
              <span className="w-2.5 h-2.5 rounded-full bg-signal/60" />
              <span className="ml-3 font-mono text-xs text-muted">~/husari-orozco</span>
            </div>

            <div className="px-6 py-10 md:px-10 md:py-14 font-mono">
              {TERMINAL_LINES.map((line, index) => (
                <motion.div
                  key={line.prompt}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.35, duration: 0.4 }}
                  className="mb-2"
                >
                  <p className="text-muted text-sm">{line.prompt}</p>
                  <p className="text-2xl md:text-4xl font-medium text-fg mt-1">
                    {line.output}
                    {index === TERMINAL_LINES.length - 1 && (
                      <span className="inline-block w-3 h-7 md:h-9 ml-1 bg-signal align-middle animate-blink" />
                    )}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#proyectos"
              className="px-6 py-3 rounded-lg bg-signal text-ink font-mono text-sm font-medium hover:brightness-110 transition-all"
            >
              ver proyectos
            </a>
            <a
              href="#contacto"
              className="px-6 py-3 rounded-lg border border-line text-fg/80 font-mono text-sm hover:border-signal/50 hover:text-fg transition-colors"
            >
              contacto
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="proyectos" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <p className="font-mono text-signal text-sm mb-3">// proyectos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-fg">Proyectos destacados</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {otherProjects.length > 0 && (
            <>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-mono text-sm text-muted mb-8"
              >
                // más proyectos
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index + featuredProjects.length}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <About />
      <Contact />

      <footer className="relative py-10 px-6 border-t border-line">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <p>© 2026 Husari Orozco</p>
          <p>construido con Next.js + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
