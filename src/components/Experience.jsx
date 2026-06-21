import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-10 border-t border-line bg-bg-dim/60">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            lead="Two internships where I shipped real, production-facing features."
          />
        </Reveal>

        <div className="space-y-10">
          {experience.map((job, idx) => (
            <Reveal key={job.company} delay={idx * 100}>
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 pb-10 border-b border-line last:border-b-0 last:pb-0">
                <div className="md:col-span-3">
                  <p className="font-mono text-xs text-accent mb-1">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {job.company}
                  </h3>
                  <p className="text-fg-muted text-sm mt-1">{job.role}</p>
                  <p className="font-mono text-xs text-fg-muted/70 mt-2">{job.period}</p>
                  <p className="font-mono text-xs text-fg-muted/70">{job.location}</p>
                </div>
                <ul className="md:col-span-9 space-y-2.5">
                  {job.points.map((pt, i) => (
                    <li key={i} className="text-fg/80 text-[15px] leading-relaxed flex gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
