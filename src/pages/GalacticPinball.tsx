import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Gamepad2, 
  Download, 
  Smartphone,
  ShieldCheck, 
  CreditCard, 
  Users, 
  ArrowLeft, 
  Info,
  CheckCircle,
  FileText,
  ChevronLeft,
  ChevronRight,
  Youtube
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const GalacticPinball = () => {
  const { language } = useLanguage();
  const [activeImg, setActiveImg] = React.useState(0);
  const screenshots = [
    '/images/02-pinball.png'
  ];
  
  const content = {
    en: {
      title: 'Galactic Pinball',
      subtitle: 'Launch the ball through cosmic portals and activate the flippers of abundance.',
      playOnline: 'Play Web Version',
      androidApp: 'Open Android App',
      downloadApk: 'Google Play Store',
      videoTitle: 'Gameplay Trailer',
      videoDesc: 'Watch the gameplay overview and explore the cosmic pinball physics in action.',
      purposeTitle: 'Application Purpose & Details',
      purposeDesc: 'Galactic Pinball is a single-player, space-themed mobile pinball game. It combines realistic pinball physics with cosmic mechanics, gravitational anomalies, and sacred geometry. Players launch their ball into the celestial arena, hitting bumpers, triggers, and navigating through wormholes to rack up high scores and accumulate Stellar Credits.',
      googleAuthTitle: 'Google Sign-In & Play Games Services Integration',
      googleAuthDesc: 'To provide a smooth gaming experience, Galactic Pinball uses Google Sign-In and Google Play Games Services. This integration serves to:',
      authPoints: [
        'Securely authenticate your player profile without requiring manual account registration.',
        'Securely save your high scores, mission achievements, and progress to the cloud.',
        'Track your daily mission completions, player level, and reward history.',
        'Submit your pinball high scores to the global leaderboards to compete with other players.'
      ],
      gdprTitle: 'Privacy, Data Protection & Safety',
      gdprDesc: 'Your privacy is paramount. We do not sell or share player personal data. Your Google credentials are used solely to store your unique in-game progress. Galactic Pinball does not support real-money gambling. No real money can be wagered or won. All currency (Stellar Credits) is virtual and intended for entertainment purposes only.',
      featuresTitle: 'Key Game Features',
      features: [
        { title: 'Offline & Online Play', desc: 'Enjoy full gameplay whether connected to the network or launching balls offline.' },
        { title: 'Cosmic Mechanics & Portals', desc: 'Navigate dynamic tables with black holes, wormholes, and gravitational fields.' },
        { title: 'Daily Missions', desc: 'Complete daily pinball objectives to claim free Stellar Credits.' },
        { title: 'Neon Sacred Geometry', desc: 'Gorgeous visual elements showing rotating geometric grids and nebula effects.' }
      ],
      specsTitle: 'Application Information',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        supportEmail: 'info@timeline-alchemy.com',
        platform: 'Android 8.0+ / Web Browser',
        ageRating: 'PEGI 3',
        license: 'Free (Contains Ads & In-App Purchases)'
      },
      linksTitle: 'Legal & Documentation',
      privacyBtn: 'View Privacy Policy',
      termsBtn: 'View Terms of Service',
      backToCasino: 'Back to Casino Collection'
    },
    nl: {
      title: 'Galactic Pinball',
      subtitle: 'Lanceer de bal door kosmische portalen en activeer de flippers van overvloed.',
      playOnline: 'Speel Webversie',
      androidApp: 'Open Android App',
      downloadApk: 'Google Play Store',
      videoTitle: 'Gameplay Trailer',
      videoDesc: 'Bekijk de gameplay-impressie en zie de kosmische pinball-fysica in actie.',
      purposeTitle: 'Doel van de Applicatie & Details',
      purposeDesc: 'Galactic Pinball is een single-player mobiel pinballspel met een ruimtethema. Het combineert realistische fysica met kosmische spelelementen, zwaartekrachtafwijkingen en heilige geometrie. Spelers lanceren hun bal in de galactische arena, activeren bumpers en reizen door wormgaten om hoge scores en Stellar Credits te verdienen.',
      googleAuthTitle: 'Integratie met Google Sign-In & Play Games-services',
      googleAuthDesc: 'Om een soepele game-ervaring te garanderen, maakt Galactic Pinball gebruik van Google Sign-In en Google Play Games-services. Dit wordt gebruikt om:',
      authPoints: [
        'Je spelersprofiel veilig te verifiëren zonder dat handmatige registratie nodig is.',
        'Je topscores, behaalde missies en voortgang veilig op te slaan in de cloud.',
        'Je dagelijkse missies, spelersniveau en beloningsgeschiedenis bij te houden.',
        'Je topscores door te geven aan de wereldwijde leaderboards om te concurreren met andere spelers.'
      ],
      gdprTitle: 'Privacy, Gegevensbescherming & Veiligheid',
      gdprDesc: 'Je privacy staat voorop. We verkopen of delen geen spelersgegevens. Je Google-accountgegevens worden alleen gebruikt om je unieke spelvoortgang op te slaan. Galactic Pinball biedt geen gokken met echt geld aan. Er kan geen echt geld worden ingezet of gewonnen. Alle Stellar Credits zijn puur virtueel.',
      featuresTitle: 'Belangrijkste Spelfuncties',
      features: [
        { title: 'Offline & Online Spelen', desc: 'Geniet van de volledige gameplay, of je nu verbonden bent met het netwerk of offline speelt.' },
        { title: 'Kosmische Mechanieken', desc: 'Navigeer door tafels met wormgaten, zwarte gaten en zwaartekrachtvelden.' },
        { title: 'Dagelijkse Missies', desc: 'Voltooi dagelijkse pinballdoelen om gratis Stellar Credits te claimen.' },
        { title: 'Neon Heilige Geometrie', desc: 'Prachtige bewegende achtergronden, roterende geometrische rasters en nebula-effecten.' }
      ],
      specsTitle: 'Applicatie Informatie',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        supportEmail: 'info@timeline-alchemy.com',
        platform: 'Android 8.0+ / Webbrowser',
        ageRating: 'PEGI 3',
        license: 'Gratis (Bevat advertenties & in-app aankopen)'
      },
      linksTitle: 'Wettelijk & Documentatie',
      privacyBtn: 'Bekijk Privacybeleid',
      termsBtn: 'Bekijk Algemene Voorwaarden',
      backToCasino: 'Terug naar Casino Collectie'
    },
    de: {
      title: 'Galactic Pinball',
      subtitle: 'Schießen Sie die Kugel durch kosmische Portale und aktivieren Sie die Flipper der Fülle.',
      playOnline: 'Web-Version spielen',
      androidApp: 'Android App öffnen',
      downloadApk: 'Google Play Store',
      videoTitle: 'Gameplay-Trailer',
      videoDesc: 'Sehen Sie sich die Gameplay-Übersicht an und erleben Sie die kosmische Pinball-Physik in Aktion.',
      purposeTitle: 'Zweck der Anwendung & Details',
      purposeDesc: 'Galactic Pinball ist ein kosmisches Flipper-Spiel für Einzelspieler. Es kombiniert realistische Flipper-Physik mit kosmischen Spielmechaniken, Gravitationsanomalien und heiliger Geometrie. Spieler schießen ihre Kugel in die Himmelsarena, treffen Bumper, Trigger und navigieren durch Wurmlöcher, um Highscores und Stellar Credits zu sammeln.',
      googleAuthTitle: 'Integration von Google Sign-In & Play Games Services',
      googleAuthDesc: 'Um ein reibungsloses Spielerlebnis zu gewährleisten, verwendet Galactic Pinball Google Sign-In und Google Play Spieledienste. Diese Integration dient dazu:',
      authPoints: [
        'Ihr Spielerprofil sicher zu authentifizieren, ohne dass eine manuelle Registrierung erforderlich ist.',
        'Ihre Highscores, Erfolge und Spielstände sicher in der Cloud zu speichern.',
        'Ihre täglichen Missionserfolge, Ihr Spielerlevel und Ihr Guthaben zu speichern.',
        'Ihre Highscores in die weltweiten Bestenlisten einzutragen, um sich mit anderen Spielern zu messen.'
      ],
      gdprTitle: 'Datenschutz, Datensicherheit & Sicherheit',
      gdprDesc: 'Ihre Privatsphäre ist uns wichtig. Wir verkaufen oder teilen keine Spielerdaten. Ihre Google-Anmeldedaten werden ausschließlich zur Speicherung Ihres Spielstands verwendet. Galactic Pinball unterstützt kein Echtgeld-Glücksspiel. Es kann kein echtes Geld gesetzt oder gewonnen werden. Alle Credits sind rein virtuell.',
      featuresTitle: 'Wichtigste Spielfunktionen',
      features: [
        { title: 'Offline- & Online-Modus', desc: 'Genießen Sie das volle Gameplay, egal ob Sie online oder offline spielen.' },
        { title: 'Kosmische Flipper-Physik', desc: 'Erleben Sie realistische Physik mit Gravitationsanomalien und Portalen.' },
        { title: 'Tägliche Missionen', desc: 'Erreichen Sie tägliche Meilensteine, um kostenlose Stellar Credits zu erhalten.' },
        { title: 'Neon Heilige Geometrie', desc: 'Genießen Sie faszinierende visuelle Effekte mit geometrischen Rastern und Nebeln.' }
      ],
      specsTitle: 'Anwendungsinformationen',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        supportEmail: 'info@timeline-alchemy.com',
        platform: 'Android 8.0+ / Webbrowser',
        ageRating: 'PEGI 3',
        license: 'Kostenlos (Enthält Werbung & In-App-Käufe)'
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
                  src="/images/pinball-app-icon.png" 
                  alt="Galactic Pinball Logo" 
                  className="w-full h-full object-contain rounded-2xl drop-shadow-2xl"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h1 className="font-cosmic text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-mystical-gradient">Galactic</span> <span className="text-cosmic-gradient">Pinball</span>
                </h1>
                <p className="font-mystical text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
                  {t.subtitle}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button asChild className="cosmic-hover bg-cosmic-gradient border-none text-white px-6 py-5">
                    <a href="https://pinball.cosmic-casino.one/play" target="_blank" rel="noopener noreferrer">
                      <Gamepad2 className="w-4 h-4 mr-2 animate-bounce" />
                      {t.playOnline}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-purple-500/30 text-white hover:bg-purple-950/20 px-6 py-5">
                    <a href="https://timeline-alchemy.com/casino/galactic-pinball/play" target="_blank" rel="noopener noreferrer">
                      <Smartphone className="w-4 h-4 mr-2 animate-pulse" />
                      {t.androidApp}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-purple-500/30 text-white hover:bg-purple-950/20 px-6 py-5">
                    <a href="https://play.google.com/store/apps/details?id=com.timeline_alchemy.galactic_pinball" target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      {t.downloadApk}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left & Center: App Description and Details */}
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
                    alt={`Galactic Pinball Gameplay Screenshot ${activeImg + 1}`} 
                    className="max-h-full max-w-full object-contain transition-all duration-300 rounded-lg"
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
              </div>

              {/* Gameplay Video Showcase */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                <h2 className="font-cosmic text-2xl font-bold text-cosmic-gradient flex items-center gap-2 mb-4">
                  <Youtube className="w-6 h-6 text-red-500" />
                  {t.videoTitle}
                </h2>
                <p className="font-mystical text-muted-foreground text-sm mb-6">
                  {t.videoDesc}
                </p>
                <div className="relative w-full aspect-video rounded-xl border border-border/40 shadow-mystical bg-black/40 overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/GLPv07_bSUw"
                    title="Galactic Pinball Trailer"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
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
                    <a href={`mailto:${t.specs.supportEmail}`} className="text-purple-400 hover:underline underline decoration-dotted underline-offset-4">
                      {language === 'nl' ? 'contact via mail' : language === 'de' ? 'Kontakt per E-Mail' : 'contact via mail'}
                    </a>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="text-white font-medium">{t.specs.platform}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Age Rating</span>
                    <span className="text-white font-medium">{t.specs.ageRating}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Pricing & Ads</span>
                    <span className="text-white font-medium text-right max-w-[200px]">{t.specs.license}</span>
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

export default GalacticPinball;
