import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Gamepad2, CreditCard, Lock, Sparkles, Compass, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const CasinoCollection = () => {
  const { t } = useLanguage();

  // Load Shift Frequency state from localStorage
  const [isShifted, setIsShifted] = useState<boolean>(() => {
    return localStorage.getItem('cosmic-frequency-shifted') === 'true';
  });

  // Sync isShifted to HTML element class list and localStorage
  useEffect(() => {
    if (isShifted) {
      document.documentElement.classList.add('shifted-frequency-active');
      localStorage.setItem('cosmic-frequency-shifted', 'true');
    } else {
      document.documentElement.classList.remove('shifted-frequency-active');
      localStorage.setItem('cosmic-frequency-shifted', 'false');
    }
  }, [isShifted]);

  const trinities = [
    {
      title: t('casino.firstTrinity'),
      description: t('casino.firstTrinityDesc'),
      games: [
        {
          title: t('casino.games.universalSlots.title'),
          description: t('casino.games.universalSlots.desc'),
          path: '/casino/cosmic-slots',
          isPlaceholder: false,
          icon: <img src="/images/universal-slots.png" alt="Cosmic Slots" className="w-24 h-24 object-contain rounded-xl drop-shadow-lg" />
        },
        {
          title: t('casino.games.blackholeBlackjack.title'),
          description: t('casino.games.blackholeBlackjack.desc'),
          path: '/casino/blackhole-blackjack',
          isPlaceholder: false,
          icon: <img src="/images/blackhole-blackjack.png" alt="BlackHole Blackjack" className="w-24 h-24 object-contain rounded-xl drop-shadow-lg" />
        },
        {
          title: t('casino.games.galacticPoker.title'),
          description: t('casino.games.galacticPoker.desc'),
          path: '/casino/galactic-poker',
          isPlaceholder: false,
          icon: <img src="/images/galactic-poker.png" alt="Galactic Poker" className="w-24 h-24 object-contain rounded-xl drop-shadow-lg" />
        }
      ]
    },
    {
      title: t('casino.secondTrinity'),
      description: t('casino.secondTrinityDesc'),
      games: [
        {
          title: t('casino.games.cosmicRoulette.title'),
          description: t('casino.games.cosmicRoulette.desc'),
          path: '/casino/cosmic-roulette',
          isPlaceholder: false,
          icon: <img src="/images/roulette-app-icon.png" alt="Cosmic Roulette" className="w-24 h-24 object-contain rounded-xl drop-shadow-lg" />
        },
        {
          title: t('casino.games.innerSpace.title'),
          description: t('casino.games.innerSpace.desc'),
          path: '#',
          isPlaceholder: true,
          icon: (
            <div className="w-24 h-24 flex items-center justify-center bg-black/40 rounded-xl text-muted-foreground border border-border/50">
              <Compass className="w-12 h-12 text-primary/40 group-hover:text-primary transition-colors" />
            </div>
          )
        },
        {
          title: t('casino.games.cosmicCommunityCreator.title'),
          description: t('casino.games.cosmicCommunityCreator.desc'),
          path: '#',
          isPlaceholder: true,
          icon: (
            <div className="w-24 h-24 flex items-center justify-center bg-black/40 rounded-xl text-muted-foreground border border-border/50">
              <Users className="w-12 h-12 text-secondary/40 group-hover:text-secondary transition-colors" />
            </div>
          )
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-grow relative overflow-hidden py-24">
        {/* Sacred Geometry Background Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cosmic rounded-full animate-mystical-float"></div>
          <div className="absolute top-3/4 right-1/4 w-48 h-48 border border-accent rotate-45 animate-cosmic-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="font-cosmic text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-cosmic-gradient">{t('casino.title')}</span>
            </h1>
            <p className="font-mystical text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('casino.welcome')}
            </p>
            <div className="flex justify-center items-center gap-4 mt-6 text-sm text-muted-foreground font-mystical">
              <span className="flex items-center gap-1"><CreditCard className="w-4 h-4 text-blue-500" /> {t('casino.stripeOnly')}</span>
            </div>
          </div>

          {/* Premium Frequency Shift Selector */}
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="bg-card/40 border border-border/80 p-5 rounded-2xl backdrop-blur-md shadow-mystical flex flex-col sm:flex-row items-center gap-6 max-w-md w-full relative z-30 transition-all duration-300">
              <div className="flex-grow text-center sm:text-left">
                <div className="text-xs font-cosmic text-accent tracking-widest uppercase mb-1">
                  Timeline Alignment
                </div>
                <h3 className="font-cosmic text-lg font-bold text-white mb-1">
                  {isShifted ? 'Ascended Frequency' : 'Standard Frequency'}
                </h3>
                <p className="font-mystical text-xs text-muted-foreground">
                  {isShifted 
                    ? 'Active: 888Hz (Solar Abundance & Emerald Flow)' 
                    : 'Active: 432Hz (Cosmic Order & Violet Balance)'}
                </p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => setIsShifted(!isShifted)}
                  className={`relative w-20 h-10 rounded-full transition-all duration-500 ease-in-out p-1 flex items-center ${
                    isShifted 
                      ? 'bg-cosmic-gradient shadow-energy border border-accent/40' 
                      : 'bg-muted border border-border/80'
                  }`}
                  aria-label="Shift Frequency"
                >
                  <div 
                    className={`w-8 h-8 rounded-full bg-white shadow-md transform transition-transform duration-500 ease-in-out flex items-center justify-center ${
                      isShifted ? 'translate-x-10' : 'translate-x-0'
                    }`}
                  >
                    {isShifted ? (
                      <span className="text-amber-500 text-[10px] font-bold">888</span>
                    ) : (
                      <span className="text-violet-600 text-[10px] font-bold">432</span>
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-24">
            {trinities.map((trinity, tIdx) => {
              const isSecondTrinity = tIdx === 1;
              const isLocked = isSecondTrinity && !isShifted;

              return (
                <div key={tIdx} className="relative">
                  <div className="text-center mb-12">
                    <h2 className="font-cosmic text-3xl font-bold text-mystical-gradient mb-4">
                      {trinity.title}
                    </h2>
                    <p className="font-mystical text-muted-foreground text-lg">
                      {trinity.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trinity.games.map((game, idx) => {
                      // Apply grayscale & opacity only to the Second Trinity when locked
                      const cardLockedStyle = isLocked ? 'opacity-30 blur-[0.5px] saturate-50 pointer-events-none scale-[0.98]' : '';

                      return (
                        <div 
                          key={idx} 
                          className={`bg-card/50 backdrop-blur-md border border-border p-8 rounded-2xl cosmic-hover group flex flex-col relative overflow-hidden transition-all duration-500 ${cardLockedStyle}`}
                        >
                          {/* Locked Overlay for Second Trinity */}
                          {isLocked && (
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/45 backdrop-blur-[2px] p-4 text-center transition-all duration-500">
                              <Lock className="w-8 h-8 text-muted-foreground animate-pulse mb-3" />
                              <span className="font-cosmic text-sm font-semibold tracking-wider text-muted-foreground/80 uppercase">
                                Unaligned Timeline
                              </span>
                              <span className="font-mystical text-xs text-muted-foreground/60 mt-1 max-w-[200px]">
                                Shift Frequency to 888Hz to access the Second Trinity.
                              </span>
                            </div>
                          )}

                          <div className="flex flex-col items-center text-center h-full">
                            <div className="p-4 bg-background/50 rounded-[2rem] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-cosmic flex items-center justify-center overflow-hidden">
                              {game.icon}
                            </div>
                            <h3 className="font-cosmic text-2xl font-semibold text-mystical-gradient mb-4">
                              {game.title}
                            </h3>
                            <p className="font-mystical text-muted-foreground mb-8 flex-grow">
                              {game.description}
                            </p>
                            <Button 
                              asChild 
                              className={`w-full ${game.isPlaceholder ? 'bg-muted text-muted-foreground pointer-events-none' : 'cosmic-hover bg-cosmic-gradient text-white border-none cursor-pointer'}`}
                              disabled={game.isPlaceholder}
                            >
                              {game.isPlaceholder ? (
                                <span>{t('casino.comingSoon')}</span>
                              ) : (
                                <Link to={game.path}>
                                  <Gamepad2 className="w-4 h-4 mr-2" />
                                  {t('casino.viewGame')}
                                </Link>
                              )}
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CasinoCollection;
