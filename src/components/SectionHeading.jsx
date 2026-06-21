export default function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-fg">
        {title}
      </h2>
      {lead && <p className="mt-4 text-fg-muted leading-relaxed">{lead}</p>}
    </div>
  );
}
