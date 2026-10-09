import { ArrowUp, ArrowUpRight, Github, Linkedin, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation } from '@/lib/portfolio';
const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="page-width">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <a href="#home" className="flex items-center gap-3 font-mono text-sm"><Terminal size={18} /> sudip.kunwar</a>
        <div className="flex flex-wrap gap-4">{navigation.filter(item => item.id !== 'home').map(({id,label}) => <Button key={id} asChild variant="link" className="h-auto p-0 text-xs text-muted-foreground"><a href={`#${id}`}>{label}</a></Button>)}</div>
        <div className="flex gap-2"><Button asChild variant="ghost" size="icon"><a href="https://github.com/sudiprajkunwar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a></Button><Button asChild variant="ghost" size="icon"><a href="https://linkedin.com/in/sudiprajkunwar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button><Button asChild variant="outline" size="icon"><a href="#home" aria-label="Back to top"><ArrowUp /></a></Button></div>
      </div>
      <div className="mt-8 flex flex-col justify-between gap-3 border-t border-border pt-6 font-mono text-[10px] text-muted-foreground sm:flex-row"><p>© {new Date().getFullYear()} Sudip Raj Kunwar</p><p>Crafted with care. Built with purpose.</p></div>
    </div>
  </footer>
);
export default Footer;
