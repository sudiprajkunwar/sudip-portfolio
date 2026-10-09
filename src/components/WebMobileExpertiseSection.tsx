import { Code2, Smartphone, Database, Network } from 'lucide-react';
import SectionHeading from './SectionHeading';
const areas = [
  { title: 'Full-stack development', icon: Code2, description: 'From purposeful interfaces to reliable APIs. End-to-end web applications built to grow.', skills: ['React', 'TypeScript', 'Node.js', 'Express', 'NestJS'] },
  { title: 'Mobile development', icon: Smartphone, description: 'Intuitive cross-platform experiences with reusable components and seamless data integration.', skills: ['React Native', 'REST APIs', 'Mobile UI'] },
  { title: 'Database design', icon: Database, description: 'Scalable data models and efficient queries that keep your application running smoothly.', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'] },
  { title: 'System architecture', icon: Network, description: 'Thoughtful architectural decisions for maintainable, efficient, and reliable software systems.', skills: ['System design', 'API design', 'Scalability', 'Performance'] },
];
const WebMobileExpertiseSection = () => (
  <section id="expertise" className="section-band bg-background">
    <div className="page-width">
      <SectionHeading number="01" label="What I do" title="Engineering, end to end" description="A practical approach to building software — from the first interface to the systems behind it." />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {areas.map(({ title, icon: Icon, description, skills }, i) => <article key={title} className="group flex flex-col rounded-md border border-border bg-card p-6 transition-colors hover:border-muted-foreground">
          <div className="mb-8 flex items-center justify-between"><Icon size={25} strokeWidth={1.5} /><span className="font-mono text-[10px] text-muted-foreground">0{i+1}</span></div>
          <h3 className="min-h-12 text-base leading-6">{title}</h3>
          <p className="mb-6 mt-3 flex-1 text-sm leading-6 text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-1.5 border-t border-border pt-5">{skills.map(skill => <span className="tech-pill" key={skill}>{skill}</span>)}</div>
        </article>)}
      </div>
    </div>
  </section>
);
export default WebMobileExpertiseSection;
