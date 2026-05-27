import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/ProjectGallery";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: String(p.id) }));
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) notFound();

  return (
    <div className="min-h-screen pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 group"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Back to Projects
        </Link>

        {/* Image gallery slider */}
        <ProjectGallery images={project.images} title={project.title} />

        {/* Project info */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono text-primary uppercase tracking-wider">
            {project.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-black text-foreground mt-2 mb-4">
            {project.title}
          </h1>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {project.longDescription}
          </p>

          {/* Tech stack */}
          <div className="mb-10">
            <h2 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-widest">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* What I Built */}
          <div className="mb-10">
            <h2 className="text-lg font-bold text-foreground mb-4">
              What I Built
            </h2>
            <ul className="space-y-3">
              {project.tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 pt-6 border-t border-border">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:opacity-90 transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Preview
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-border text-foreground rounded-lg text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
