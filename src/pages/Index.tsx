import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { useFrequency } from '@/hooks/useFrequency';
import { Gamepad2, BookOpen, Star, Sparkles } from 'lucide-react';

const Index = () => {
  const { language } = useLanguage();
  const currentLang = (language === 'en' || language === 'de') ? 'en' : 'nl';
  const { mode } = useFrequency();

  const services = [
    {
      title: currentLang === 'nl' ? 'Cosmic Casino' : 'Cosmic Casino',
      description: currentLang === 'nl'
        ? 'Ervaar spirituele groei door van het moment te genieten via games zoals Galactic Poker en Cosmic Slots.'
        : 'Experience spiritual growth by enjoying the moment through games like Galactic Poker and Cosmic Slots.',
      icon: Gamepad2,
      link: '/casino-collection'
    },
    {
      title: currentLang === 'nl' ? 'E-Books' : 'E-Books',
      description: currentLang === 'nl'
        ? 'Verdiep je bewustzijn met onze collectie aan e-books en literatuur.'
        : 'Deepen your consciousness with our collection of e-books and literature.',
      icon: BookOpen,
      link: '/e-books'
    },
    {
      title: currentLang === 'nl' ? 'Timeless Awareness' : 'Timeless Awareness',
      description: currentLang === 'nl'
        ? 'Ontdek tijdloze wijsheid en verruim je kosmische perspectief.'
        : 'Discover timeless wisdom and expand your cosmic perspective.',
      icon: Star,
      link: 'https://www.timeless-awareness.nl',
      external: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />

      {/* What We Do Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-gradient opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
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
              <p className="font-mystical text-xl text-muted-foreground mb-6 leading-relaxed">
                {currentLang === 'nl'
                  ? 'Wij zijn de brug tussen eeuwenoude spirituele wijsheid en geavanceerde technologie. Als ontwikkelingsstudio creëren wij ervaringen die niet alleen vermaken, maar ook bijdragen aan de bewustzijnsverruiming van de mensheid.'
                  : 'We are the bridge between ancient spiritual wisdom and advanced technology. As a development studio, we create experiences that not only entertain but also contribute to the consciousness expansion of humanity.'}
              </p>
              <p className="font-mystical text-lg text-muted-foreground mb-8">
                {currentLang === 'nl'
                  ? 'Geleid door visie en ondersteund door AI-innovatie, ontwikkelen wij platformen, games en literatuur die jou helpen je goddelijke potentieel te ontsluiten.'
                  : 'Guided by vision and supported by AI innovation, we develop platforms, games, and literature that help you unlock your divine potential.'}
              </p>

              <Link to="/about" className="inline-flex items-center space-x-2 text-cosmic hover:text-primary transition-colors font-mystical text-lg">
                <Sparkles className="w-5 h-5" />
                <span>{currentLang === 'nl' ? 'Lees ons verhaal' : 'Read our story'}</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-8 hover:bg-card/60 transition-all duration-300 cosmic-hover group">
                <div className="w-14 h-14 rounded-full bg-cosmic/10 flex items-center justify-center mb-6 group-hover:bg-cosmic/20 transition-colors">
                  <service.icon className="w-7 h-7 text-cosmic" />
                </div>
                <h3 className="font-cosmic text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
                <p className="font-mystical text-muted-foreground mb-6">{service.description}</p>

                {service.external ? (
                  <a href={service.link} target="_blank" rel="noopener noreferrer" className="text-cosmic hover:text-primary transition-colors font-mystical flex items-center text-sm uppercase tracking-wider">
                    {currentLang === 'nl' ? 'Ontdek meer' : 'Discover more'} &rarr;
                  </a>
                ) : (
                  <Link to={service.link} className="text-cosmic hover:text-primary transition-colors font-mystical flex items-center text-sm uppercase tracking-wider">
                    {currentLang === 'nl' ? 'Ontdek meer' : 'Discover more'} &rarr;
                  </Link>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
