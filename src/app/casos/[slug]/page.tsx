import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Background from '@/components/Background';
import Header from '@/components/Header';
import { projects } from '@/data/projects';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.id }));
}

function getProject(slug: string) {
  return projects.find((project) => project.id === slug);
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: 'Caso de estudio — Husari Orozco' };
  }

  return { title: `${project.title} — Husari Orozco` };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="min-h-screen relative">
      <Background />
      <Header />

      <main className="relative pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#proyectos"
            className="font-mono text-xs text-signal hover:underline underline-offset-4"
          >
            ← volver a proyectos
          </Link>

          <div className="panel p-6 md:p-10 mt-6">
            <div className="flex items-center justify-between mb-4 font-mono text-xs text-muted">
              <span>011010/{project.id}</span>
              <span className="tabular-nums">{project.year}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-fg mb-6">{project.title}</h1>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="panel p-6 md:p-10 mt-6">
            <p className="font-mono text-signal text-sm mb-3">// el problema</p>
            <h2 className="text-2xl font-bold text-fg mb-4">El problema</h2>
            <p className="text-muted text-sm leading-relaxed">{caseStudy.problem}</p>
          </div>

          <div className="panel p-6 md:p-10 mt-6">
            <p className="font-mono text-signal text-sm mb-3">// la solución</p>
            <h2 className="text-2xl font-bold text-fg mb-4">La solución</h2>
            <p className="text-muted text-sm leading-relaxed">{caseStudy.solution}</p>
          </div>

          <div className="panel p-6 md:p-10 mt-6">
            <p className="font-mono text-signal text-sm mb-3">// impacto</p>
            <h2 className="text-2xl font-bold text-fg mb-4">Impacto</h2>
            <ul className="space-y-3">
              {caseStudy.impact.map((item) => (
                <li key={item} className="flex items-start gap-2 text-muted text-sm leading-relaxed">
                  <span className="text-signal mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-6 md:p-10 mt-6">
            <p className="font-mono text-signal text-sm mb-3">// features</p>
            <h2 className="text-2xl font-bold text-fg mb-4">Features</h2>
            <ul className="space-y-3">
              {caseStudy.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-muted text-sm leading-relaxed">
                  <span className="text-signal mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-6 md:p-10 mt-6">
            <p className="font-mono text-signal text-sm mb-3">// stack</p>
            <h2 className="text-2xl font-bold text-fg mb-4">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.stack.map((tech) => (
                <span key={tech} className="chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="panel p-6 md:p-10 mt-6">
            <p className="font-mono text-signal text-sm mb-3">// capturas</p>
            <h2 className="text-2xl font-bold text-fg mb-4">Capturas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="aspect-video rounded-lg border border-dashed border-line flex items-center justify-center"
                >
                  <span className="font-mono text-xs text-muted">Captura pendiente</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
