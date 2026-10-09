import SectionHeading from './SectionHeading';
import { experience, skillGroups } from '@/lib/portfolio';
const SkillsSection = () => (
  <section id="skills" className="section-band bg-background">
    <div className="page-width">
      <SectionHeading number="03" label="The journey" title="Skills & experience" description="Hands-on engineering, thoughtful collaboration, and a commitment to doing things well." />
      <div className="grid gap-12 lg:grid-cols-[290px_1fr] lg:gap-16">
        <aside>
          <h3 className="mb-7 text-sm">My toolkit</h3>
          <div className="space-y-6">{skillGroups.map(group => <div key={group.title}><p className="mb-3 font-mono text-[10px] uppercase text-muted-foreground">{group.title}</p><div className="flex flex-wrap gap-1.5">{group.skills.map(skill => <span key={skill} className="tech-pill">{skill}</span>)}</div></div>)}</div>
        </aside>
        <div>
          <h3 className="mb-7 text-sm">Professional experience</h3>
          {experience.map((job,i) => <article key={job.company} className="relative border-l border-border pb-12 pl-7 last:pb-0">
            <span className={`absolute -left-[4px] top-2 h-[7px] w-[7px] rounded-full ${job.current ? 'bg-foreground' : 'bg-muted-foreground'}`} />
            <div className="mb-3 flex flex-wrap items-center gap-3"><p className="font-mono text-[10px] text-muted-foreground">{job.date}</p>{job.current && <span className="tech-pill">Current</span>}</div>
            <h4 className="text-lg leading-7">{job.role}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
            <ul className="mt-5 space-y-2.5">{job.responsibilities.map(item => <li className="flex gap-3 text-sm leading-6 text-muted-foreground" key={item}><span className="text-foreground" aria-hidden="true">—</span><span>{item}</span></li>)}</ul>
            <div className="mt-5 flex flex-wrap gap-1.5">{job.stack.map(skill => <span key={skill} className="tech-pill">{skill}</span>)}</div>
          </article>)}
        </div>
      </div>
    </div>
  </section>
);
export default SkillsSection;
