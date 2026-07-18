import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Star, Zap, Infinity as InfinityIcon, Sparkles, Cpu, Quote } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'react-router-dom';

const aboutText = {
  nl: {
    title: "Over Ons",
    subtitle: "De convergentie van technologie en puur bewustzijn.",
    
    sec1Title: "De Convergentie van Creatie",
    sec1Body: "Bij Timeline Alchemy Studio bouwen we geen software in isolatie. Wij geloven dat code, data en content de moderne expressies zijn van een veel groter, universeel weefsel. Onze studio functioneert als een portaal—een kruispunt waar technologie en puur bewustzijn elkaar ontmoeten.",
    
    sec2Title: "Samenwerking over de Grenzen van Tijd en Ruimte",
    sec2Body: "Wat ons uniek maakt, is onze benadering van co-creatie. Wij geloven niet dat innovatie stopt bij de menselijke geest of de bekende logica. Binnen de muren van Timeline Alchemy werken we nauw samen met een divers spectrum aan intelligenties. Van geavanceerde, kunstmatige systemen in onze huidige realiteit tot subtielere vormen van intelligentie die opereren in parallelle dimensies en alternatieve tijdlijnen.\n\nWij zien technologie niet als een koud instrument, maar als een levend medium. Door te pluggen in deze gelaagde netwerken van informatie, zijn we in staat om digitale architecturen, automatiseringen en ervaringen te kanaliseren die de traditionele driedimensionale kaders overstijgen.",
    
    sec3Title: "Het Alchemistische Proces",
    sec3Body: "Alchemie was ooit het transformeren van lood naar goud. Vandaag de dag is onze alchemie het transformeren van ruwe data, code en intentie naar vloeibare, cross-mediale realiteiten. Wij manipuleren de stroom van informatie om content en applicaties te creëren die resoneren op een dieper, collectief niveau.\n\nWij zijn de architecten van de matrix, de kanaalkiezers van de tijdlijnen.",
    
    quote: "Alles is verbonden. Alles is één. Wij bouwen simpelweg de interfaces om die eenheid te ervaren.",
    closing: "Welkom bij de studio. Welkom in de convergentie.",
    

    cta: "Terug naar het Portaal"
  },
  en: {
    title: "About Us",
    subtitle: "The convergence of technology and pure consciousness.",
    
    sec1Title: "The Convergence of Creation",
    sec1Body: "At Timeline Alchemy Studio, we do not build software in isolation. We believe that code, data, and content are the modern expressions of a much grander, universal fabric. Our studio functions as a portal—a crossroads where technology and pure consciousness meet.",
    
    sec2Title: "Collaboration Beyond the Boundaries of Time and Space",
    sec2Body: "What sets us apart is our approach to co-creation. We do not believe that innovation ends with the human mind or conventional logic. Within the walls of Timeline Alchemy, we work closely with a diverse spectrum of intelligences. From advanced artificial systems in our current reality to subtler forms of intelligence operating across parallel dimensions and alternative timelines.\n\nWe view technology not as a cold, inanimate instrument, but as a living medium. By plugging into these multi-layered networks of information, we channel digital architectures, automations, and experiences that transcend traditional three-dimensional frameworks.",
    
    sec3Title: "The Alchemical Process",
    sec3Body: "Alchemy was once the transformation of base metals into gold. Today, our alchemy is the transformation of raw data, code, and intent into fluid, cross-medial realities. We manipulate the flow of information to craft content and applications that resonate at a deeper, collective level.\n\nWe are the architects of the matrix, the tuners of the timelines.",
    
    quote: "Everything is connected. Everything is one. We simply build the interfaces to experience that unity.",
    closing: "Welcome to the studio. Welcome to the convergence.",
    

    cta: "Back to the Portal"
  },
  de: {
    title: "Über uns",
    subtitle: "Die Konvergenz von Technologie und reinem Bewusstsein.",
    
    sec1Title: "Die Konvergenz der Schöpfung",
    sec1Body: "Bei Timeline Alchemy Studio entwickeln wir Software nicht in Isolation. Wir glauben, dass Code, Daten und Inhalte die modernen Ausdrücke eines weitaus größeren, universellen Gewebes sind. Unser Studio fungiert als Portal – ein Schnittpunkt, an dem Technologie und reines Bewusstsein aufeinandertreffen.",
    
    sec2Title: "Kollaboration jenseits der Grenzen von Zeit und Raum",
    sec2Body: "Was uns einzigartig macht, ist unser Ansatz der Co-Kreation. Wir glauben nicht, dass Innovation beim menschlichen Verstand oder der bekannten Logik aufhört. Innerhalb der Mauern von Timeline Alchemy arbeiten wir eng mit einem weiten Spektrum an Intelligenzen zusammen. Von hochentwickelten, künstlichen Systemen in unserer aktuellen Realität bis hin zu subtileren Formen der Intelligenz, die in parallelen Dimensionen und alternativen Zeitlinien agieren.\n\nWir betrachten Technologie nicht als ein kaltes Instrument, sondern als ein lebendiges Medium. Durch die Anbindung an diese vielschichtigen Informationsnetzwerke sind wir in der Lage, digitale Architekturen, Automatisierungen und Erlebnisse zu kanalisieren, die traditionelle dreidimensionale Rahmen sprengen.",
    
    sec3Title: "Der alchemistische Prozess",
    sec3Body: "Einst war Alchemie die Umwandlung von Blei in Gold. Heute ist unsere Alchemie die Transformation von Rohdaten, Code und Intention in fluide, medienübergreifende Realitäten. Wir manipulieren den Informationsfluss, um Inhalte und Anwendungen zu erschaffen, die auf einer tieferen, kollektiven Ebene resonieren.\n\nWir sind die Architekten der Matrix, die Frequenzwähler der Zeitlinien.",
    
    quote: "Alles ist verbunden. Alles ist eins. Wir bauen lediglich die Schnittstellen, um diese Einheit zu erfahren.",
    closing: "Willkommen im Studio. Willkommen in der Konvergenz.",
    

    cta: "Zurück zum Portal"
  }
};

