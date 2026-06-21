import { useEffect, useState } from "react";
import { Menu, X, MessageSquareText, Sun, Moon } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ onOpenChat, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-base font-semibold text-fg">
          Rahima<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-fg-muted hover:text-fg transition-colors"
            >
              {l.label}
            </a>
          ))}

          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-fg-muted hover:text-accent hover:border-accent transition-colors"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={onOpenChat}
            className="flex items-center gap-1.5 rounded-full bg-accent text-accent-fg px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <MessageSquareText size={14} />
            Ask the assistant
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-fg-muted"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            className="text-fg"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-bg px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-fg-muted hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onOpenChat();
            }}
            className="flex items-center justify-center gap-1.5 rounded-full bg-accent text-accent-fg px-4 py-2.5 text-sm font-medium"
          >
            <MessageSquareText size={14} />
            Ask the assistant
          </button>
        </div>
      )}
    </header>
  );
}
