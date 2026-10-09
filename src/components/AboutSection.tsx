import { GraduationCap, MapPin, Mail } from 'lucide-react';
import profile from '@/assets/sudip-profile.jpg.asset.json';
import SectionHeading from './SectionHeading';
const profileUrl = new URL(profile.url, 'https://id-preview--61987b8a-3d58-4a2d-9886-4adab9a8f9ed.lovable.app').href;
const AboutSection = () => (
  <section id="about" className="section-band bg-background">
    <div className="page-width">
      <SectionHeading number="02" label="Behind the code" title="Engineer. Collaborator. Problem solver" />
      <div className="grid gap-10 md:grid-cols-[280px_1fr] lg:gap-20">
        <div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-md border border-border"><img src={profileUrl} alt="Sudip Raj Kunwar" className="h-full w-full object-cover grayscale" loading="lazy" /></div>
          <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground"><MapPin size={14} /> Kathmandu, Nepal</div>
          <a href="mailto:sudip.kunwar9898@gmail.com" className="mt-3 flex items-start gap-2 text-xs text-muted-foreground hover:text-foreground"><Mail size={14} className="shrink-0" /><span className="break-all">sudip.kunwar9898@gmail.com</span></a>
          <div className="mt-7 border-t border-border pt-6">
            <p className="eyebrow mb-4"><GraduationCap size={16} /> Education</p>
            <h3 className="text-sm leading-6">B.Sc. Computer Science & Information Technology</h3>
            <p className="mt-3 text-xs leading-5 text-muted-foreground">College of Applied Business<br />Tribhuvan University</p>
            <p className="mt-3 font-mono text-[11px] text-muted-foreground">2015 — 2020</p>
          </div>
        </div>
        <div>
          <h3 className="max-w-2xl text-xl leading-relaxed md:text-2xl">Good software starts with understanding the problem.</h3>
          <div className="mt-6 max-w-2xl space-y-5 text-base leading-7 text-muted-foreground">
            <p>I'm Sudip, a Senior Software Engineer with hands-on experience building, optimizing, and supporting web-based applications across diverse industries.</p>
            <p>I enjoy translating business requirements into technical solutions — identifying the core problem, finding a better approach, and building something that's efficient, reusable, and reliable.</p>
            <p>From collaborating on architectural decisions to developing interfaces and REST APIs, I care about the details that make software work well. I'm driven by continuous learning and helping the people around me grow.</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-7">
            <div><p className="font-mono text-xs text-muted-foreground">CURRENTLY AT</p><p className="mt-3 text-base">Leapfrog Technology</p><p className="mt-1 text-xs text-muted-foreground">Senior Software Engineer</p></div>
            <div><p className="font-mono text-xs text-muted-foreground">MY APPROACH</p><p className="mt-3 text-base">Clarity over complexity</p><p className="mt-1 text-xs text-muted-foreground">Build well. Keep improving.</p></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AboutSection;
