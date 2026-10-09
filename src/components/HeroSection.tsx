import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => (
  <section id="home" className="hero-grid relative overflow-hidden pt-20">
    <div className="page-width relative py-20 md:pb-20 md:pt-24">
      <div className="intro-enter">
        <p className="eyebrow text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-foreground" /> Senior software engineer <span className="hidden sm:inline">/ Kathmandu, Nepal</span></p>
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_260px]">
          <div>
            <h1 className="hero-title">Sudip Raj<br />Kunwar<span className="hero-cursor text-muted-foreground">_</span></h1>
            <p className="mt-6 font-mono text-base text-muted-foreground md:text-lg">Thoughtful code. Reliable systems.</p>
            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">I build scalable web and mobile applications, turning complex business requirements into clear, reliable software.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="h-12 px-6"><a href="#expertise">Explore my expertise <ArrowDownRight /></a></Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6"><a href="#skills">My experience <ArrowUpRight /></a></Button>
            </div>
          </div>
          <div className="hidden pb-2 lg:block" aria-label="Engineering focus">
            <Code2 className="mb-5 h-8 w-8 text-muted-foreground" strokeWidth={1} />
            <p className="font-mono text-xs text-muted-foreground">// built with intention</p>
            <div className="mt-5 space-y-4 font-mono text-sm">
              {['Full-stack development', 'Mobile experiences', 'System architecture'].map((item,i) => <div key={item} className="flex items-center gap-3"><span className="text-muted-foreground">0{i+1}</span><span>{item}</span></div>)}
            </div>
            <div className="mt-7 flex items-center gap-3 border-t border-border pt-5 font-mono text-[11px] text-muted-foreground"><span>React</span><span>/</span><span>TypeScript</span><span>/</span><span>Node.js</span></div>
          </div>
        </div>
        <div className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-6">
          <div className="flex items-center gap-5">
            <Button asChild variant="link" className="h-auto p-0 text-xs text-muted-foreground"><a href="https://github.com/sudiprajkunwar" target="_blank" rel="noopener noreferrer"><Github /> GitHub <ArrowUpRight /></a></Button>
            <Button asChild variant="link" className="h-auto p-0 text-xs text-muted-foreground"><a href="https://linkedin.com/in/sudiprajkunwar" target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn <ArrowUpRight /></a></Button>
          </div>
          <a href="#expertise" className="flex items-center gap-3 font-mono text-[10px] text-muted-foreground" aria-label="Scroll to expertise"><span className="hidden sm:inline">SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </div>
      </div>
    </div>
  </section>
);
export default HeroSection;
