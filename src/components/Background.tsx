'use client';

import { useEffect, useRef } from 'react';

// Lluvia binaria sutil — un guiño al handle 011010, no un efecto "Matrix".
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const fontSize = 15;
    let columns = 0;
    let drops: number[] = [];

    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / (fontSize * 2.2));
      drops = new Array(columns).fill(0).map(() => Math.random() * -100);
    };
    setup();
    window.addEventListener('resize', setup);

    if (reduceMotion) {
      return () => window.removeEventListener('resize', setup);
    }

    let animationId: number;
    let frame = 0;

    const draw = () => {
      frame++;
      if (frame % 2 === 0) {
        ctx.fillStyle = 'rgba(11, 12, 16, 0.15)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px var(--font-mono), monospace`;

        for (let i = 0; i < drops.length; i++) {
          const char = Math.random() > 0.5 ? '1' : '0';
          const x = i * fontSize * 2.2;
          const y = drops[i] * fontSize;

          ctx.fillStyle = 'rgba(79, 227, 180, 0.5)';
          ctx.fillText(char, x, y);

          if (y > canvas.height && Math.random() > 0.98) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setup);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-ink">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/60 to-ink pointer-events-none" />
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
    </div>
  );
}
