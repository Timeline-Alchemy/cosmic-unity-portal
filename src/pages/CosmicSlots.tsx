import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Gamepad2, 
  Download, 
  ShieldCheck, 
  CreditCard, 
  Users, 
  ArrowLeft, 
  Info,
  CheckCircle,
  HelpCircle,
  FileText,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const CosmicSlots = () => {
  const { language } = useLanguage();
  const [activeImg, setActiveImg] = React.useState(0);
  const screenshots = [
    '/images/02-cosmic.jpg',
    '/images/03-cosmic.jpg',
    '/images/04-cosmic.jpg',
    '/images/06-cosmic.jpg'
  ];
  
  const content = {
    en: {
      title: 'Cosmic Slots',
      subtitle: 'Spin the slots to align the cosmic reels and synchronize with the optimal timeline.',
      playOnline: 'Play Web Version',
      downloadApk: 'Download Android APK',
      purposeTitle: 'Application Purpose & Details',
      purposeDesc: 'Cosmic Slots is a single-player, space-themed mobile slot machine game. It reimagines classic slot mechanics with a cosmic and mystical aesthetic. Players spin reels featuring planets, stars, and celestial symbols. Our goal is to offer a relaxed, highly visual entertainment experience combined with casual slot strategy.',
      googleAuthTitle: 'Google Sign-In & Play Games Services Integration',
      googleAuthDesc: 'To provide a unified experience across the Cosmic Casino Collection, Cosmic Slots uses Google Sign-In and Google Play Games Services. This integration serves to:',
      authPoints: [
        'Securely authenticate your player profile without requiring manual account registration.',
        'Keep your Stellar Credits wallet balance synchronized with other games in the collection.',
        'Track your daily mission completions, user level, and reward history.',
        'Submit your slot achievements and jackpot wins to the global leaderboards.'
      ],
      gdprTitle: 'Privacy, Data Protection & Safety',
      gdprDesc: 'Your privacy is paramount. We do not sell or share player personal data. Your Google credentials are used solely to store your unique in-game progress. Cosmic Slots does not support real-money gambling. No real money can be wagered or won. All currency (Stellar Credits) is virtual and intended for entertainment purposes only.',
      featuresTitle: 'Key Game Features',
      features: [
        { title: 'Unified Credit Balance', desc: 'Use credits won in Cosmic Slots directly in Poker or Blackjack, and vice versa.' },
        { title: 'Interactive Reels & Paylines', desc: 'Spin reels with unique cosmic symbols and choose from multiple paylines.' },
        { title: 'Daily Spiritual Goals', desc: 'Complete daily meditation or gameplay milestones to receive free credits.' },
        { title: 'Nebula Animations', desc: 'Enjoy gorgeous fluid backgrounds and galaxy animations with every winning spin.' }
      ],
      specsTitle: 'Application Information',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        supportEmail: 'dennis@timeline-alchemy.com',
        platform: 'Android 8.0+ / Web Browser',
        ageRating: 'PEGI 3 / Google Play Content Rating 3+',
        currentVersion: 'v1.0.8',
        license: 'Free-to-play with optional virtual purchases'
      },
      linksTitle: 'Legal & Documentation',
      privacyBtn: 'View Privacy Policy',
      termsBtn: 'View Terms of Service',
      backToCasino: 'Back to Casino Collection'
    },
    nl: {
      title: 'Cosmic Slots',
      subtitle: 'Draai de slots om de kosmische rollen uit te lijnen en te synchroniseren met de optimale tijdlijn.',
      playOnline: 'Speel Webversie',
      downloadApk: 'Download Android APK',
      purposeTitle: 'Doel van de Applicatie & Details',
      purposeDesc: 'Cosmic Slots is een single-player mobiel gokkastspel met een ruimtethema. Het combineert klassieke gokkastmechanieken met een kosmische en mystieke esthetiek. Spelers draaien rollen met planeten, sterren en hemellichamen. Ons doel is om een ontspannende en visueel verbluffende entertainmentervaring te bieden.',
      googleAuthTitle: 'Integratie met Google Sign-In & Play Games-services',
      googleAuthDesc: 'Om een eenduidige ervaring te garanderen binnen de Cosmic Casino Collectie, maakt Cosmic Slots gebruik van Google Sign-In en Google Play Games-services. Dit wordt gebruikt om:',
      authPoints: [
        'Je spelersprofiel veilig te verifiëren zonder dat handmatige registratie nodig is.',
        'Je Stellar Credits saldo synchroon te houden met de andere games in de collectie.',
        'Je dagelijkse missies, spelersniveau en beloningsgeschiedenis bij te houden.',
        'Je behaalde jackpots en prestaties door te geven aan de wereldwijde leaderboards.'
      ],
      gdprTitle: 'Privacy, Gegevensbescherming & Veiligheid',
      gdprDesc: 'Je privacy staat voorop. We verkopen of delen geen spelersgegevens. Je Google-accountgegevens worden alleen gebruikt om je unieke spelvoortgang op te slaan. Cosmic Slots biedt geen gokken met echt geld aan. Er kan geen echt geld worden ingezet of gewonnen. Alle Stellar Credits zijn puur virtueel.',
      featuresTitle: 'Belangrijkste Spelfuncties',
      features: [
        { title: 'Gedeeld Kredietsaldo', desc: 'Gebruik gewonnen credits direct in Blackjack of Poker, en andersom.' },
        { title: 'Interactieve Rollen & Lijnen', desc: 'Draai rollen met unieke kosmische symbolen en kies uit meerdere winlijnen.' },
        { title: 'Dagelijkse Spirituele Doelen', desc: 'Behaal dagelijkse doelen om gratis Stellar Credits te claimen.' },
        { title: 'Nebula Animaties', desc: 'Geniet van prachtige bewegende achtergronden en galaxy-animaties bij elke winst.' }
      ],
      specsTitle: 'Applicatie Informatie',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        supportEmail: 'dennis@timeline-alchemy.com',
        platform: 'Android 8.0+ / Webbrowser',
        ageRating: 'PEGI 3 / Google Play Content Rating 3+',
        currentVersion: 'v1.0.8',
        license: 'Gratis te spelen met optionele virtuele aankopen'
      },
      linksTitle: 'Wettelijk & Documentatie',
      privacyBtn: 'Bekijk Privacybeleid',
      termsBtn: 'Bekijk Algemene Voorwaarden',
      backToCasino: 'Terug naar Casino Collectie'
    },
    de: {
      title: 'Cosmic Slots',
      subtitle: 'Drehen Sie die Walzen, um die kosmischen Rollen auszurichten und sich mit der optimalen Zeitlinie zu synchronisieren.',
      playOnline: 'Web-Version spielen',
      downloadApk: 'Android APK herunterladen',
      purposeTitle: 'Zweck der Anwendung & Details',
      purposeDesc: 'Cosmic Slots ist ein kosmisches Spielautomatenspiel für Einzelspieler. Es interpretiert klassische Slot-Mechaniken mit einer kosmischen und mystischen Ästhetik neu. Spieler drehen Walzen mit Planeten, Sternen und himmlischen Symbolen. Unser Ziel ist es, ein entspannendes, visuell ansprechendes Unterhaltungserlebnis zu bieten.',
      googleAuthTitle: 'Integration von Google Sign-In & Play Games Services',
      googleAuthDesc: 'Um ein einheitliches Erlebnis in der gesamten Cosmic Casino-Sammlung zu gewährleisten, verwendet Cosmic Slots Google Sign-In und Google Play Spieledienste. Diese Integration dient dazu:',
      authPoints: [
        'Ihr Spielerprofil sicher zu authentifizieren, ohne dass eine manuelle Registrierung erforderlich ist.',
        'Ihr Stellar Credits-Guthaben synchron mit den anderen Spielen der Sammlung zu halten.',
        'Ihre täglichen Missionserfolge, Ihr Spielerlevel und Ihren Belohnungsverlauf zu speichern.',
        'Ihre Jackpot-Gewinne und Erfolge in die globalen Bestenlisten einzutragen.'
      ],
      gdprTitle: 'Datenschutz, Datensicherheit & Sicherheit',
      gdprDesc: 'Ihre Privatsphäre ist uns wichtig. Wir verkaufen oder teilen keine Spielerdaten. Ihre Google-Anmeldedaten werden ausschließlich zur Speicherung Ihres Spielstands verwendet. Cosmic Slots unterstützt kein Echtgeld-Glücksspiel. Es kann kein echtes Geld gesetzt oder gewonnen werden. Alle Credits sind rein virtuell.',
      featuresTitle: 'Wichtigste Spielfunktionen',
      features: [
        { title: 'Einheitliches Credit-Guthaben', desc: 'Verwenden Sie Ihre in Cosmic Slots gewonnenen Credits direkt in Poker oder Blackjack.' },
        { title: 'Interaktive Walzen & Gewinnlinien', desc: 'Drehen Sie Walzen mit einzigartigen kosmischen Symbolen und wählen Sie aus mehreren Gewinnlinien.' },
        { title: 'Tägliche spirituelle Ziele', desc: 'Erreichen Sie tägliche Meilensteine, um kostenlose Credits zu erhalten.' },
        { title: 'Nebula-Animationen', desc: 'Genießen Sie bei jedem Gewinn wunderschöne, flüssige Hintergründe und Galaxie-Animationen.' }
      ],
      specsTitle: 'Anwendungsinformationen',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        supportEmail: 'dennis@timeline-alchemy.com',
        platform: 'Android 8.0+ / Webbrowser',
        ageRating: 'PEGI 3 / Google Play Content Rating 3+',
        currentVersion: 'v1.0.8',
        license: 'Kostenlos spielbar mit optionalen virtuellen Käufen'
      },
      linksTitle: 'Rechtliches & Dokumentation',
      privacyBtn: 'Datenschutzerklärung anzeigen',
      termsBtn: 'Nutzungsbedingungen anzeigen',
      backToCasino: 'Zurück zur Casino-Sammlung'
    }
  };

  const t = content[language as keyof typeof content] || content.en;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/casino-collection" className="inline-flex items-center text-sm text-muted-foreground hover:text-cosmic transition-colors duration-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.backToCasino}
            </Link>
          </div>

          {/* Hero Section */}
          <div className="bg-card/30 border border-border/50 rounded-3xl p-8 md:p-12 mb-12 backdrop-blur-md relative overflow-hidden shadow-cosmic">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-black/40 rounded-3xl p-4 flex items-center justify-center border border-purple-500/20 shadow-mystical">
                <img 
                  src="/images/universal-slots.png" 
                  alt="Cosmic Slots Logo" 
                  className="w-full h-full object-contain rounded-2xl drop-shadow-2xl"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h1 className="font-cosmic text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-mystical-gradient">Cosmic</span> <span className="text-cosmic-gradient">Slots</span>
                </h1>
                <p className="font-mystical text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
                  {t.subtitle}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button asChild className="cosmic-hover bg-cosmic-gradient border-none text-white px-6 py-5">
                    <a href="https://slots.cosmic-casino.one/play" target="_blank" rel="noopener noreferrer">
                      <Gamepad2 className="w-4 h-4 mr-2 animate-bounce" />
                      {t.playOnline}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-purple-500/30 text-white hover:bg-purple-950/20 px-6 py-5">
                    <a href="https://slots.cosmic-casino.one/play" target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      {t.downloadApk}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left & Center: App Description and Auth verification info */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* App Screenshot Showcase */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-purple-400" />
                  Gameplay Preview
                </h3>
                <div className="relative rounded-xl overflow-hidden border border-border/40 shadow-mystical bg-black/40 flex items-center justify-center h-[500px] group">
                  <img 
                    src={screenshots[activeImg]} 
                    alt={`Cosmic Slots Gameplay Screenshot ${activeImg + 1}`} 
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                  />
                  
                  {screenshots.length > 1 && (
                    <>
                      <button 
                        onClick={() => setActiveImg((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full border border-border/40 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setActiveImg((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full border border-border/40 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 px-3 py-1 rounded-full text-xs text-gray-300 border border-border/40">
                        {activeImg + 1} / {screenshots.length}
                      </div>
                    </>
                  )}
                </div>
                
                {screenshots.length > 1 && (
                  <div className="flex gap-3 mt-4 justify-center overflow-x-auto py-2">
                    {screenshots.map((src, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImg(index)}
                        className={`relative w-20 h-28 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                          activeImg === index 
                            ? 'border-purple-500 ring-2 ring-purple-500/30' 
                            : 'border-border/40 opacity-70 hover:opacity-100'
                        }`}
                      >
                        <img 
                          src={src} 
                          alt={`Thumbnail ${index + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Purpose Section */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                <h2 className="font-cosmic text-2xl font-bold text-cosmic-gradient mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-purple-400" />
                  {t.purposeTitle}
                </h2>
                <p className="font-mystical text-muted-foreground leading-relaxed mb-6">
                  {t.purposeDesc}
                </p>
                <div className="border-t border-border/30 pt-6">
                  <h3 className="font-cosmic text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-purple-400" />
                    {t.googleAuthTitle}
                  </h3>
                  <p className="font-mystical text-muted-foreground text-sm leading-relaxed mb-4">
                    {t.googleAuthDesc}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-mystical text-muted-foreground">
                    {t.authPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* GDPR and Safety Disclaimer */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                <h2 className="font-cosmic text-2xl font-bold text-cosmic-gradient mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-purple-400" />
                  {t.gdprTitle}
                </h2>
                <p className="font-mystical text-muted-foreground leading-relaxed">
                  {t.gdprDesc}
                </p>
              </div>

              {/* Features grid */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                <h2 className="font-cosmic text-2xl font-bold text-white mb-6">
                  {t.featuresTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t.features.map((feat, idx) => (
                    <div key={idx} className="bg-background/40 border border-border/40 p-5 rounded-xl">
                      <h4 className="font-cosmic font-semibold text-purple-300 mb-2">{feat.title}</h4>
                      <p className="font-mystical text-sm text-muted-foreground">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Technical specifications and legal document quicklinks */}
            <div className="space-y-8">
              
              {/* App Specifications */}
              <div className="bg-card/40 border border-border/40 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-bold text-white mb-4">
                  {t.specsTitle}
                </h3>
                <div className="space-y-4 text-sm font-mystical">
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Developer</span>
                    <span className="text-white font-medium">{t.specs.developer}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Support</span>
                    <a href={`mailto:${t.specs.supportEmail}`} className="text-purple-400 hover:underline">{t.specs.supportEmail}</a>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="text-white font-medium">{t.specs.platform}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Age Rating</span>
                    <span className="text-white font-medium">{t.specs.ageRating}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Version</span>
                    <span className="text-white font-medium">{t.specs.currentVersion}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">License</span>
                    <span className="text-white font-medium text-right max-w-[150px]">{t.specs.license}</span>
                  </div>
                </div>
              </div>

              {/* Document Quicklinks */}
              <div className="bg-card/40 border border-border/40 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  {t.linksTitle}
                </h3>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start border-purple-500/20 text-muted-foreground hover:text-white hover:bg-purple-950/10">
                    <Link to="/privacy-policy">
                      <ShieldCheck className="w-4 h-4 mr-2 text-purple-400" />
                      {t.privacyBtn}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start border-purple-500/20 text-muted-foreground hover:text-white hover:bg-purple-950/10">
                    <Link to="/terms-of-service">
                      <FileText className="w-4 h-4 mr-2 text-purple-400" />
                      {t.termsBtn}
                    </Link>
                  </Button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CosmicSlots;
