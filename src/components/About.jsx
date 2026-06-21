import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { profile, education } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-10 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="About" title="A bit about me" />
        </Reveal>

        <div className="grid md:grid-cols-5 gap-12">
          <Reveal delay={80} className="md:col-span-3">
            <p className="text-fg/80 leading-8 text-[15px]">{profile.about}</p>
          </Reveal>

          <Reveal delay={160} className="md:col-span-2">
            <p className="font-mono text-xs text-fg-muted uppercase tracking-widest mb-4 flex items-center gap-2">
              <GraduationCap size={14} className="text-accent" /> Education
            </p>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.degree} className="border-l-2 border-line pl-4">
                  <p className="text-fg font-medium text-sm">{e.degree}</p>
                  <p className="text-fg-muted text-sm">{e.school}</p>
                  <p className="font-mono text-xs text-fg-muted/70 mt-1">
                    {e.period}
                    {e.detail ? ` · ${e.detail}` : ""}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
