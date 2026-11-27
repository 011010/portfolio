'use client';

import { motion } from 'framer-motion';
import { stackGroups } from '@/data/projects';

const FOCUS_AREAS = [
  {
    title: 'Sistemas de negocio',
    description:
      'Evaluación de desempeño, inventario, facturación. Software con reglas, estados y auditoría.',
  },
  {
    title: 'PWAs',
    description:
      'Apps instalables y offline-first, pensadas para usarse en campo donde la red no alcanza.',
  },
  {
    title: 'Herramientas propias',
    description:
      'Cuando el problema no existe en ninguna librería, lo escribo: portzilla está en crates.io y npm.',
  },
];

export default function About() {
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
          <p className="font-mono text-signal text-sm mb-3">{'// sobre-mi'}</p>
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
              Construyo los sistemas que una empresa usa todos los días: quién trabajó,
              qué entró al almacén, cuánto se facturó. Rara vez lucen en un portafolio,
              pero son los que se caen cuando el flujo de estados tiene un hueco.
            </p>
            <p className="text-muted leading-relaxed">
              Trabajo sobre todo en Laravel y PHP en el backend, y React con TypeScript
              en el frontend. También escribo herramientas en Rust cuando el problema no
              tiene librería: portzilla coordina puertos y procesos entre sesiones
              paralelas de agentes de IA, y está publicado en crates.io y npm.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-line">
              {[
                { value: '17', label: 'repos públicos' },
                { value: '7', label: 'años en GitHub' },
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
            <p className="font-mono text-xs text-muted mb-5">stack — por capa</p>

            <div className="space-y-5">
              {stackGroups.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-signal/70 mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
