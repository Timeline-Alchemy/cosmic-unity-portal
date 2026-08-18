import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  ChevronDown 
} from 'lucide-react';
import LanguageSelector from '@/components/LanguageSelector';
import FrequencySelector from '@/components/FrequencySelector';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileCasinoOpen, setMobileCasinoOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const timelineAlchemyEntryHref = '/timeline-alchemy';

  const navigation = [
    { name: t('nav.home'), href: '/', icon: Home, isDropdown: false },
    {
      name: t('nav.projects'),
      icon: Star,
      isDropdown: true,
      id: 'projects',
      items: [
        { name: 'Timeline Alchemy', href: timelineAlchemyEntryHref, icon: Star },
        { name: 'Timeless Awareness', href: '/timeless-awareness', icon: Star },
        { name: 'Re-Member', href: '/re-member', icon: Sparkles },
        { name: t('nav.lumina'), href: '/lumina', icon: Sparkles }
      ]
    },
    {
      name: t('nav.casinoCollection'),
      icon: Gamepad2,
      isDropdown: true,
      id: 'casino',
      items: [
        { name: 'Casino Overview', href: '/casino-collection', icon: Gamepad2 },
        { name: 'Cosmic Slots', href: '/casino/cosmic-slots', icon: Gamepad2 },
        { name: 'BlackHole Blackjack', href: '/casino/blackhole-blackjack', icon: Gamepad2 },
        { name: 'Galactic Poker', href: '/casino/galactic-poker', icon: Gamepad2 },
        { name: 'Cosmic Roulette', href: '/casino/cosmic-roulette', icon: Gamepad2 },
        { name: 'Galactic Pinball', href: '/casino/galactic-pinball', icon: Gamepad2 }
      ]
    },
    { name: 'E-Books', href: '/e-books', icon: BookOpen, isDropdown: false },
    { name: t('nav.about'), href: '/about', icon: Star, isDropdown: false },
    { name: t('nav.contact'), href: '/contact', icon: Mail, isDropdown: false },
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
            {navigation.map((item) => {
              if (item.isDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative group py-2"
                  >
                    <button
                      className="flex items-center gap-1 font-mystical text-sm transition-all duration-300 text-muted-foreground hover:text-foreground"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-1 w-56 rounded-xl bg-card/95 border border-border shadow-xl backdrop-blur-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="py-2 px-1.5 space-y-1">
                        {item.items.map((subItem) => (
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
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-mystical text-sm transition-all duration-300 hover:text-primary ${isActive(item.href)
                    ? 'text-cosmic glow-accent'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
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
            {navigation.map((item) => {
              if (item.isDropdown) {
                const isSubOpen = item.id === 'casino' ? mobileCasinoOpen : mobileProjectsOpen;
                const toggleSub = () => {
                  if (item.id === 'casino') {
                    setMobileCasinoOpen(!mobileCasinoOpen);
                  } else {
                    setMobileProjectsOpen(!mobileProjectsOpen);
                  }
                };

                return (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={toggleSub}
                      className="flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-mystical text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    >
                      <span className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        {item.name}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSubOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isSubOpen && (
                      <div className="pl-6 space-y-1 border-l border-border/40 ml-5 mt-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`flex items-center px-3 py-2 rounded-md text-sm font-mystical ${
                              isActive(subItem.href)
                                ? 'text-cosmic bg-cosmic/10'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'
                            }`}
                            onClick={() => {
                              setIsOpen(false);
                              setMobileProjectsOpen(false);
                              setMobileCasinoOpen(false);
                            }}
                          >
                            <subItem.icon className="mr-3 h-4 w-4 text-amber-500/85" />
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-3 py-2 rounded-md text-base font-mystical cosmic-hover ${isActive(item.href)
                    ? 'text-cosmic bg-cosmic/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
