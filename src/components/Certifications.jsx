import { useState } from "react";
import { ImageOff } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { certifications } from "../data/portfolioData";

function CertCard({ cert }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="rounded-lg border border-line bg-bg overflow-hidden flex flex-col hover:border-accent/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
      <div className="aspect-[4/3] bg-bg-dim flex items-center justify-center overflow-hidden">
        {!failed ? (
          <img
            src={`${import.meta.env.BASE_URL}${cert.file}`}
            alt={cert.title}
            onError={() => setFailed(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-fg-muted px-4 text-center">
            <ImageOff size={20} />
            <p className="font-mono text-[11px] leading-relaxed opacity-70">
              {cert.file.split("/").pop()}
            </p>
          </div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <p className="font-mono text-[11px] text-fg-muted mb-1">{cert.period}</p>
        <h3 className="font-display text-base font-semibold text-fg leading-snug">
          {cert.title}
        </h3>
        <p className="text-sm text-accent mt-1">{cert.issuer}</p>
        <p className="text-sm text-fg/70 mt-3 leading-relaxed">{cert.detail}</p>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 md:px-10 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Certifications" title="Courses & certifications" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c, idx) => (
            <Reveal key={c.title} delay={(idx % 3) * 100}>
              <CertCard cert={c} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
