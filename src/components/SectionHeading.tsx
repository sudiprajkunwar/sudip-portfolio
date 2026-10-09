interface SectionHeadingProps {
  number: string;
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ number, label, title, description }: SectionHeadingProps) => (
  <div className="section-heading">
    <p className="eyebrow"><span className="text-muted-foreground">{number} /</span> {label}</p>
    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <h2 className="section-title">{title}<span className="text-muted-foreground">.</span></h2>
      {description && <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>}
    </div>
  </div>
);

export default SectionHeading;