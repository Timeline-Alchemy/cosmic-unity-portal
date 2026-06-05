import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Gamepad2, CreditCard, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';
import { useFrequency } from '@/hooks/useFrequency';
import { Link } from 'react-router-dom';

const CasinoCollection = () => {
  const { t } = useLanguage();
  const { mode } = useFrequency();

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
          title: t('casino.games.cosmicPinball.title'),
          description: t('casino.games.cosmicPinball.desc'),
          path: '#',
          isPlaceholder: true,
          icon: <img src="/images/pinball-app-icon.png" alt="Galactic Pinball" className="w-24 h-24 object-contain rounded-xl drop-shadow-lg" />
        },
        {
          title: t('casino.games.merkaba.title'),
          description: t('casino.games.merkaba.desc'),
          path: '#',
          isPlaceholder: true,
          icon: <img src="/images/merkaba-app-icon.png" alt="Merkaba Madness" className="w-24 h-24 object-contain rounded-xl drop-shadow-lg" />
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
          <div className="text-center mb-16">
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

          <div className="space-y-24">
            {trinities.map((trinity, tIdx) => {
              const isSecondTrinity = tIdx === 1;
              const isLocked = isSecondTrinity && mode === 'void';

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
                      return (
                        <div 
                          key={idx} 
                          className="bg-card/50 backdrop-blur-md border border-border p-8 rounded-2xl cosmic-hover group flex flex-col relative overflow-hidden transition-all duration-500"
                        >
                          {/* Locked Overlay for Second Trinity */}
                          {isLocked && (
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/75 backdrop-blur-[3px] p-6 text-center transition-all duration-500">
                              <Lock className="w-10 h-10 text-accent animate-pulse mb-3" />
                              <span className="font-cosmic text-sm font-semibold tracking-wider text-white uppercase">
                                Unaligned Timeline
                              </span>
                              <span className="font-mystical text-xs text-muted-foreground mt-2 max-w-[220px]">
                                Select ☀️ or 🌕 in the frequency selector in the navbar to access the Second Trinity.
                              </span>
                            </div>

                          )}

                          <div className={`flex flex-col items-center text-center h-full transition-all duration-500 ${isLocked ? 'opacity-20 blur-[1px] saturate-50 pointer-events-none' : ''}`}>
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
