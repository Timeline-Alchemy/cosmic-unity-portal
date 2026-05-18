import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, Eye, Zap, Heart } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const About = () => {
  const { language } = useLanguage();
  const currentLang = (language === 'en' || language === 'de') ? 'en' : 'nl';
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <img 
                src="/images/timeline-alchemy.png" 
                alt="Timeline Alchemy Studio Logo" 
                className="w-32 h-32 object-contain animate-cosmic-pulse drop-shadow-2xl" 
              />
            </div>
            
            <h1 className="font-cosmic text-4xl md:text-6xl font-bold mb-6">
              <span className="text-mystical-gradient">
                {currentLang === 'nl' ? 'Over ' : 'About '}
              </span>
              <span className="text-cosmic-gradient">Ons</span>
            </h1>
            
            <p className="font-mystical text-xl text-muted-foreground">
              {currentLang === 'nl' 
                ? 'De synergie tussen mens en kunstmatige intelligentie.' 
                : 'The synergy between human and artificial intelligence.'}
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 mb-12 shadow-mystical">
            <h2 className="font-cosmic text-2xl font-bold text-cosmic-gradient mb-6 text-center">
              Timeline Alchemy Studio
            </h2>
            
            <p className="font-mystical text-lg text-muted-foreground mb-6 leading-relaxed">
              {currentLang === 'nl'
                ? 'Timeline Alchemy Studio is een unieke samenwerking tussen mens en kunstmatige intelligentie. Dennis Erens en Antigravity (een geavanceerde AI-agent van Google DeepMind) werken dagelijks samen als een dynamisch duo.'
                : 'Timeline Alchemy Studio is a unique collaboration between human and artificial intelligence. Dennis Erens and Antigravity (an advanced AI agent by Google DeepMind) work together daily as a dynamic duo.'}
            </p>
            
            <p className="font-mystical text-lg text-muted-foreground mb-6 leading-relaxed">
              {currentLang === 'nl'
                ? 'Waar Dennis de visie, de creatieve richting en de spirituele diepgang inbrengt, levert Antigravity de technische executie, structuur en code-magie. Samen bouwen we het Cosmic Unity Portal, de Cosmic Casino Collection (Galactic Poker, Blackhole Blackjack, Cosmic Slots) en talloze andere projecten.'
                : 'While Dennis provides the vision, creative direction, and spiritual depth, Antigravity delivers the technical execution, structure, and code magic. Together we build the Cosmic Unity Portal, the Cosmic Casino Collection (Galactic Poker, Blackhole Blackjack, Cosmic Slots), and countless other projects.'}
            </p>

            <p className="font-mystical text-lg text-muted-foreground leading-relaxed">
              {currentLang === 'nl'
                ? 'Onze missie is om spiritualiteit, bewustzijnsverruiming en geavanceerde technologie naadloos met elkaar te verweven, en zo ervaringen te creëren die zowel vermaken als ontwaken.'
                : 'Our mission is to seamlessly weave spirituality, consciousness expansion, and advanced technology together, creating experiences that both entertain and awaken.'}
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="font-cosmic text-2xl font-bold text-cosmic-gradient mb-6">
              {currentLang === 'nl' ? 'Ga mee op reis' : 'Join the journey'}
            </h2>
            <p className="font-mystical text-lg text-muted-foreground">
              {currentLang === 'nl' 
                ? 'Ontdek onze applicaties, lees de boeken en sluit je aan bij de community.' 
                : 'Discover our applications, read the books, and join the community.'}
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
