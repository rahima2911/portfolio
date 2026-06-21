import { Mail, Phone, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import GithubIcon from "./GithubIcon";
import { profile } from "../data/portfolioData";

const CONTACTS = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, "")}` },
  { icon: GithubIcon, label: "github.com/rahima2911", href: profile.github },
  { icon: MapPin, label: profile.location, href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-10 border-t border-line bg-bg-dim/60">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-start">
        <Reveal>
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-fg">
            Let's build something together.
          </h2>
          <p className="mt-4 text-fg-muted leading-relaxed max-w-md">
            I'm looking for the right next step — internship or full-time —
            somewhere I can keep building and learning. Reach out any time.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="space-y-4">
            {CONTACTS.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 text-sm text-fg/80 hover:text-accent transition-colors w-fit"
                  >
                    <Icon size={16} className="text-accent" />
                    {label}
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-sm text-fg/80">
                    <Icon size={16} className="text-accent" />
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
