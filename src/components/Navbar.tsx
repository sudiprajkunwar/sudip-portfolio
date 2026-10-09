import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Terminal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigation } from '@/lib/portfolio';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const update = () => {
      const match = [...navigation].reverse().find(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 180;
      });
      setActive(match?.id ?? 'home');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav className="page-width flex h-20 items-center justify-between" aria-label="Main navigation">
        <a href="#home" className="flex items-center gap-3 font-mono text-sm font-medium" aria-label="Sudip Raj Kunwar home"><Terminal size={20} /><span>sudip<span className="text-muted-foreground">.kunwar</span></span></a>
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map(({ id, label }) => <Button key={id} asChild variant="ghost" size="sm" className={active === id ? 'text-foreground' : 'text-muted-foreground'}><a href={`#${id}`} aria-current={active === id ? 'location' : undefined}><span className={active === id ? 'text-foreground' : 'invisible'}>·</span>{label}</a></Button>)}
        </div>
        <Button asChild variant="outline" size="sm" className="hidden md:inline-flex"><a href="https://github.com/sudiprajkunwar" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a></Button>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
      </nav>
      {open && <nav aria-label="Mobile navigation" className="border-t border-border bg-background px-5 pb-5 md:hidden">{navigation.map(({id,label}) => <Button asChild key={id} variant="ghost" className="w-full justify-start"><a href={`#${id}`} onClick={() => setOpen(false)}>{label}</a></Button>)}</nav>}
    </header>
  );
};
export default Navbar;
