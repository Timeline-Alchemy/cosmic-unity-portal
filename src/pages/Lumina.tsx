import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Compass, 
  Calendar, 
  BookOpen, 
  ArrowLeft, 
  Heart, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Download, 
  Eye, 
  Moon, 
  Activity, 
  Award,
  BookMarked
} from 'lucide-react';

const localTranslations = {
  nl: {
    title: "Lumina Secretion Calendar",
    subtitle: "Synchroniseer met je innerlijke kosmos. Volg je heilige secretiecyclus (Christus-olie) en verhoog je bewustzijn.",
    heroBadge: "Multidimensionale Gids",
    desktopView: "Desktop Dashboard",
    mobileView: "Mobiele Sanctuary",
    backToHome: "Terug naar het Portaal",
    screenshotTitle: "Interface Visualisatie",
    screenshotDesc: "Verken de interfaces en visualisaties van de Lumina applicatie.",
    solfeggioTitle: "Solfeggio Ademhalingsgids",
    solfeggioDesc: "Stem je trilling af en activeer de alchemistische ascentie met ons ademhalingshulpmiddel.",
    breatheState: {
      in: "Adem In",
      hold: "Houd Vast",
      out: "Adem Uit",
      idle: "Klik om te Starten"
    },
    frequencies: {
      f396: "396 Hz - Bevrijding van Angst & Schuld",
      f528: "528 Hz - Transformatie & DNA Herstel",
      f963: "963 Hz - Goddelijk Bewustzijn (Kruinchakra)"
    },
    activateFrequency: "Activeer Frequentie",
    deactivateFrequency: "Deactiveer Frequentie",
    frequencyPlaying: "Frequentiesignaal Actief",
    pillarsTitle: "De Vier Pijlers van Lumina",
    pillars: [
      {
        title: "Celestial Astrolabe",
        desc: "Volg de maanstanden en de doorgang van de maan door de twaalf sterrenbeelden. Ontdek welke biologische poorten en organen op dit moment energetisch geladen zijn.",
        detail: "Elke maand, wanneer de maan in het sterrenbeeld staat waarin je geboren bent (je zonneteken of maanteken), daalt een microscopische kiem (de Christus-olie of Heilige Secretie) neer vanuit de hersenen (Cerebrum) langs het zenuwstelsel."
      },
      {
        title: "Sanctuary of Ascension",
        desc: "Begeleide meditatie, ademhaling en Solfeggio-audio om de opstijging van de energie door de 33 wervels van de ruggengraat te vergemakkelijken.",
        detail: "Door het bewaren en verhogen van deze vitale energie stijgt het weer op naar de Medulla Oblongata, activeert de Pijnappelklier en Hypofyse, en verlicht de Optische Thalamus (de 'Derdewegoog'-kamer) — wat leidt tot verlichting."
      },
      {
        title: "Sacred Timeline Calendar",
        desc: "Een gepersonaliseerde 6-maandelijkse kalender die de exacte perioden berekent waarin je biologische en spirituele energie piekt.",
        detail: "Ontvang realtime herinneringen en pushmeldingen op je mobiel of desktop. Exporteer de cyclus eenvoudig als een ICS-bestand om deze te integreren in Google Calendar of Apple iCal."
      },
      {
        title: "Heilige Wetenschap & Etymologie",
        desc: "De ontmoeting tussen fysiologie en esoterische geschriften. Begrijp de ware betekenis van alchemie in religies, mythen en oude culturen.",
        detail: "Ontdek hoe de Claustrum, de Cerebrospinale Vloeistof (CSF), en de Optische Thalamus direct gecorreleerd zijn met Bijbelse citaten zoals Luke 11:34 en Genesis 32:30 (Peniel/Pijnappelklier)."
      }
    ],
    features: {
      zodiacWheel: {
        title: "Zodiak & Anatomie",
        desc: "Interactief zodiakwiel gekoppeld aan de twaalf hersenzenuwen en lichaamsdelen."
      },
      solfeggioAudio: {
        title: "Solfeggio Trillingen",
        desc: "Ingebouwde binaural beats en solfeggio-frequenties voor diepe meditatie."
      },
      icsExport: {
        title: "Kalender Integratie",
        desc: "Exporteer je cyclusdata naar Google, Apple of Outlook-kalenders."
      }
    },
    screens: {
      screen1: { title: "Het Hemellichaam", desc: "Interactieve Zodiak & Anatomie wiel dat de maanovergangen toont." },
      screen2: { title: "Alchemistische Sanctuary", desc: "Countdown naar de volgende secretie-uitlijning en ademhalingsvisualizer." },
      screen3: { title: "Heilige Tijdlijn", desc: "De 6-maandelijkse secretiekalender en notificatie-instellingen." },
      screen4: { title: "Heilige Wetenschap", desc: "De anatomische structuren en esoterische schriftteksten verklaard." },
      screen5: { title: "Kosmisch Overzicht", desc: "Het hoofddashboard dat alle kosmische en biologische cycli integreert." }
    }
  },
  en: {
    title: "Lumina Secretion Calendar",
    subtitle: "Synchronize with your inner cosmos. Track your sacred secretion cycle (Christ-Oil) and elevate your consciousness.",
    heroBadge: "Multidimensional Guide",
    desktopView: "Desktop Dashboard",
    mobileView: "Mobile Sanctuary",
    backToHome: "Back to Portal",
    screenshotTitle: "Interface Visualization",
    screenshotDesc: "Explore the interfaces and visualizations of the Lumina application.",
    solfeggioTitle: "Solfeggio Breathing Guide",
    solfeggioDesc: "Tune your vibration and activate alchemical ascension with our guided breathing tool.",
    breatheState: {
      in: "Breathe In",
      hold: "Hold",
      out: "Breathe Out",
      idle: "Click to Begin"
    },
    frequencies: {
      f396: "396 Hz - Liberating Fear & Guilt",
      f528: "528 Hz - Transformation & DNA Repair",
      f963: "963 Hz - Divine Consciousness (Crown Chakra)"
    },
    activateFrequency: "Activate Frequency",
    deactivateFrequency: "Deactivate Frequency",
    frequencyPlaying: "Frequency Wave Active",
    pillarsTitle: "The Four Pillars of Lumina",
    pillars: [
      {
        title: "Celestial Astrolabe",
        desc: "Track lunar phases and the moon's transit through the twelve zodiac constellations. Learn which biological gates and organs are currently energetically charged.",
        detail: "Every month, when the moon is in the zodiac sign you were born under (your sun or moon sign), a microscopic seed (the Christ-Oil or Sacred Secretion) descends from the cerebrum down the spine."
      },
      {
        title: "Sanctuary of Ascension",
        desc: "Guided meditation, breathwork, and Solfeggio audio to facilitate the ascension of energy up the 33 vertebrae of the spine.",
        detail: "By preserving and elevating this vital energy, it ascends back to the Medulla Oblongata, activating the Pineal and Pituitary glands, and illuminating the Optic Thalamus (the 'Third Eye' chamber) — leading to spiritual awakening."
      },
      {
        title: "Sacred Timeline Calendar",
        desc: "A personalized 6-month calendar calculating the exact periods when your biological and spiritual energy peaks.",
        detail: "Receive real-time reminders and push notifications on mobile or desktop. Easily export your cycles as an ICS file to integrate into Google Calendar or Apple iCal."
      },
      {
        title: "Sacred Science & Etymology",
        desc: "The union of physiology and esoteric scriptures. Understand the true meaning of alchemy in religions, myths, and ancient cultures.",
        detail: "Discover how the Claustrum, Cerebrospinal Fluid (CSF), and Optic Thalamus directly correlate with Biblical passages like Luke 11:34 and Genesis 32:30 (Peniel/Pineal gland)."
      }
    ],
    features: {
      zodiacWheel: {
        title: "Zodiac & Anatomy",
        desc: "Interactive zodiac wheel mapped to the twelve cranial nerves and body areas."
      },
      solfeggioAudio: {
        title: "Solfeggio Vibration",
        desc: "Built-in binaural beats and solfeggio frequencies for deep meditation."
      },
      icsExport: {
        title: "Calendar Integration",
        desc: "Export your cycle data directly to Google, Apple, or Outlook calendars."
      }
    },
    screens: {
      screen1: { title: "The Celestial Astrolabe", desc: "Interactive Zodiac & Anatomy wheel showing the moon transits." },
      screen2: { title: "Alchemical Sanctuary", desc: "Countdown to the next secretion alignment and breathing pace tracker." },
      screen3: { title: "Sacred Timeline", desc: "The 6-month secretion calendar and custom notification panel." },
      screen4: { title: "Sacred Science", desc: "The anatomical structures and esoteric scriptures decoded." },
      screen5: { title: "Cosmic Overview", desc: "The main dashboard integrating all cosmic and biological cycles." }
    }
  },
  de: {
    title: "Lumina Secretion Calendar",
    subtitle: "Synchronisieren Sie sich mit Ihrem inneren Kosmos. Verfolgen Sie Ihren heiligen Sekretionszyklus (Christus-Öl) und erhöhen Sie Ihr Bewusstsein.",
    heroBadge: "Multidimensionaler Leitfaden",
    desktopView: "Desktop-Dashboard",
    mobileView: "Mobiles Heiligtum",
    backToHome: "Zurück zum Portal",
    screenshotTitle: "Visualisierung der Benutzeroberfläche",
    screenshotDesc: "Erkunden Sie die Schnittstellen und Visualisierungen der Lumina-Anwendung.",
    solfeggioTitle: "Solfeggio-Atmungsleitfaden",
    solfeggioDesc: "Stimmen Sie Ihre Schwingung ab und aktivieren Sie die alchemistische Aszension mit unserem Atmungswerkzeug.",
    breatheState: {
      in: "Einatmen",
      hold: "Anhalten",
      out: "Ausatmen",
      idle: "Klicken zum Starten"
    },
    frequencies: {
      f396: "396 Hz - Befreiung von Angst und Schuld",
      f528: "528 Hz - Transformation und DNA-Reparatur",
      f963: "963 Hz - Göttliches Bewusstsein (Kronenchakra)"
    },
    activateFrequency: "Frequenz Aktivieren",
    deactivateFrequency: "Frequenz Deaktivieren",
    frequencyPlaying: "Frequenzwelle Aktiv",
    pillarsTitle: "Die Vier Säulen von Lumina",
    pillars: [
      {
        title: "Himmlisches Astrolabium",
        desc: "Verfolgen Sie die Mondphasen und den Durchgang des Mondes durch die zwölf Sternzeichen. Erfahren Sie, welche biologischen Tore und Organe aktuell energetisch geladen sind.",
        detail: "Jeden Monat, wenn der Mond in dem Sternzeichen steht, in dem Sie geboren wurden (Ihr Sonnen- oder Mondzeichen), steigt ein mikroskopischer Keim (das Christus-Öl oder die Heilige Sekretion) aus dem Gehirn (Cerebrum) die Wirbelsäule hinab."
      },
      {
        title: "Heiligtum der Aszension",
        desc: "Geführte Meditation, Atemarbeit und Solfeggio-Audio, um den Aufstieg der Energie durch die 33 Wirbel der Wirbelsäule zu erleichtern.",
        detail: "Durch das Bewahren und Anheben dieser Lebensenergie steigt sie zurück zur Medulla Oblongata auf, aktiviert die Zirbeldrüse (Pineal) und die Hypophyse (Pituitary) und erleuchtet den Sehhügel (Optic Thalamus - die Kammer des 'Dritten Auges') — was zu spirituellem Erwachen führt."
      },
      {
        title: "Heiliger Zeitlinienkalender",
        desc: "Ein personalisierter 6-Monats-Kalender, der die genauen Zeiträume berechnet, in denen Ihre biologische und spirituelle Energie Spitzenwerte erreicht.",
        detail: "Erhalten Sie Echtzeit-Erinnerungen und Push-Benachrichtigungen auf Mobilgeräten oder Desktops. Exportieren Sie Zyklen einfach als ICS-Datei für Google Calendar oder Apple iCal."
      },
      {
        title: "Heilige Wissenschaft & Etymologie",
        desc: "Die Vereinigung von Physiologie und esoterischen Schriften. Verstehen Sie die wahre Bedeutung der Alchemie in Religionen, Mythen und alten Kulturen.",
        detail: "Entdecken Sie, wie das Claustrum, die Liquorflüssigkeit (CSF) und der Optic Thalamus direkt mit mit biblischen Passagen wie Lukas 11:34 und Genesis 32:30 (Peniel/Zirbeldrüse) korrelieren."
      }
    ],
    features: {
      zodiacWheel: {
        title: "Zodiak & Anatomie",
        desc: "Interaktives Zodiak-Rad, das den zwölf Hirnnerven und Körperbereichen zugeordnet ist."
      },
      solfeggioAudio: {
        title: "Solfeggio-Schwingung",
        desc: "Integrierte binaurale Beats und Solfeggio-Frequenzen für tiefe Meditation."
      },
      icsExport: {
        title: "Kalenderintegration",
        desc: "Exportieren Sie Ihre Zyklusdaten direkt in Google, Apple oder Outlook Kalender."
      }
    },
    screens: {
      screen1: { title: "Das Himmlische Astrolabium", desc: "Interaktives Zodiak- & Anatomie-Rad, das die Monddurchgänge anzeigt." },
      screen2: { title: "Alchemistisches Heiligtum", desc: "Countdown zur nächsten Sekretionsausrichtung und Atemfrequenz-Tracker." },
      screen3: { title: "Heilige Zeitlinie", desc: "Der 6-Monats-Sekretionskalender und das benutzerdefinierte Benachrichtigungsfeld." },
      screen4: { title: "Heilige Wissenschaft", desc: "Die anatomischen Strukturen und esoterischen Schriften entschlüsselt." },
      screen5: { title: "Kosmische Übersicht", desc: "Das Haupt-Dashboard, das alle kosmischen und biologischen Zyklen integriert." }
    }
  }
};

