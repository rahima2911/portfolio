import { profile } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="bg-bg-dim/60 text-fg-muted px-6 md:px-10 py-6 border-t border-line">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
