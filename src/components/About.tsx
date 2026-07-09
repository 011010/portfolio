'use client';

import { motion } from 'framer-motion';
import { languageStats } from '@/data/projects';

const FOCUS_AREAS = [
  {
    title: 'PWAs',
    description: 'Apps instalables, offline-first, pensadas para usarse todos los días.',
  },
  {
    title: 'Automatización',
    description: 'Procesos internos que dejan de hacerse a mano — para CFE, logística y más.',
  },
  {
    title: 'Sistemas internos',
    description: 'Gestión documental, control de activos, herramientas hechas a la medida.',
  },
];

export default function About() {
  const totalRepos = languageStats.reduce((sum, l) => sum + l.count, 0);

  return (
    <section id="sobre-mi" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-mono text-signal text-sm mb-3">// sobre-mi</p>
          <h2 className="text-4xl md:text-5xl font-bold text-fg">Cómo trabajo</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 panel p-8"
          >
            <p className="text-fg/90 text-lg leading-relaxed mb-4">
              Construyo software para problemas reales: control financiero personal,
              gestión documental, automatización de procesos para instituciones como la CFE.
            </p>
            <p className="text-muted leading-relaxed">
              La mayoría de mi trabajo vive en PWAs y sistemas internos — herramientas
              pensadas para producción, no para la demo. Trabajo principalmente en
              TypeScript y Python, de extremo a extremo: desde la interfaz hasta el
              proceso que corre en segundo plano.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-line">
              {[
                { value: '12', label: 'repos públicos' },
                { value: '7+', label: 'años en GitHub' },
                { value: '6', label: 'lenguajes' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono text-3xl font-medium text-signal tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-muted text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 panel p-8"
          >
            <p className="font-mono text-xs text-muted mb-4">stack — por repos en GitHub</p>

            <div className="h-2.5 rounded-full overflow-hidden flex mb-5 bg-white/5">
              {languageStats.map((lang) => (
                <motion.div
                  key={lang.name}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(lang.count / totalRepos) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  style={{ backgroundColor: lang.color }}
                />
              ))}
            </div>

            <ul className="space-y-2.5">
              {languageStats.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-fg/80">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    {lang.name}
                  </span>
                  <span className="font-mono text-muted tabular-nums">{lang.count}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOCUS_AREAS.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="panel p-6"
            >
              <h3 className="font-mono text-signal text-sm mb-2">{area.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
