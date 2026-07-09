'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const EMAIL = 'husari09.oro@gmail.com';
const GITHUB = 'https://github.com/011010';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API no disponible; el enlace mailto de abajo sigue funcionando.
    }
  };

  return (
    <section id="contacto" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-signal text-sm mb-3">// contacto</p>
          <h2 className="text-4xl md:text-5xl font-bold text-fg mb-4">Hablemos</h2>
          <p className="text-muted text-lg mb-12 max-w-xl mx-auto">
            ¿Tienes un proyecto en mente? Escríbeme directamente, sin formularios de por medio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="panel p-8 md:p-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="w-full sm:w-auto flex-1 px-6 py-4 rounded-lg bg-signal text-ink font-mono font-medium text-sm hover:brightness-110 transition-all"
          >
            {EMAIL}
          </a>
          <button
            onClick={handleCopy}
            className="w-full sm:w-auto px-5 py-4 rounded-lg border border-line text-fg/80 font-mono text-sm hover:border-signal/50 hover:text-fg transition-colors"
          >
            {copied ? 'copiado ✓' : 'copiar'}
          </button>
        </motion.div>

        <motion.a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 mt-8 font-mono text-sm text-muted hover:text-fg transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          github.com/011010
        </motion.a>
      </div>
    </section>
  );
}
