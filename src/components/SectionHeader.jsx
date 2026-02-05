export default function SectionHeader({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : ""}`}>
      {eyebrow ? (
        <span className="text-xs uppercase tracking-[0.4em] text-muted">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl md:text-4xl text-ink">{title}</h2>
      {description ? (
        <p className="text-muted max-w-2xl leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
