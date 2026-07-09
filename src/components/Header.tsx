'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'proyectos', href: '#proyectos' },
  { label: 'sobre-mi', href: '#sobre-mi' },
  { label: 'contacto', href: '#contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-line' : 'border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between font-mono text-sm">
        <div className="flex items-center gap-3">
          <span className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-line" />
            <span className="w-2.5 h-2.5 rounded-full bg-line" />
            <span className="w-2.5 h-2.5 rounded-full bg-signal/60" />
          </span>
          <span className="text-fg font-medium">011010</span>
          <span className="text-muted hidden sm:inline">— husari@portfolio</span>
        </div>

        <nav className="flex gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group px-3 py-1.5 rounded-md text-muted hover:text-fg hover:bg-white/5 transition-colors"
            >
              <span className="text-signal/70 group-hover:text-signal">~/</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
