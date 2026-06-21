import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { projects } from "../data/portfolioData";

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg border border-line bg-bg hover:border-accent/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 p-6 flex flex-col">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-semibold text-fg">
          {project.name}
        </h3>
        <span className="font-mono text-[11px] text-fg-muted whitespace-nowrap mt-1">
          {project.period}
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] px-2 py-1 rounded-md bg-accent-soft text-accent"
          >
            {s}
          </span>
        ))}
      </div>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-5 flex items-center gap-1.5 text-xs text-fg/70 hover:text-accent transition-colors self-start"
        aria-expanded={open}
      >
        {open ? "Hide details" : "View details"}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <ul className="overflow-hidden space-y-2 border-t border-line">
          {project.points.map((pt, i) => (
            <li key={i} className="text-fg/75 text-sm leading-relaxed flex gap-2.5 pt-3 first:pt-3">
              <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-10 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built"
            lead="A mix of full-stack web apps and applied ML projects — from idea to working product."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <Reveal key={p.name} delay={(idx % 3) * 100}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
