import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'w-[90%] md:w-[80%]' : 'w-[95%] md:w-[90%]'
      }`}
    >
      <div
        className={`gradient-card backdrop-blur-md border border-primary/50 rounded-2xl transition-all duration-300 ${
          isScrolled ? 'py-3 px-4 md:px-6' : 'py-4 px-6 md:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="text-xl md:text-2xl font-bold text-gradient hover:scale-105 transition-transform"
          >
            Harsh.Dev
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-2 text-sm lg:text-base text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-40 md:hidden animate-fade-in"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className="md:hidden mt-4 pt-4 border-t border-primary/20 animate-slide-down relative z-50">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="px-4 py-3 text-left text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
