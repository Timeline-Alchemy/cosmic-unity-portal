import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  Star, 
  Home, 
  BookOpen, 
  Mail, 
  Gamepad2, 
  Sparkles,
  ChevronDown,
  ChevronRight,
  Smartphone
} from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import FrequencySelector from '@/components/FrequencySelector';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>(null);
  const location = useLocation();
  const { t } = useLanguage();
  const timelineAlchemyEntryHref = '/timeline-alchemy';

  const projectCategories = [
    {
      id: 'applications',
      name: 'Applications',
      icon: Smartphone,
      items: [
        { name: 'Timeline Alchemy', href: timelineAlchemyEntryHref, icon: Star },
        { name: 'Timeless Awareness', href: '/timeless-awareness', icon: Star },
        { name: 'Re-Member', href: '/re-member', icon: Sparkles },
        { name: t('nav.lumina'), href: '/lumina', icon: Sparkles }
      ]
    },
    {
      id: 'games',
      name: 'Games',
      icon: Gamepad2,
      items: [
        { name: 'Casino Overview', href: '/casino-collection', icon: Gamepad2 },
        { name: 'Cosmic Slots', href: '/casino/cosmic-slots', icon: Gamepad2 },
        { name: 'BlackHole Blackjack', href: '/casino/blackhole-blackjack', icon: Gamepad2 },
        { name: 'Galactic Poker', href: '/casino/galactic-poker', icon: Gamepad2 },
        { name: 'Cosmic Roulette', href: '/casino/cosmic-roulette', icon: Gamepad2 },
        { name: 'Galactic Pinball', href: '/casino/galactic-pinball', icon: Gamepad2 }
      ]
    },
    {
      id: 'ebooks',
      name: 'E-Books',
      icon: BookOpen,
      items: [
        { name: 'E-Books Collection', href: '/e-books', icon: BookOpen }
      ]
    }
  ];

  const mainLinks = [
    { name: t('nav.home'), href: '/', icon: Home },
    { name: t('nav.about'), href: '/about', icon: Star },
    { name: t('nav.contact'), href: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="relative z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 cosmic-hover">
            <img src="/images/timeline-alchemy.png" alt="Timeline Alchemy Studio Logo" className="w-8 h-8 rounded-full shadow-cosmic animate-cosmic-pulse" />
            <span className="font-cosmic text-xl text-cosmic-gradient">
              Timeline Alchemy Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-mystical text-sm transition-all duration-300 hover:text-primary ${isActive('/')
                ? 'text-cosmic glow-accent'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {t('nav.home')}
            </Link>

            {/* Nested Projects Dropdown */}
            <div className="relative group py-2">
              <button
                className="flex items-center gap-1 font-mystical text-sm transition-all duration-300 text-muted-foreground hover:text-foreground"
              >
                {t('nav.projects')}
                <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>

              {/* 1st Tier Dropdown: Applications, Games, E-Books */}
              <div className="absolute left-0 mt-1 w-56 rounded-xl bg-card/95 border border-border shadow-xl backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2 px-1.5 space-y-1">
                  {projectCategories.map((cat) => (
                    <div key={cat.id} className="relative group/sub">
                      <div className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-mystical text-muted-foreground hover:text-foreground hover:bg-muted/50 cursor-pointer transition-colors">
                        <span className="flex items-center gap-2.5">
                          <cat.icon className="w-4 h-4 text-amber-500/80" />
                          {cat.name}
                        </span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground/60 transition-transform group-hover/sub:translate-x-0.5" />
                      </div>

                      {/* 2nd Tier Flyout Dropdown */}
                      <div className="absolute left-full top-0 ml-1.5 w-60 rounded-xl bg-card/95 border border-border shadow-xl backdrop-blur-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-50">
                        <div className="py-2 px-1.5 space-y-1">
                          {cat.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-mystical transition-colors ${
                                isActive(subItem.href)
                                  ? 'bg-primary/10 text-primary font-semibold'
                                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                              }`}
                            >
                              <subItem.icon className="w-4 h-4 text-amber-500/80" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className={`font-mystical text-sm transition-all duration-300 hover:text-primary ${isActive('/about')
                ? 'text-cosmic glow-accent'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {t('nav.about')}
            </Link>

            <Link
              to="/contact"
              className={`font-mystical text-sm transition-all duration-300 hover:text-primary ${isActive('/contact')
                ? 'text-cosmic glow-accent'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            <FrequencySelector />
            <LanguageSelector />
          </div>

          {/* Mobile actions */}
          <div className="lg:hidden flex items-center gap-2">
            <FrequencySelector />
            <LanguageSelector />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="cosmic-hover"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-card/95 backdrop-blur-lg border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 rounded-md text-base font-mystical cosmic-hover ${isActive('/')
                ? 'text-cosmic bg-cosmic/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              onClick={() => setIsOpen(false)}
            >
              <Home className="mr-3 h-5 w-5" />
              {t('nav.home')}
            </Link>

            {/* Mobile Projects Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-mystical text-muted-foreground hover:text-foreground hover:bg-muted/50"
              >
                <span className="flex items-center gap-3">
                  <Star className="h-5 w-5" />
                  {t('nav.projects')}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileProjectsOpen && (
                <div className="pl-4 space-y-1 border-l border-border/40 ml-4 mt-1">
                  {projectCategories.map((cat) => (
                    <div key={cat.id} className="space-y-1">
                      <button
                        onClick={() => setMobileActiveCategory(mobileActiveCategory === cat.id ? null : cat.id)}
                        className="flex justify-between items-center w-full px-3 py-1.5 rounded-md text-sm font-mystical text-muted-foreground hover:text-foreground hover:bg-muted/30"
                      >
                        <span className="flex items-center gap-2">
                          <cat.icon className="h-4 w-4 text-amber-500/80" />
                          {cat.name}
                        </span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${mobileActiveCategory === cat.id ? 'rotate-180' : ''}`} />
                      </button>

                      {mobileActiveCategory === cat.id && (
                        <div className="pl-4 space-y-1 border-l border-border/30 ml-3 mt-1">
                          {cat.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`flex items-center px-3 py-1.5 rounded-md text-xs font-mystical ${
                                isActive(subItem.href)
                                  ? 'text-cosmic bg-cosmic/10 font-semibold'
                                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                              }`}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileProjectsOpen(false);
                                setMobileActiveCategory(null);
                              }}
                            >
                              <subItem.icon className="mr-2 h-3.5 w-3.5 text-amber-500/80" />
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`flex items-center px-3 py-2 rounded-md text-base font-mystical cosmic-hover ${isActive('/about')
                ? 'text-cosmic bg-cosmic/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              onClick={() => setIsOpen(false)}
            >
              <Star className="mr-3 h-5 w-5" />
              {t('nav.about')}
            </Link>

            <Link
              to="/contact"
              className={`flex items-center px-3 py-2 rounded-md text-base font-mystical cosmic-hover ${isActive('/contact')
                ? 'text-cosmic bg-cosmic/10'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              onClick={() => setIsOpen(false)}
            >
              <Mail className="mr-3 h-5 w-5" />
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
