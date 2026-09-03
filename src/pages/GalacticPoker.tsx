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
  HelpCircle,
  FileText,
  ChevronLeft,
  ChevronRight,
  Youtube
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const GalacticPoker = () => {
  const { language } = useLanguage();
  const [activeImg, setActiveImg] = React.useState(0);
  const screenshots = [
    '/images/02-poker.jpg'
  ];
  
  const content = {
    en: {
      title: 'Galactic Poker',
      subtitle: 'Challenge the galaxy in this tactical celestial Texas Hold\'em.',
      playOnline: 'Play Web Version',
      androidApp: 'Open Android App',
      downloadApk: 'View Google Play Listing',
      videoTitle: 'Gameplay Trailer',
      videoDesc: 'Watch the gameplay overview and explore the cosmic alignment features in action.',
      purposeTitle: 'Application Purpose & Details',
      purposeDesc: 'Galactic Poker is a single-player, space-themed mobile card game. It adapts the traditional rules of Texas Hold\'em into a gorgeous futuristic setting. Players can test their card skills against computer opponents in cosmic environments. Our goal is to provide a rich, strategic offline and online poker experience featuring premium visuals.',
      googleAuthTitle: 'Google Sign-In & Play Games Services Integration',
      googleAuthDesc: 'To provide a smooth gaming experience, Galactic Poker uses Google Sign-In and Google Play Games Services. This integration is used strictly to:',
      authPoints: [
        'Securely authenticate your profile without requiring manual passwords.',
        'Securely save your game progress, level achievements, and stats to the cloud.',
        'Save your daily missions progress, player level, and gameplay statistics.',
        'Publish your poker high scores and wins to the global leaderboards so you can compete with other players.'
      ],
      gdprTitle: 'Privacy, Data Protection & Safety',
      gdprDesc: 'We value your privacy. We do not sell or share your personal data. The Google Sign-In profile is only used to manage your personal in-game save state. This game does not feature real-money gambling. No real money can be wagered, won, or paid out. All currency used in the game (Stellar Credits) is purely virtual.',
      featuresTitle: 'Key Game Features',
      features: [
        { title: 'Cloud Progress Sync', desc: 'Keep your game progress, stats, and achievements safe and synced across your devices via your Google account.' },
        { title: 'Daily Missions', desc: 'Complete unique space-themed poker challenges to earn bonus credits.' },
        { title: 'Dynamic Betting', desc: 'Bet, raise, or fold against high-AI cosmic opponents.' },
        { title: 'Premium Space Themes', desc: 'Gorgeous space backgrounds, cosmic table designs, and smooth card dealing.' }
      ],
      specsTitle: 'Application Information',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        supportEmail: 'info@timeline-alchemy.net',
        platform: 'Android 8.0+ / Web Browser',
        ageRating: 'PEGI 18 (Simulated Gambling)',
        license: 'Free (Contains Ads & In-App Purchases)'
      },
      linksTitle: 'Legal & Documentation',
      privacyBtn: 'View Privacy Policy',
      termsBtn: 'View Terms of Service',
      backToCasino: 'Back to Casino Collection'
    },
    nl: {
      title: 'Galactic Poker',
      subtitle: 'Daag het heelal uit in deze tactische celestiale Texas Hold\'em.',
      playOnline: 'Speel Webversie',
      androidApp: 'Open Android App',
      downloadApk: 'Bekijk Google Play-vermelding',
      videoTitle: 'Gameplay Trailer',
      videoDesc: 'Bekijk de gameplay-impressie en zie de kosmische uitlijning in actie.',
      purposeTitle: 'Doel van de Applicatie & Details',
      purposeDesc: 'Galactic Poker is een single-player mobiel kaartspel met een ruimtethema. Het vertaalt de traditionele regels van Texas Hold\'em naar een prachtige futuristische setting. Spelers kunnen hun kaartvaardigheden testen tegen computergestuurde tegenstanders in kosmische omgevingen. Ons doel is om een strategische pokerervaring te bieden.',
      googleAuthTitle: 'Integratie met Google Sign-In & Play Games-services',
      googleAuthDesc: 'Om een soepele game-ervaring te garanderen, maakt Galactic Poker gebruik van Google Sign-In en Google Play Games-services. Deze integratie wordt uitsluitend gebruikt om:',
      authPoints: [
        'Je profiel veilig te verifiëren zonder dat handmatige wachtwoorden nodig zijn.',
        'Je spelvoortgang, behaalde niveaus en statistieken veilig op te slaan in de cloud.',
        'Je dagelijkse missievoortgang, spelersniveau en statistieken op te slaan.',
        'Je poker-klassementen en prestaties door te geven aan de wereldwijde klassementen.'
      ],
      gdprTitle: 'Privacy, Gegevensbescherming & Veiligheid',
      gdprDesc: 'We verkopen of delen je persoonlijke gegevens niet. Het Google Sign-In profiel wordt alleen gebruikt om je persoonlijke in-game opslagstatus te beheren. Dit spel bevat geen echt geld gokken. Er kan geen echt geld worden ingezet of gewonnen. Alle valuta in het spel (Stellar Credits) is puur virtueel.',
      featuresTitle: 'Belangrijkste Spelfuncties',
      features: [
        { title: 'Cloudvoortgang Synchronisatie', desc: 'Houd je spelvoortgang, statistieken en prestaties veilig en gesynchroniseerd over je apparaten via je Google-account.' },
        { title: 'Dagelijkse Missies', desc: 'Voltooi elke dag uitdagende poker doelen om extra credits te verdienen.' },
        { title: 'Dynamische Inzetten', desc: 'Bet, raise of fold tegen geavanceerde AI-tegenstanders.' },
        { title: 'Premium Ruimte-visuals', desc: 'Prachtige kosmische achtergronden, speciale kaarten en vloeiende animaties.' }
      ],
      specsTitle: 'Applicatie Informatie',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        supportEmail: 'info@timeline-alchemy.net',
        platform: 'Android 8.0+ / Webbrowser',
        ageRating: 'PEGI 18 (Gesimuleerd gokken)',
        license: 'Gratis (Bevat advertenties & in-app aankopen)'
      },
      linksTitle: 'Wettelijk & Documentatie',
      privacyBtn: 'Bekijk Privacybeleid',
      termsBtn: 'Bekijk Algemene Voorwaarden',
      backToCasino: 'Terug naar Casino Collectie'
    },
    de: {
      title: 'Galactic Poker',
      subtitle: 'Fordern Sie die Galaxie in diesem taktischen, himmlischen Texas Hold\'em heraus.',
      playOnline: 'Web-Version spielen',
      androidApp: 'Android App öffnen',
      downloadApk: 'Google Play-Eintrag anzeigen',
      videoTitle: 'Gameplay-Trailer',
      videoDesc: 'Sehen Sie sich die Gameplay-Übersicht an und erleben Sie die kosmische Ausrichtung in Aktion.',
      purposeTitle: 'Zweck der Anwendung & Details',
      purposeDesc: 'Galactic Poker is ein kosmisches mobiles Pokerspiel für Einzelspieler. Es adaptiert die traditionellen Regeln von Texas Hold\'em in einer wunderschönen futuristischen Weltraumumgebung. Spieler können ihre Kartenfähigkeiten gegen Computergegner in kosmischen Umgebungen testen. Unser Ziel ist es, eine strategische Poker-Erfahrung zu bieten.',
      googleAuthTitle: 'Integration von Google Sign-In & Play Games Services',
      googleAuthDesc: 'Um ein reibungsloses Spielerlebnis zu gewährleisten, verwendet Galactic Poker Google Sign-In und die Google Play Spieledienste. Diese Integration dient ausschließlich dazu:',
      authPoints: [
        'Ihr Profil sicher zu authentifizieren, ohne dass manuelle Passwörter erforderlich sind.',
        'Ihren Spielstand, Ihr Spielerlevel und Ihre Statistiken sicher in der Cloud zu speichern.',
        'Ihren täglichen Missionsfortschritt, Ihr Spielerlevel und Ihre Spielstatistiken zu speichern.',
        'Ihre Poker-Highscores und Gewinne in den globalen Bestenlisten zu veröffentlichen.'
      ],
      gdprTitle: 'Datenschutz, Datensicherheit & Sicherheit',
      gdprDesc: 'Wir schätzen Ihre Privatsphäre. Wir verkaufen oder teilen Ihre persönlichen Daten nicht. Das Google Sign-In-Profil wird nur zur Verwaltung Ihres persönlichen Spielstands verwendet. Dieses Spiel bietet kein Echtgeld-Glücksspiel. Es kann kein echtes Geld gesetzt oder gewonnen werden. Alle im Spiel verwendeten Währungen (Stellar Credits) sind rein virtuell.',
      featuresTitle: 'Wichtigste Spielfunktionen',
      features: [
        { title: 'Cloud-Fortschrittssynchronisierung', desc: 'Halten Sie Ihren Spielstand, Ihre Erfolge und Statistiken über Ihr Google-Konto auf all Ihren Geräten synchron.' },
        { title: 'Tägliche Missionen', desc: 'Schließen Sie täglich Pokermissionen ab, um Ihr Guthaben aufzubessern.' },
        { title: 'Taktisches Setzen', desc: 'Setzen, erhöhen oder passen Sie gegen anspruchsvolle KI-Gegner.' },
        { title: 'Faszinierende Weltraumgrafik', desc: 'Mit wunderschönen kosmischen Hintergründen, Sci-Fi-Designs und flüssigen Animationen.' }
      ],
      specsTitle: 'Anwendungsinformationen',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        supportEmail: 'info@timeline-alchemy.net',
        platform: 'Android 8.0+ / Webbrowser',
        ageRating: 'PEGI 18 (Simuliertes Glücksspiel)',
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
                  src="/images/galactic-poker.png" 
                  alt="Galactic Poker Logo" 
                  className="w-full h-full object-contain rounded-2xl drop-shadow-2xl"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <h1 className="font-cosmic text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-mystical-gradient">Galactic</span> <span className="text-cosmic-gradient">Poker</span>
                </h1>
                <p className="font-mystical text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
                  {t.subtitle}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button asChild className="cosmic-hover bg-cosmic-gradient border-none text-white px-6 py-5">
                    <a href="https://poker.cosmic-casino.one/play" target="_blank" rel="noopener noreferrer">
                      <Gamepad2 className="w-4 h-4 mr-2 animate-bounce" />
                      {t.playOnline}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-purple-500/30 text-white hover:bg-purple-950/20 px-6 py-5">
                    <a href="https://timeline-alchemy.com/casino/galactic-poker/play" target="_blank" rel="noopener noreferrer">
                      <Smartphone className="w-4 h-4 mr-2 animate-pulse" />
                      {t.androidApp}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-purple-500/30 text-white hover:bg-purple-950/20 px-6 py-5">
                    <a href="https://play.google.com/store/apps/details?id=com.timeline_alchemy.galactic_poker" target="_blank" rel="noopener noreferrer">
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
                    alt={`Galactic Poker Gameplay Screenshot ${activeImg + 1}`} 
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

              {/* Gameplay Video Showcase */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h2 className="font-cosmic text-2xl font-bold text-cosmic-gradient flex items-center gap-2">
                      <Youtube className="w-6 h-6 text-red-500" />
                      {t.videoTitle}
                    </h2>
                    <p className="font-mystical text-muted-foreground text-sm mt-1">
                      {t.videoDesc}
                    </p>
                  </div>
                </div>

                <div className="relative w-full aspect-video rounded-xl border border-border/40 shadow-mystical bg-black/40 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${language === 'nl' ? 'E7CyPwA_ljE' : 'dcis4aSigI0'}`}
                    title="Galactic Poker Trailer"
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
                    <Link to="/privacy-policy/galactic-poker">
                      <ShieldCheck className="w-4 h-4 mr-2 text-purple-400" />
                      {t.privacyBtn}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start border-purple-500/20 text-muted-foreground hover:text-white hover:bg-purple-950/10">
                    <Link to="/terms-of-service/galactic-poker">
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

export default GalacticPoker;
