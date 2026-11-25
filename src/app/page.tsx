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
  { prompt: '$ cat rol', output: 'Desarrollador Full Stack' },
  {
    prompt: '$ ls stack',
    output: 'laravel  react  typescript  rust',
  },
];

const PROOF = [
  { label: 'portzilla', detail: 'crates.io · npm · MIT' },
  { label: 'AnyPS5', detail: '61k ★ upstream · 49 commits' },
  { label: '17', detail: 'repos públicos' },
];

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen relative">
      <Background />
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-24 pb-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Statement */}
            <div className="lg:col-span-7">
              <p
                className="font-mono text-signal text-sm mb-6 animate-rise"
                style={{ animationDelay: '0.05s', animationFillMode: 'both' }}
              >
                // desarrollador full stack · oaxaca, mx
              </p>

              <h1
                className="text-4xl md:text-6xl font-bold text-fg tracking-tight leading-[1.05] animate-rise"
                style={{ animationDelay: '0.15s', animationFillMode: 'both' }}
              >
                Software para la
                <br />
                operación real,
                <br />
                <span className="text-signal">no para la demo.</span>
              </h1>

              <p
                className="text-muted text-lg leading-relaxed mt-7 max-w-xl animate-rise"
                style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
              >
                Sistemas de negocio en producción: evaluación de desempeño,
                inventario, facturación. Laravel y React en el día a día;
                Rust cuando el problema no tiene librería.
              </p>

              <div
                className="flex flex-wrap gap-4 mt-10 animate-rise"
                style={{ animationDelay: '0.45s', animationFillMode: 'both' }}
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
              </div>
            </div>

            {/* Terminal — now a supporting element, not the whole screen */}
            <div
              className="lg:col-span-5 animate-rise"
              style={{ animationDelay: '0.35s', animationFillMode: 'both' }}
            >
              <div className="panel overflow-hidden">
                <div className="flex items-center gap-1.5 px-5 py-3 border-b border-line">
                  <span className="w-2.5 h-2.5 rounded-full bg-line" />
                  <span className="w-2.5 h-2.5 rounded-full bg-line" />
                  <span className="w-2.5 h-2.5 rounded-full bg-signal/60" />
                  <span className="ml-3 font-mono text-xs text-muted">~/husari-orozco</span>
                </div>

                <div className="px-5 py-6 font-mono text-sm">
                  {TERMINAL_LINES.map((line, index) => (
                    <div
                      key={line.prompt}
                      className="mb-3 last:mb-0 animate-rise"
                      style={{ animationDelay: `${0.5 + index * 0.18}s`, animationFillMode: 'both' }}
                    >
                      <p className="text-muted">{line.prompt}</p>
                      <p className="text-fg mt-0.5">
                        {line.output}
                        {index === TERMINAL_LINES.length - 1 && (
                          <span className="inline-block w-2 h-4 ml-1 bg-signal align-middle animate-blink" />
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Proof strip */}
          <div
            className="mt-16 pt-6 border-t border-line flex flex-wrap gap-x-10 gap-y-3 font-mono text-xs text-muted animate-rise"
            style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
          >
            {PROOF.map((item) => (
              <span key={item.label} className="flex items-center gap-2">
                <span className="text-fg">{item.label}</span>
                <span className="text-line">/</span>
                <span>{item.detail}</span>
              </span>
            ))}
          </div>
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
