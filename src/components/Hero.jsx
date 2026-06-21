import { useEffect, useState } from "react";
import { Download, ArrowRight } from "lucide-react";
import { profile } from "../data/portfolioData";

const STACK = [
  "React.js", "Node.js", "Express.js", "MongoDB", "Python",
  "TensorFlow", "Scikit-Learn", "Tailwind CSS", "Next.js", "PyTorch",
];

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div className={`flex gap-3 w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-line text-fg-muted whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`;
  const [resumeReady, setResumeReady] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch(resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setResumeReady(res.ok);
      })
      .catch(() => {
        if (!cancelled) setResumeReady(false);
      });
    return () => {
      cancelled = true;
    };
  }, [resumeUrl]);

  return (
    <section id="top" className="pt-20 md:pt-28 pb-20 px-6 md:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-fg text-balance">
          I build products.
          <br />
          <span className="text-accent">I'm teaching them to think.</span>
        </h1>
        <p className="mt-6 text-fg-muted text-lg leading-relaxed max-w-xl mx-auto">
          {profile.tagline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 rounded-full bg-accent text-accent-fg px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View my work <ArrowRight size={15} />
          </a>
          {resumeReady ? (
            <a
              href={resumeUrl}
              download
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={15} /> Download résumé
            </a>
          ) : (
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-fg hover:border-accent hover:text-accent transition-colors"
            >
              <Download size={15} /> Request résumé
            </a>
          )}
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto space-y-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <MarqueeRow items={STACK} />
        <MarqueeRow items={[...STACK].reverse()} reverse />
      </div>
    </section>
  );
}