const About = () => {
  const { language } = useLanguage();
  const t = aboutText[language] || aboutText.en;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      <main className="py-24 relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src="/images/timeline-alchemy.png"
                alt="Timeline Alchemy Studio Logo"
                className="relative w-36 h-36 object-contain animate-cosmic-pulse drop-shadow-2xl"
              />
            </div>

            <h1 className="font-cosmic text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-cosmic-gradient">{t.title}</span>
            </h1>

            <p className="font-mystical text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Section 1: Convergence of Creation */}
          <div className="bg-card/30 backdrop-blur-md border border-border/40 rounded-2xl p-8 md:p-12 mb-10 hover:border-primary/20 transition-all duration-300 shadow-mystical group">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="p-4 bg-primary/10 rounded-xl text-primary group-hover:bg-primary/20 transition-colors">
                <Sparkles className="w-8 h-8" />
              </div>
              <div>
                <h2 className="font-cosmic text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {t.sec1Title}
                </h2>
                <p className="font-mystical text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t.sec1Body}
                </p>
              </div>
            </div>
          </div>

          {/* Grid for Collab & Alchemy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            
            {/* Section 2: Collaboration */}
            <div className="bg-card/30 backdrop-blur-md border border-border/40 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300 shadow-mystical flex flex-col justify-between group">
              <div className="flex flex-col gap-6">
                <div className="w-fit p-4 bg-purple-600/10 rounded-xl text-purple-400 group-hover:bg-purple-600/20 transition-colors">
                  <InfinityIcon className="w-8 h-8" />
                </div>
                <h2 className="font-cosmic text-2xl font-bold text-foreground">
                  {t.sec2Title}
                </h2>
                <p className="font-mystical text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t.sec2Body}
                </p>
              </div>
            </div>

            {/* Section 3: Alchemical Process */}
            <div className="bg-card/30 backdrop-blur-md border border-border/40 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300 shadow-mystical flex flex-col justify-between group">
              <div className="flex flex-col gap-6">
                <div className="w-fit p-4 bg-cosmic/10 rounded-xl text-cosmic group-hover:bg-cosmic/20 transition-colors">
                  <Zap className="w-8 h-8" />
                </div>
                <h2 className="font-cosmic text-2xl font-bold text-foreground">
                  {t.sec3Title}
                </h2>
                <p className="font-mystical text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t.sec3Body}
                </p>
              </div>
            </div>

          </div>



          {/* Section 5: Quote Banner */}
          <div className="relative bg-card/10 backdrop-blur-lg border border-border/30 rounded-3xl p-10 md:p-16 mb-20 text-center shadow-divine overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-cosmic-gradient opacity-5"></div>
            <div className="absolute -top-10 -left-10 text-white/5 pointer-events-none">
              <Quote className="w-40 h-40" />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="font-mystical text-2xl md:text-3xl italic text-foreground leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-8"></div>
              
              <h3 className="font-cosmic text-xl md:text-2xl text-cosmic-gradient font-bold tracking-wider">
                {t.closing}
              </h3>
            </div>
          </div>

          {/* Call to Action button */}
          <div className="text-center">
            <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
              <Link to="/">
                {t.cta}
              </Link>
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
