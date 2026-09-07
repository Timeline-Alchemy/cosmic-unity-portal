import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter, ChevronDown, Sparkles, Gamepad2, BookOpen, Smartphone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const timelineAlchemyEntryHref = '/timeline-alchemy';
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const projectCategories = [
    {
      id: 'applications',
      name: 'Applications',
      icon: Smartphone,
      items: [
        { name: 'Timeline Alchemy', href: timelineAlchemyEntryHref, icon: Star },
        { name: 'Timeless Awareness', href: '/timeless-awareness', icon: Star },
        { name: 'Re-Member', href: '/re-member', icon: Sparkles },
        { name: t('nav.lumina'), href: '/lumina', icon: Sparkles },
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
        { name: 'Galactic Pinball', href: '/casino/galactic-pinball', icon: Gamepad2 },
        { name: 'Merkaba Madness', href: '/casino/merkaba-madness', icon: Gamepad2 }
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
    { name: t('footer.about'), href: '/about' },
    { name: t('footer.contact'), href: '/contact' },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="space-y-12 mb-12">
          {/* Footer Row: Community (left), Social Links (center), Contact (right) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Navigation Links - Left */}
            <div className="w-full md:w-auto text-left">
              <h3 className="font-cosmic text-lg font-semibold text-cosmic-gradient mb-4">
                Links
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    to="/"
                    className="font-mystical text-muted-foreground hover:text-cosmic cosmic-hover text-sm"
                  >
                    {t('nav.home')}
                  </Link>
                </li>

                {/* Projects Multi-Level Dropdown Menu */}
                <li className="relative group">
                  <button
                    type="button"
                    onClick={() => setProjectsOpen(!projectsOpen)}
                    className="font-mystical text-muted-foreground hover:text-cosmic cosmic-hover text-sm flex items-center gap-1 w-full text-left py-0.5"
                  >
                    <span>{t('nav.projects')}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${projectsOpen ? 'rotate-180 text-cosmic' : 'group-hover:rotate-180'}`} />
                  </button>

                  {/* 1st Level: Applications, Games, E-Books */}
                  <div className={`mt-1.5 pl-3 border-l-2 border-primary/30 space-y-2 transition-all duration-300 ${projectsOpen ? 'block' : 'hidden group-hover:block'}`}>
                    {projectCategories.map((cat) => (
                      <div key={cat.id} className="space-y-1">
                        <button
                          type="button"
                          onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                          className="font-mystical text-muted-foreground hover:text-foreground text-xs flex items-center justify-between gap-2 py-0.5 w-full text-left group/sub"
                        >
                          <span className="flex items-center gap-1.5">
                            <cat.icon className="w-3.5 h-3.5 text-amber-500/80 group-hover/sub:text-cosmic transition-colors" />
                            <span>{cat.name}</span>
                          </span>
                          <ChevronDown className={`w-3 h-3 text-muted-foreground/60 transition-transform duration-300 ${activeCategory === cat.id ? 'rotate-180' : ''}`} />
                        </button>

                        {/* 2nd Level Items */}
                        <div className={`pl-3 border-l border-border/40 space-y-1 ${activeCategory === cat.id ? 'block' : 'hidden group-hover:block'}`}>
                          {cat.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="font-mystical text-muted-foreground hover:text-cosmic text-[11px] flex items-center gap-1.5 py-0.5 transition-colors"
                            >
                              <item.icon className="w-3 h-3 text-primary/70" />
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </li>

                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="font-mystical text-muted-foreground hover:text-cosmic cosmic-hover text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links - Center */}
            <div className="w-full md:w-auto flex justify-center">
              <div className="text-center">
                <h3 className="font-cosmic text-lg font-semibold text-cosmic-gradient mb-4">
                  Timeline Alchemy Studio
                </h3>
                <div className="flex space-x-4 justify-center">
                  <a href="https://www.instagram.com/timeline_alchemy_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cosmic cosmic-hover" title="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/timelin3alchemy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cosmic cosmic-hover" title="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@Timeline_Alchemy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cosmic cosmic-hover" title="YouTube">
                    <Youtube className="w-5 h-5" />
                  </a>
                  <a href="https://x.com/Timeline4lchemy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cosmic cosmic-hover" title="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="https://www.tiktok.com/@timeline4lchemy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-cosmic cosmic-hover" title="TikTok">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info - Right */}
            <div className="w-full md:w-auto text-right">
              <h3 className="font-cosmic text-lg font-semibold text-mystical-gradient mb-4">
                {t('footer.contactUs')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-end space-x-2 text-sm">
                  <a
                    href="mailto:info@timeline-alchemy.net"
                    className="font-mystical text-muted-foreground hover:text-cosmic cosmic-hover underline decoration-dotted underline-offset-4"
                  >
                    {t('contact.info.emailLinkText')}
                  </a>
                  <Mail className="w-4 h-4 text-cosmic" />
                </div>
                <div className="flex items-center justify-end space-x-2 text-sm">
                  <a
                    href="tel:+18148925969"
                    className="font-mystical text-muted-foreground hover:text-cosmic cosmic-hover"
                  >
                    +1(814)8925969
                  </a>
                  <Phone className="w-4 h-4 text-cosmic" />
                </div>
                <div className="flex items-start justify-end space-x-2 text-sm">
                  <span className="font-mystical text-muted-foreground text-right">
                    1209 Mountain Road Pl Ne Ste N<br />
                    Albuquerque, New Mexico 87110,<br />
                    United States
                  </span>
                  <MapPin className="w-4 h-4 text-cosmic mt-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-card px-4">
              <Star className="w-6 h-6 text-cosmic animate-cosmic-pulse" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mystical">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Timeline Alchemy Studio LLC. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-cosmic transition-colors">
              Privacy Policy
            </Link>
            <span className="text-border">•</span>
            <Link to="/terms-of-service" className="hover:text-cosmic transition-colors">
              Terms of Service
            </Link>
            <span className="text-border">•</span>
            <Link to="/refund-policy" className="hover:text-cosmic transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
