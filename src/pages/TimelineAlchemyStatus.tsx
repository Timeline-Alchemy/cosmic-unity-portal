import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hammer, Rocket, Sparkles, Heart, Smartphone, Laptop, Zap, Share2, Star, Eye } from 'lucide-react';

const TimelineAlchemyStatus = () => {
  const { t, language } = useLanguage();
  const location = useLocation();

  // Switch default tab depending on accessed route
  const defaultTab = location.pathname.includes('timeless-awareness') ? 'awareness' : 'alchemy';
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Sync tab state if user navigates dynamically between paths mapped to this component
  useEffect(() => {
    const tab = location.pathname.includes('timeless-awareness') ? 'awareness' : 'alchemy';
    setActiveTab(tab);
  }, [location.pathname]);

  const alchemyScreenshots = [
    {
      url: '/images/timeline-alchemy/portal.png',
      title: language === 'nl' ? 'Het Portaal' : language === 'de' ? 'Das Portal' : 'The Portal',
      description: language === 'nl' ? 'Jouw toegangspoort tot content alchemie.' : language === 'de' ? 'Ihr Tor zur Content-Alchemie.' : 'Your gateway to content alchemy.'
    },
    {
      url: '/images/timeline-alchemy/forge.png',
      title: language === 'nl' ? 'Content Forge' : language === 'de' ? 'Content-Schmiede' : 'Content Forge',
      description: language === 'nl' ? 'Waar trends worden omgezet in ziel-resonante transmissies.' : language === 'de' ? 'Wo Trends in seelenresonante Übertragungen verwandelt werden.' : 'Where trends are transformed into soul-resonant transmissions.'
    },
    {
      url: '/images/timeline-alchemy/feed.png',
      title: language === 'nl' ? 'Community Feed' : language === 'de' ? 'Community-Feed' : 'Community Feed',
      description: language === 'nl' ? 'De hartslag van het collectieve bewustzijn.' : language === 'de' ? 'Der Herzschlag des kollektiven Bewusstseins.' : 'The heartbeat of the collective consciousness.'
    }
  ];

  const awarenessScreenshots = [
    {
      url: '/images/timeless-awareness-screenshot_1.png',
      title: language === 'nl' ? 'Goddelijke Verbinding' : language === 'de' ? 'Göttliche Verbindung' : 'Divine Connection',
      description: language === 'nl' ? 'Deel je spirituele inzichten en connect met zielen.' : language === 'de' ? 'Teile deine spirituellen Einsichten und verbinde dich.' : 'Share your spiritual insights and connect with other seekers.'
    },
    {
      url: '/images/timeless-awareness-screenshot_2.png',
      title: language === 'nl' ? 'Zelfrealisatie' : language === 'de' ? 'Selbstrealisierung' : 'Self-Realization',
      description: language === 'nl' ? 'Veranker jezelf in je goddelijke natuur.' : language === 'de' ? 'Verankere dich in deiner göttlichen Natur.' : 'Anchor yourself in your divine nature.'
    },
    {
      url: '/images/timeless-awareness-screenshot_3.png',
      title: language === 'nl' ? 'De Menselijke Conditie' : language === 'de' ? 'Das Menschliche Dasein' : 'The Human Condition',
      description: language === 'nl' ? 'Hoe we menselijke uitdagingen transformeren naar bewustzijn.' : language === 'de' ? 'Wie wir menschliche Herausforderungen transformieren.' : 'How we transform human challenges into pure consciousness.'
    },
    {
      url: '/images/timeless-awareness-screenshot_4.png',
      title: language === 'nl' ? 'Kosmisch Dagboek' : language === 'de' ? 'Kosmisches Tagebuch' : 'Cosmic Journal',
      description: language === 'nl' ? 'Volg de evolutie van je bewustzijn.' : language === 'de' ? 'Verfolge die Entwicklung deines Bewusstseins.' : 'Track the evolution of your consciousness.'
    }
  ];

  const activeScreenshots = activeTab === 'alchemy' ? alchemyScreenshots : awarenessScreenshots;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />
      
      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Development Hub Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="px-4 py-1 border-primary/50 text-primary mb-4 animate-pulse">
            <Hammer className="w-3.5 h-3.5 mr-2" />
            {language === 'nl' ? 'Ontwikkelingslab' : language === 'de' ? 'Entwicklungslabor' : 'Development Lab'}
          </Badge>
          <h1 className="font-cosmic text-4xl md:text-6xl font-bold tracking-tight text-cosmic-gradient mb-4">
            {language === 'nl' ? 'Projecten in Ontwikkeling' : language === 'de' ? 'Projekte in Entwicklung' : 'Projects in Development'}
          </h1>
          <p className="font-mystical text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'nl' 
              ? 'Volg de creatie van onze nieuwste multidimensionale applicaties. Onze ontwikkelaars zijn hard aan het werk.'
              : language === 'de'
              ? 'Verfolgen Sie die Entstehung unserer neuesten multidimensionalen Anwendungen. Unsere Entwickler arbeiten hart daran.'
              : 'Follow the creation of our latest multidimensional applications. Our developers are hard at work.'}
          </p>
        </div>

        {/* Glassmorphic Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-card/50 backdrop-blur-md p-1.5 border border-border/60 rounded-full flex gap-1 shadow-mystical">
            <button
              onClick={() => setActiveTab('alchemy')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-cosmic text-sm font-semibold transition-all duration-300 ${
                activeTab === 'alchemy'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              Timeline Alchemy
            </button>
            <button
              onClick={() => setActiveTab('awareness')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-cosmic text-sm font-semibold transition-all duration-300 ${
                activeTab === 'awareness'
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Star className="w-4 h-4" />
              Timeless Awareness
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Logo / Cover block */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src={activeTab === 'alchemy' ? '/images/timeline-alchemy/logo.png' : '/images/timeless-awareness-logo.png'} 
                alt={activeTab === 'alchemy' ? 'Timeline Alchemy Logo' : 'Timeless Awareness Logo'} 
                className="relative w-64 h-64 md:w-80 md:h-80 object-contain rounded-2xl bg-card/40 p-4 border border-border/40"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = activeTab === 'alchemy' ? '/images/timeline-alchemy.png' : 'https://raw.githubusercontent.com/lucide-react/lucide/main/icons/sparkles.svg';
                }}
              />
            </div>
          </div>

          {/* Info Details block */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="outline" className="px-3 py-1 border-cosmic/50 text-cosmic font-semibold">
              {activeTab === 'alchemy' ? 'Web Platform' : 'Mobile App (Android/iOS)'}
            </Badge>
            <h2 className="font-cosmic text-3xl md:text-5xl font-bold">
              {activeTab === 'alchemy' 
                ? t('timelineAlchemy.underConstruction.title') 
                : t('timelessAwareness.underConstruction.title')}
            </h2>
            <p className="font-mystical text-xl text-primary/90">
              {activeTab === 'alchemy' 
                ? t('timelineAlchemy.underConstruction.subtitle') 
                : t('timelessAwareness.underConstruction.subtitle')}
            </p>
            <p className="font-mystical text-lg text-muted-foreground leading-relaxed">
              {activeTab === 'alchemy' 
                ? t('timelineAlchemy.underConstruction.description') 
                : t('timelessAwareness.underConstruction.description')}
            </p>

            {/* Features block */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {activeTab === 'alchemy' ? (
                <>
                  <div className="bg-card/30 border border-border/40 rounded-xl p-4 flex flex-col gap-2 hover:border-primary/20 transition-all">
                    <Zap className="w-6 h-6 text-primary" />
                    <span className="font-cosmic font-bold text-sm">Content Forge</span>
                    <span className="font-mystical text-xs text-muted-foreground">
                      {language === 'nl' ? 'Wekelijkse alchemie van trends naar inzicht.' : language === 'de' ? 'Wöchentliche Alchemie von Trends in Erkenntnisse.' : 'Weekly alchemy from trends into insight.'}
                    </span>
                  </div>
                  <div className="bg-card/30 border border-border/40 rounded-xl p-4 flex flex-col gap-2 hover:border-primary/20 transition-all">
                    <Share2 className="w-6 h-6 text-purple-400" />
                    <span className="font-cosmic font-bold text-sm">Cross-Platform</span>
                    <span className="font-mystical text-xs text-muted-foreground">
                      {language === 'nl' ? 'Automatische distributie en planning.' : language === 'de' ? 'Automatische Verteilung und Planung.' : 'Automatic distribution and scheduling.'}
                    </span>
                  </div>
                  <div className="bg-card/30 border border-border/40 rounded-xl p-4 flex flex-col gap-2 hover:border-primary/20 transition-all">
                    <Laptop className="w-6 h-6 text-cosmic" />
                    <span className="font-cosmic font-bold text-sm">Web Portal</span>
                    <span className="font-mystical text-xs text-muted-foreground">
                      {language === 'nl' ? 'Toegankelijk via elk browserportaal.' : language === 'de' ? 'Zugänglich über jedes Browserportal.' : 'Accessible from any browser portal.'}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="bg-card/30 border border-border/40 rounded-xl p-4 flex flex-col gap-2 hover:border-primary/20 transition-all">
                    <Heart className="w-6 h-6 text-red-400" />
                    <span className="font-cosmic font-bold text-sm">
                      {language === 'nl' ? 'Menselijke Conditie' : language === 'de' ? 'Menschliches Dasein' : 'Human Condition'}
                    </span>
                    <span className="font-mystical text-xs text-muted-foreground">
                      {language === 'nl' ? 'Deel hoe je menselijke barrières overwint.' : language === 'de' ? 'Teile, wie du menschliche Barrieren überwindest.' : 'Share how you overcome human barriers.'}
                    </span>
                  </div>
                  <div className="bg-card/30 border border-border/40 rounded-xl p-4 flex flex-col gap-2 hover:border-primary/20 transition-all">
                    <Sparkles className="w-6 h-6 text-primary" />
                    <span className="font-cosmic font-bold text-sm">
                      {language === 'nl' ? 'Goddelijke Natuur' : language === 'de' ? 'Göttliche Natur' : 'Divine Nature'}
                    </span>
                    <span className="font-mystical text-xs text-muted-foreground">
                      {language === 'nl' ? 'Herinner en root jezelf in je eenheid.' : language === 'de' ? 'Erinnere und verankere dich in der Einheit.' : 'Remember and root yourself in oneness.'}
                    </span>
                  </div>
                  <div className="bg-card/30 border border-border/40 rounded-xl p-4 flex flex-col gap-2 hover:border-primary/20 transition-all">
                    <Smartphone className="w-6 h-6 text-cosmic" />
                    <span className="font-cosmic font-bold text-sm">Mobile App</span>
                    <span className="font-mystical text-xs text-muted-foreground">
                      {language === 'nl' ? 'Gebouwd voor iOS en Android apparaten.' : language === 'de' ? 'Gebaut für iOS- und Android-Geräte.' : 'Built for iOS and Android devices.'}
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Screenshots Showcase Header */}
        <div className="mt-16 mb-8 text-center">
          <h3 className="font-cosmic text-2xl md:text-3xl font-bold mb-2">
            {language === 'nl' ? 'Visualisatie van de Interface' : language === 'de' ? 'Visualisierung der Benutzeroberfläche' : 'Interface Visualization'}
          </h3>
          <p className="font-mystical text-muted-foreground">
            {language === 'nl' 
              ? 'Een voorproefje van hoe de app er in de nabije toekomst uit zal zien.' 
              : language === 'de'
              ? 'Ein Blick darauf, wie die App in naher Zukunft aussehen wird.'
              : 'A sneak peek at how the application will look in the near future.'}
          </p>
        </div>

        {/* Screenshots Showcase Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${activeTab === 'alchemy' ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-8`}>
          {activeScreenshots.map((screen, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/40 overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <CardContent className="p-0">
                <div className={`${activeTab === 'alchemy' ? 'aspect-[16/10]' : 'aspect-[9/16]'} overflow-hidden relative bg-black/40 flex items-center justify-center p-2`}>
                  <img 
                    src={screen.url} 
                    alt={screen.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <h4 className="font-cosmic text-lg font-bold text-white mb-1 flex items-center gap-1.5">
                      <Eye className="w-4 h-4 text-primary" />
                      {screen.title}
                    </h4>
                    <p className="font-mystical text-xs text-white/80">{screen.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stay tuned / countdown */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-primary animate-bounce" />
            </div>
            <p className="font-cosmic text-sm font-semibold tracking-wider uppercase text-muted-foreground">
              {activeTab === 'alchemy' 
                ? t('timelineAlchemy.underConstruction.stayTuned') 
                : t('timelessAwareness.underConstruction.stayTuned')}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TimelineAlchemyStatus;
