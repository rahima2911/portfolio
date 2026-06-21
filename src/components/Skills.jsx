import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-10 border-t border-line bg-bg-dim/60">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What I work with"
            lead="From building responsive interfaces to training and deploying ML models."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <Reveal key={category} delay={(idx % 3) * 80}>
              <p className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-fg/80 bg-bg border border-line rounded-md px-3 py-1.5 hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