const Lumina = () => {
  const { language } = useLanguage();
  const t = localTranslations[language] || localTranslations.en;

  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedFreq, setSelectedFreq] = useState<'f396' | 'f528' | 'f963'>('f528');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [breathPhase, setBreathPhase] = useState<'idle' | 'in' | 'hold1' | 'out' | 'hold2'>('idle');
  const [breathProgress, setBreathProgress] = useState<number>(0);
  const [breathSecondsLeft, setBreathSecondsLeft] = useState<number>(4);

  // Guided breathing configuration (4-4-4-4 Box Breathing)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      if (breathPhase === 'idle') {
        setBreathPhase('in');
        setBreathSecondsLeft(4);
        setBreathProgress(0);
      }

      interval = setInterval(() => {
        setBreathSecondsLeft((prev) => {
          if (prev <= 1) {
            // Transition phase
            setBreathPhase((curr) => {
              switch (curr) {
                case 'in': return 'hold1';
                case 'hold1': return 'out';
                case 'out': return 'hold2';
                case 'hold2': return 'in';
                default: return 'in';
              }
            });
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setBreathPhase('idle');
      setBreathSecondsLeft(4);
      setBreathProgress(0);
    }

    return () => clearInterval(interval);
  }, [isPlaying, breathPhase]);

  // Smooth breath progress effect (purely visual)
  useEffect(() => {
    let animFrame: number;
    if (isPlaying && breathPhase !== 'idle') {
      const startTime = Date.now();
      const duration = 4000; // 4 seconds per phase

      const updateProgress = () => {
        const elapsed = (Date.now() - startTime) % duration;
        const ratio = elapsed / duration;

        if (breathPhase === 'in') {
          setBreathProgress(ratio * 100);
        } else if (breathPhase === 'hold1') {
          setBreathProgress(100);
        } else if (breathPhase === 'out') {
          setBreathProgress((1 - ratio) * 100);
        } else if (breathPhase === 'hold2') {
          setBreathProgress(0);
        }

        animFrame = requestAnimationFrame(updateProgress);
      };

      animFrame = requestAnimationFrame(updateProgress);
    } else {
      setBreathProgress(0);
    }

    return () => cancelAnimationFrame(animFrame);
  }, [isPlaying, breathPhase]);

  const desktopScreens = [
    { url: '/images/lumina/lumina_1.png', key: 'screen1' },
    { url: '/images/lumina/lumina_2.png', key: 'screen2' },
    { url: '/images/lumina/lumina_3.png', key: 'screen3' },
    { url: '/images/lumina/lumina_4.png', key: 'screen4' },
    { url: '/images/lumina/lumina_5.png', key: 'screen5' }
  ];

  const mobileScreens = [
    { url: '/images/lumina/lumina_mobile_1.png', key: 'screen1' },
    { url: '/images/lumina/lumina_mobile_2.png', key: 'screen2' },
    { url: '/images/lumina/lumina_mobile_3.png', key: 'screen3' },
    { url: '/images/lumina/lumina_mobile_4.png', key: 'screen4' },
    { url: '/images/lumina/lumina_mobile_5.png', key: 'screen5' }
  ];

  const currentScreens = activeTab === 'desktop' ? desktopScreens : mobileScreens;

  const getBreathPhaseText = () => {
    switch (breathPhase) {
      case 'in': return t.breatheState.in;
      case 'hold1':
      case 'hold2': return t.breatheState.hold;
      case 'out': return t.breatheState.out;
      default: return t.breatheState.idle;
    }
  };

  const getFreqDetail = () => {
    switch (selectedFreq) {
      case 'f396': return '396Hz: Helps clear negative subconscious beliefs, shame, and survival fears. Aligns with the Root chakra.';
      case 'f963': return '963Hz: The frequency of divine connection, crown chakra awakening, and cosmic unity consciousness.';
      default: return '528Hz: The frequency of DNA transformation, repair, clarity of mind, and physical wellness.';
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-amber-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Back Link */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-cosmic transition-colors group font-mystical">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {t.backToHome}
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="outline" className="px-4 py-1.5 border-amber-500/50 text-amber-500 bg-amber-500/5 font-semibold text-sm">
              <Sparkles className="w-3.5 h-3.5 mr-2 animate-spin-slow" />
              {t.heroBadge}
            </Badge>

            <h1 className="font-cosmic text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                LUMINA
              </span>
              <br />
              <span className="text-2xl md:text-4xl text-foreground font-mystical tracking-normal">
                Sacred Secretion Calendar
              </span>
            </h1>

            <p className="font-mystical text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t.subtitle}
            </p>

            {/* Quick Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-card/40 backdrop-blur-sm border border-border/40 hover:border-amber-500/20 transition-all rounded-xl p-4 flex flex-col gap-2">
                <Compass className="w-6 h-6 text-amber-400" />
                <span className="font-cosmic font-bold text-sm">{t.features.zodiacWheel.title}</span>
                <span className="font-mystical text-xs text-muted-foreground">{t.features.zodiacWheel.desc}</span>
              </div>
              <div className="bg-card/40 backdrop-blur-sm border border-border/40 hover:border-amber-500/20 transition-all rounded-xl p-4 flex flex-col gap-2">
                <Volume2 className="w-6 h-6 text-purple-400" />
                <span className="font-cosmic font-bold text-sm">{t.features.solfeggioAudio.title}</span>
                <span className="font-mystical text-xs text-muted-foreground">{t.features.solfeggioAudio.desc}</span>
              </div>
              <div className="bg-card/40 backdrop-blur-sm border border-border/40 hover:border-amber-500/20 transition-all rounded-xl p-4 flex flex-col gap-2">
                <Calendar className="w-6 h-6 text-cosmic" />
                <span className="font-cosmic font-bold text-sm">{t.features.icsExport.title}</span>
                <span className="font-mystical text-xs text-muted-foreground">{t.features.icsExport.desc}</span>
              </div>
            </div>
          </div>

          {/* Logo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-card/60 backdrop-blur-md p-6 rounded-3xl border border-border/60 shadow-divine">
                <img 
                  src="/images/lumina/lumina-logo.png" 
                  alt="Lumina App Icon" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl drop-shadow-2xl animate-cosmic-pulse"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Guided breathing & frequencies simulation section */}
        <section className="mb-24 bg-card/30 backdrop-blur-md border border-border/60 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="flex items-center gap-2 text-amber-400">
                <Activity className="w-5 h-5 animate-pulse" />
                <h2 className="font-cosmic text-xl font-bold tracking-wide uppercase">{t.solfeggioTitle}</h2>
              </div>
              <p className="font-mystical text-muted-foreground text-base">
                {t.solfeggioDesc}
              </p>

              {/* Freq selection selector */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => { setSelectedFreq('f396'); if(isPlaying) setIsPlaying(false); }}
                    className={`px-4 py-2 rounded-lg font-cosmic text-xs transition-all border ${selectedFreq === 'f396' ? 'bg-amber-500/10 border-amber-500 text-amber-400 glow-accent' : 'bg-muted/40 border-border text-muted-foreground hover:text-foreground'}`}
                  >
                    396 Hz
                  </button>
                  <button 
                    onClick={() => { setSelectedFreq('f528'); if(isPlaying) setIsPlaying(false); }}
                    className={`px-4 py-2 rounded-lg font-cosmic text-xs transition-all border ${selectedFreq === 'f528' ? 'bg-amber-500/10 border-amber-500 text-amber-400 glow-accent' : 'bg-muted/40 border-border text-muted-foreground hover:text-foreground'}`}
                  >
                    528 Hz
                  </button>
                  <button 
                    onClick={() => { setSelectedFreq('f963'); if(isPlaying) setIsPlaying(false); }}
                    className={`px-4 py-2 rounded-lg font-cosmic text-xs transition-all border ${selectedFreq === 'f963' ? 'bg-amber-500/10 border-amber-500 text-amber-400 glow-accent' : 'bg-muted/40 border-border text-muted-foreground hover:text-foreground'}`}
                  >
                    963 Hz
                  </button>
                </div>
                <p className="font-mystical text-sm text-primary/80 italic min-h-[40px]">
                  {getFreqDetail()}
                </p>
              </div>

              {/* Play Toggle Button */}
              <div className="pt-2">
                <Button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`px-6 py-5 rounded-xl font-cosmic text-sm font-semibold flex items-center gap-2.5 transition-all duration-300 ${isPlaying ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black shadow-lg shadow-amber-500/25'}`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      {t.deactivateFrequency}
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-black" />
                      {t.activateFrequency}
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Breathing Animation Canvas */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center py-6">
              <div className="relative flex items-center justify-center w-64 h-64">
                {/* Outermost pulsing ring */}
                <div 
                  className={`absolute rounded-full border border-amber-500/20 transition-all duration-500 ${isPlaying ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    transform: `scale(${1 + (breathProgress / 300)})`,
                    animation: isPlaying ? 'cosmic-pulse 4s ease-in-out infinite' : 'none'
                  }}
                />

                {/* Second pulsing ring */}
                <div 
                  className="absolute rounded-full bg-gradient-to-r from-amber-500/5 to-purple-500/5 border border-amber-500/10 transition-all"
                  style={{
                    width: '80%',
                    height: '80%',
                    transform: `scale(${1 + (breathProgress / 200)})`
                  }}
                />

                {/* Inner breathing circle */}
                <div 
                  className="absolute rounded-full bg-amber-500/10 border-2 border-amber-400 flex flex-col items-center justify-center transition-all shadow-mystical duration-300"
                  style={{
                    width: `${60 + (breathProgress * 0.4)}%`,
                    height: `${60 + (breathProgress * 0.4)}%`
                  }}
                >
                  <span className="font-cosmic text-sm font-black text-amber-300 drop-shadow-md">
                    {getBreathPhaseText()}
                  </span>
                  {isPlaying && (
                    <span className="font-cosmic text-2xl font-bold text-white mt-1">
                      {breathSecondsLeft}s
                    </span>
                  )}
                </div>

                {/* Wave indicator for Solfeggio sound */}
                {isPlaying && (
                  <div className="absolute -bottom-4 flex items-center justify-center gap-1.5 h-6">
                    <span className="text-xs font-cosmic text-amber-500 tracking-wider mr-1 animate-pulse">
                      {t.frequencyPlaying}
                    </span>
                    <div className="w-1 bg-amber-500 h-2 animate-pulse rounded-full" style={{ animationDelay: '0.1s', height: '14px' }}></div>
                    <div className="w-1 bg-amber-400 h-4 animate-pulse rounded-full" style={{ animationDelay: '0.3s', height: '20px' }}></div>
                    <div className="w-1 bg-amber-300 h-3 animate-pulse rounded-full" style={{ animationDelay: '0.5s', height: '16px' }}></div>
                    <div className="w-1 bg-amber-400 h-5 animate-pulse rounded-full" style={{ animationDelay: '0.2s', height: '22px' }}></div>
                    <div className="w-1 bg-amber-500 h-2 animate-pulse rounded-full" style={{ animationDelay: '0.4s', height: '12px' }}></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Showcase Selector */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-cosmic text-2xl md:text-4xl font-bold mb-2">
              {t.screenshotTitle}
            </h2>
            <p className="font-mystical text-muted-foreground">
              {t.screenshotDesc}
            </p>

            {/* Layout Toggle Buttons */}
            <div className="flex justify-center mt-6">
              <div className="bg-card/50 backdrop-blur-md p-1 border border-border/60 rounded-full flex gap-1 shadow-mystical">
                <button
                  onClick={() => setActiveTab('desktop')}
                  className={`px-5 py-2.5 rounded-full font-cosmic text-xs font-semibold transition-all duration-300 ${
                    activeTab === 'desktop'
                      ? 'bg-amber-500 text-black shadow-md scale-105'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t.desktopView}
                </button>
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`px-5 py-2.5 rounded-full font-cosmic text-xs font-semibold transition-all duration-300 ${
                    activeTab === 'mobile'
                      ? 'bg-amber-500 text-black shadow-md scale-105'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t.mobileView}
                </button>
              </div>
            </div>
          </div>

          {/* Screenshots grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 ${activeTab === 'desktop' ? 'md:grid-cols-3 lg:grid-cols-5' : 'md:grid-cols-3 lg:grid-cols-5'} gap-6`}>
            {currentScreens.map((screen, index) => {
              const itemKey = screen.key as keyof typeof t.screens;
              const screenText = t.screens[itemKey] || { title: `Screen ${index+1}`, desc: "" };
              
              return (
                <Card key={index} className="bg-card/40 backdrop-blur-sm border border-border/40 overflow-hidden group hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/5">
                  <CardContent className="p-0">
                    <div className="aspect-[9/16] overflow-hidden relative bg-black/40">
                      <img 
                        src={screen.url} 
                        alt={screenText.title}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                        <h4 className="font-cosmic text-sm font-bold text-amber-400 mb-1 flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" />
                          {screenText.title}
                        </h4>
                        <p className="font-mystical text-[11px] leading-snug text-white/90">{screenText.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Pillars / Sacred Anatomy details */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="font-cosmic text-3xl font-bold text-cosmic-gradient">{t.pillarsTitle}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.pillars.map((pillar, index) => {
              const icons = [
                <Compass className="w-6 h-6 text-amber-400" />,
                <Award className="w-6 h-6 text-purple-400" />,
                <Calendar className="w-6 h-6 text-cosmic" />,
                <BookMarked className="w-6 h-6 text-emerald-400" />
              ];
              
              return (
                <div 
                  key={index}
                  className="bg-card/40 backdrop-blur-sm border border-border/40 rounded-2xl p-6 hover:border-amber-500/20 transition-all text-left space-y-4 shadow-mystical"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-card border border-border/60 flex items-center justify-center">
                      {icons[index]}
                    </div>
                    <h3 className="font-cosmic text-lg font-bold text-amber-300">{pillar.title}</h3>
                  </div>
                  <p className="font-mystical text-muted-foreground text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                  <div className="border-t border-border/40 pt-3">
                    <p className="font-mystical text-xs text-primary/80 leading-relaxed italic">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Lumina;
