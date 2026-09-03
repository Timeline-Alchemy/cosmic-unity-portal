import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Gamepad2, 
  BookOpen, 
  Star, 
  Sparkles, 
  ShieldCheck, 
  Info, 
  Lock, 
  Smartphone, 
  ExternalLink,
  ChevronRight,
  Zap,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  const { language } = useLanguage();
  const currentLang = (language === 'en' || language === 'de') ? 'en' : 'nl';

  const appsList = [
    {
      id: 'cosmic-slots',
      name: 'Cosmic Slots',
      badge: 'Featured Game',
      category: 'Simulated Slot Machine',
      icon: Gamepad2,
      purpose: currentLang === 'nl'
        ? 'Een ruimtethema mobiele gokkast voor ontspanning en visueel plezier. Geen echt geld — uitsluitend virtuele Stellar Credits.'
        : 'A space-themed mobile slot machine game for casual entertainment. Features celestial symbols, daily missions, and virtual non-monetary credits.',
      gameUrl: '/casino/cosmic-slots',
      privacyUrl: '/privacy-policy/cosmic-slots',
      termsUrl: '/terms-of-service/cosmic-slots',
      isComingSoon: false
    },
    {
      id: 'blackhole-blackjack',
      name: 'Blackhole Blackjack',
      badge: 'Casino Series',
      category: 'Simulated Card Game',
      icon: Gamepad2,
      purpose: currentLang === 'nl'
        ? 'Klassiek blackjack ontmoet zwarte gaten in een ruimtestructuur met virtuele fiches.'
        : 'Classic blackjack meets cosmic event horizons. Play with virtual chips, test strategy, and track wins on global leaderboards.',
      gameUrl: '/casino/blackhole-blackjack',
      privacyUrl: '/privacy-policy/blackhole-blackjack',
      termsUrl: '/terms-of-service/blackhole-blackjack',
      isComingSoon: false
    },
    {
      id: 'galactic-poker',
      name: 'Galactic Poker',
      badge: 'Casino Series',
      category: 'Simulated Poker',
      icon: Gamepad2,
      purpose: currentLang === 'nl'
        ? 'Galactisch Texas Hold\'em poker voor plezier en strategische uitdagingen.'
        : 'Galactic Texas Hold\'em poker featuring non-monetary virtual chips, offline practice, and high-score ranking.',
      gameUrl: '/casino/galactic-poker',
      privacyUrl: '/privacy-policy/galactic-poker',
      termsUrl: '/terms-of-service/galactic-poker',
      isComingSoon: false
    },
    {
      id: 'cosmic-roulette',
      name: 'Cosmic Roulette',
      badge: 'Casino Series',
      category: 'Simulated Roulette',
      icon: Gamepad2,
      purpose: currentLang === 'nl'
        ? 'Draai het galactische roulette wiel met ruimtelijke visuele effecten en virtuele inzetten.'
        : 'Spin the celestial roulette wheel with vibrant galaxy visual effects and virtual betting chips.',
      gameUrl: '/casino/cosmic-roulette',
      privacyUrl: '/privacy-policy/cosmic-roulette',
      termsUrl: '/terms-of-service/cosmic-roulette',
      isComingSoon: false
    },
    {
      id: 'galactic-pinball',
      name: 'Galactic Pinball',
      badge: 'Arcade Series',
      category: 'Arcade Physics Game',
      icon: Zap,
      purpose: currentLang === 'nl'
        ? 'Snelle pinball arcade actie met kosmische bumpers en highscore klassementen.'
        : 'Fast-paced pinball arcade action with cosmic bumpers, extra ball multipliers, and global leaderboards.',
      gameUrl: '/casino/galactic-pinball',
      privacyUrl: '/privacy-policy/galactic-pinball',
      termsUrl: '/terms-of-service/galactic-pinball',
      isComingSoon: false
    },
    {
      id: 'merkaba-madness',
      name: 'Merkaba Madness',
      badge: currentLang === 'nl' ? 'Binnenkort' : 'Coming Soon',
      category: 'Sacred Geometry Arcade',
      icon: Sparkles,
      purpose: currentLang === 'nl'
        ? 'Activeer je kosmische lichtlichaam en navigeer door multidimensionale geometrische uitdagingen.'
        : 'Activate your cosmic lightbody and navigate through multidimensional sacred geometry challenges.',
      isComingSoon: true,
      gameUrl: '#',
      privacyUrl: '#',
      termsUrl: '#'
    },
    {
      id: 'timeline-alchemy',
      name: 'Timeline Alchemy',
      badge: currentLang === 'nl' ? 'Binnenkort' : 'Coming Soon',
      category: 'Master Consciousness App',
      icon: Star,
      purpose: currentLang === 'nl'
        ? 'Het overkoepelende portaal en platform voor tijdslijntransformatie, frequentie-afstemming en bewustzijnsverruiming.'
        : 'The master portal platform for timeline transformation, frequency alignment, and consciousness expansion.',
      isComingSoon: true,
      gameUrl: '#',
      privacyUrl: '#',
      termsUrl: '#'
    },
    {
      id: 'lumina',
      name: 'Lumina Enlightenment',
      badge: 'Mindfulness Suite',
      category: 'Awareness & Cycle App',
      icon: Star,
      purpose: currentLang === 'nl'
        ? 'Mindfulness tool voor het berekenen van bewustzijnscycli en kosmische perspectieven.'
        : 'Mindfulness and consciousness cycle tool designed for personal reflection, daily wisdom, and cycle timing.',
      gameUrl: '/lumina',
      privacyUrl: '/privacy-policy/lumina',
      termsUrl: '/terms-of-service/lumina',
      isComingSoon: false
    },
    {
      id: 'timeless-awareness',
      name: 'Timeless Awareness',
      badge: 'Mindfulness Suite',
      category: 'Wisdom & Reading Platform',
      icon: BookOpen,
      purpose: currentLang === 'nl'
        ? 'Toegang tot tijdloze literatuur, audio en filosofie voor geestelijke verdieping.'
        : 'Access timeless wisdom literature, meditative frequency tools, and philosophy for personal growth.',
      gameUrl: '/timeless-awareness',
      privacyUrl: '/privacy-policy/timeless-awareness',
      termsUrl: '/terms-of-service/timeless-awareness',
      isComingSoon: false
    },
    {
      id: 're-member',
      name: 'Re-Member',
      badge: 'Mindfulness Suite',
      category: 'Interactive Spiritual Portal',
      icon: Sparkles,
      purpose: currentLang === 'nl'
        ? 'Interactief platform voor spirituele herinnering en kosmische uitlijning.'
        : 'Interactive digital portal guiding users through spiritual alignment, sound frequencies, and self-remembering.',
      gameUrl: '/re-member',
      privacyUrl: '/privacy-policy/re-member',
      termsUrl: '/terms-of-service/re-member',
      isComingSoon: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* Main Section: Prominent "Our Featured Applications & Games Suite" */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cosmic/10 border border-cosmic/20 text-cosmic text-xs font-semibold mb-3">
              <Gamepad2 className="w-4 h-4" />
              <span>Full Portfolio & Game Directory</span>
            </div>
            <h2 className="font-cosmic text-3xl md:text-5xl font-bold text-foreground mb-4">
              Featured Applications & Cosmic Games Suite
            </h2>
            <p className="font-mystical text-lg text-muted-foreground">
              Explore our mobile games and applications below. Every game features individual app documentation, dedicated privacy policy, and terms of service.
            </p>
          </div>

          {/* Grid of Apps & Games */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {appsList.map((app) => {
              const Icon = app.icon;
              const isCosmicSlots = app.id === 'cosmic-slots';
              const isComingSoon = app.isComingSoon;

              return (
                <div 
                  key={app.id} 
                  className={`bg-card/50 backdrop-blur-md rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isComingSoon
                      ? 'border-amber-500/30 bg-amber-500/5 opacity-80 select-none cursor-default'
                      : isCosmicSlots 
                        ? 'border-cosmic shadow-lg shadow-cosmic/10 ring-1 ring-cosmic/40 group hover:shadow-xl hover:border-cosmic/80' 
                        : 'border-border/60 group hover:shadow-xl hover:border-cosmic/50'
                  }`}
                >
                  <div className="p-6">
                    {/* Header Badge & Icon */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md ${
                        isComingSoon
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : isCosmicSlots 
                            ? 'bg-cosmic text-white shadow-sm' 
                            : 'bg-primary/10 text-primary border border-primary/20'
                      }`}>
                        {app.badge}
                      </span>
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                        isComingSoon
                          ? 'bg-amber-500/10 text-amber-400'
                          : 'bg-cosmic/10 text-cosmic group-hover:bg-cosmic group-hover:text-white transition-colors'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* App Title */}
                    <h3 className={`font-cosmic text-xl font-bold mb-1 ${
                      isComingSoon
                        ? 'text-amber-200/90'
                        : 'text-foreground group-hover:text-cosmic transition-colors'
                    }`}>
                      {app.name}
                    </h3>
                    <div className={`text-xs font-mystical font-semibold mb-3 ${
                      isComingSoon ? 'text-amber-400/80' : 'text-cosmic'
                    }`}>
                      {app.category}
                    </div>

                    {/* Purpose Description */}
                    <p className="font-mystical text-xs text-muted-foreground mb-6 leading-relaxed">
                      {app.purpose}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 space-y-2 border-t border-border/40 mt-auto bg-card/30">
                    {isComingSoon ? (
                      <div className="w-full text-xs font-mystical py-2.5 px-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300/90 text-center font-semibold flex items-center justify-center gap-2 cursor-not-allowed">
                        <Clock className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                        <span>{currentLang === 'nl' ? 'Binnenkort Beschikbaar' : 'Coming Soon'}</span>
                      </div>
                    ) : (
                      <>
                        <Link to={app.gameUrl} className="block w-full">
                          <Button size="sm" variant={isCosmicSlots ? "cosmic" : "outline"} className="w-full text-xs font-mystical flex items-center justify-between">
                            <span>View {app.name} Info</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Button>
                        </Link>

                        <div className="flex gap-2 pt-1 text-[11px] font-mystical">
                          <Link 
                            to={app.privacyUrl} 
                            className="flex-1 text-center py-1.5 px-2 bg-background/80 hover:bg-cosmic/10 hover:text-cosmic rounded border border-border/60 transition-colors text-muted-foreground truncate"
                            title={`${app.name} Privacy Policy`}
                          >
                            Privacy Policy
                          </Link>
                          <Link 
                            to={app.termsUrl} 
                            className="flex-1 text-center py-1.5 px-2 bg-background/80 hover:bg-cosmic/10 hover:text-cosmic rounded border border-border/60 transition-colors text-muted-foreground truncate"
                            title={`${app.name} Terms of Service`}
                          >
                            Terms of Service
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Timeline Alchemy Studio Story Section */}
      <section className="py-20 bg-card/30 border-t border-border/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-cosmic blur-3xl opacity-20 rounded-full"></div>
                <img
                  src="/images/timeline-alchemy.png"
                  alt="Timeline Alchemy Studio"
                  className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-2xl animate-cosmic-pulse relative z-10"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="font-cosmic text-3xl md:text-5xl font-bold mb-6 text-cosmic-gradient">
                Timeline Alchemy Studio
              </h2>
              <p className="font-mystical text-lg text-muted-foreground mb-6 leading-relaxed">
                {currentLang === 'nl'
                  ? 'Wij zijn de brug tussen spirituele wijsheid en geavanceerde technologie. Als ontwikkelingsstudio creëren wij mobiele games, platformen en literatuur die vermaken en bijdragen aan positieve ervaringen.'
                  : 'We bridge ancient spiritual wisdom and modern technology. As a mobile development studio, we create games, literature, and platforms that entertain and foster expansion.'}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/about">
                  <Button variant="cosmic" size="sm">
                    {currentLang === 'nl' ? 'Lees ons verhaal' : 'Read Our Story'}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="border-cosmic text-cosmic">
                    {currentLang === 'nl' ? 'Contact Opnemen' : 'Contact Support'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
