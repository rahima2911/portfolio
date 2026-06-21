import useReveal from "../hooks/useReveal";

export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
