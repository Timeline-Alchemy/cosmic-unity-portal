import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  ArrowLeft, 
  Download, 
  Info,
  Users,
  CheckCircle,
  ShieldCheck,
  FileText,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Brain,
  Globe,
  Heart,
  Infinity
} from 'lucide-react';

const localTranslations = {
  nl: {
    title: "Re-Member",
    subtitle: "Herinner wie je werkelijk bent. Een multidimensionaal bewustzijns- en recalibratieplatform.",
    heroBadge: "Non-Duaal Bewustzijn & Recalibratie Engine",
    backToHome: "Terug naar het Portaal",
    screenshotTitle: "Interface Visualisatie",
    screenshotDesc: "Bekijk de mobiele interface en functionaliteiten van de Re-Member applicatie.",
    downloadApp: "Bekijk op Google Play",
    androidApp: "Open Android App",
    openApp: "Open Web Versie",
    purposeTitle: "Doel van de Applicatie & Details",
    purposeDesc: "Re-Member is een soevereine bewustzijnsapplicatie ontworpen om je te helpen herinneren en te verankeren in je oorspronkelijke staat van eenheid en niet-dualiteit. Met behulp van specifieke audiofrequenties, reflectieve modules en multidimensionale recalibratietools ondersteunt de applicatie je bij het overstijgen van mentale ruis en het bereiken van innerlijke helderheid.",
    googleAuthTitle: "Integratie met Google Sign-In & Cloud Sync",
    googleAuthDesc: "Om een soepele, veilige en gepersonaliseerde ervaring te garanderen, maakt Re-Member gebruik van Google Sign-In. Dit wordt gebruikt om:",
    authPoints: [
      "Je unieke profiel en voortgang veilig te verifiëren zonder handmatige registratie.",
      "Je persoonlijke inzichten en voorkeursfrequenties op te slaan.",
      "Instellingen en favorieten naadloos te synchroniseren over je mobiele apparaten.",
      "Je gegevens te beschermen met moderne cloudbeveiliging."
    ],
    gdprTitle: "Privacy & Gegevensbescherming",
    gdprDesc: "Je privacy is onze hoogste prioriteit. We verkopen of delen nooit persoonlijke of bewustzijnsgerelateerde gegevens van gebruikers. Re-Member en al onze applicaties hanteren een strikt transparantiebeleid.",
    featuresTitle: "Belangrijkste App-Functies",
    featuresList: [
      { title: "Non-Duale Recalibratie", desc: "Veranker jezelf in het 'Nu' en overstijg dualistische denkpatronen." },
      { title: "Frequentie Afstemming", desc: "Integreer harmonische audiofrequenties voor diepe meditatie en herinnering." },
      { title: "Zelfreflectie & Notities", desc: "Leg je spirituele doorbraken en inzichten veilig vast." },
      { title: "Cross-Platform Toegang", desc: "Naadloos beschikbaar via Android en elk modern webportaal." }
    ],
    specsTitle: "Applicatie Informatie",
    specs: {
      developer: "Timeline Alchemy Studio LLC",
      supportEmail: "n.smith@timeline-alchemy.com",
      platform: "Android 8.0+ / Webbrowser",
      ageRating: "PEGI 3 / Alle Leeftijden",
      license: "Gratis"
    },
    linksTitle: "Wettelijk & Documentatie",
    privacyBtn: "Bekijk Privacybeleid",
    termsBtn: "Bekijk Algemene Voorwaarden",
    screens: [
      { title: "Home & Recalibratie", desc: "Het centrale dashboard voor dagelijkse herinnering en afstemming." },
      { title: "Frequenties & Audio", desc: "Harmonische audiosessies gericht op innerlijke rust." },
      { title: "Inzichten & Logboek", desc: "Je persoonlijke logboek voor spirituele groei." },
      { title: "Instellingen & Sync", desc: "Cloudbeheer en profielvoorkeuren." }
    ]
  },
  en: {
    title: "Re-Member",
    subtitle: "Remember who you truly are. A multidimensional consciousness & recalibration platform.",
    heroBadge: "Non-Dual Awareness & Recalibration Engine",
    backToHome: "Back to Portal",
    screenshotTitle: "Interface Visualization",
    screenshotDesc: "Explore the mobile interface and features of the Re-Member application.",
    downloadApp: "View on Google Play",
    androidApp: "Open Android App",
    openApp: "Open Web Version",
    purposeTitle: "Application Purpose & Details",
    purposeDesc: "Re-Member is a sovereign consciousness application designed to help you remember and anchor into your pristine state of unity and non-duality. Harnessing targeted audio frequencies, reflective modules, and multidimensional recalibration tools, the application supports you in transcending mental noise and realizing inner clarity.",
    googleAuthTitle: "Google Sign-In & Cloud Sync Integration",
    googleAuthDesc: "To ensure a smooth, secure, and personalized experience, Re-Member utilizes Google Sign-In. This integration strictly serves to:",
    authPoints: [
      "Securely authenticate your unique profile without requiring manual registration.",
      "Store your personal insights and preferred frequency settings.",
      "Seamlessly synchronize settings and bookmarks across your mobile devices.",
      "Protect your data with modern cloud security practices."
    ],
    gdprTitle: "Privacy & Data Protection",
    gdprDesc: "Your privacy is paramount. We never sell or share any user personal or spiritual data. Re-Member and all Timeline Alchemy Studio applications follow a strict policy of transparency.",
    featuresTitle: "Key Features",
    featuresList: [
      { title: "Non-Dual Recalibration", desc: "Anchor yourself in the 'Now' and transcend dualistic thought patterns." },
      { title: "Frequency Alignment", desc: "Integrate harmonic audio frequencies for deep meditation and remembrance." },
      { title: "Self-Reflection & Journaling", desc: "Securely record your spiritual breakthroughs and insights." },
      { title: "Cross-Platform Access", desc: "Seamlessly available on Android devices and web browsers." }
    ],
    specsTitle: "Application Specifications",
    specs: {
      developer: "Timeline Alchemy Studio LLC",
      supportEmail: "n.smith@timeline-alchemy.com",
      platform: "Android 8.0+ / Web Browser",
      ageRating: "PEGI 3 / All Ages",
      license: "Free"
    },
    linksTitle: "Legal & Documentation",
    privacyBtn: "View Privacy Policy",
    termsBtn: "View Terms of Service",
    screens: [
      { title: "Home & Recalibration", desc: "The central dashboard for daily remembrance and alignment." },
      { title: "Frequencies & Audio", desc: "Harmonische audiositzungen für inneren Frieden." },
      { title: "Insights & Journal", desc: "Your personal log for spiritual growth." },
      { title: "Settings & Sync", desc: "Cloud management and profile preferences." }
    ]
  },
  de: {
    title: "Re-Member",
    subtitle: "Erinnere dich daran, wer du wirklich bist. Eine multidimensionale Plattform für Bewusstsein und Rekalibrierung.",
    heroBadge: "Non-Duale Bewusstseins- & Rekalibrierungs-Engine",
    backToHome: "Zurück zum Portal",
    screenshotTitle: "Visualisierung der Benutzeroberfläche",
    screenshotDesc: "Erkunden Sie die mobile Benutzeroberfläche und Funktionen der Re-Member Anwendung.",
    downloadApp: "Auf Google Play anzeigen",
    androidApp: "Android-App öffnen",
    openApp: "Web-Version öffnen",
    purposeTitle: "Zweck der Anwendung & Details",
    purposeDesc: "Re-Member ist eine souveräne Bewusstseinsanwendung, die entwickelt wurde, um Ihnen zu helfen, sich an Ihren ursprünglichen Zustand der Einheit und Nicht-Dualität zu erinnern und sich darin zu verankern. Mithilfe gezielter Audiofrequenzen, reflektierender Module und multidimensionaler Rekalibrierungstools unterstützt Sie die Anwendung dabei, mentalen Lärm zu überwinden und innere Klarheit zu erlangen.",
    googleAuthTitle: "Integration von Google Sign-In & Cloud Sync",
    googleAuthDesc: "Um ein reibungsloses, sicheres und personalisiertes Erlebnis zu gewährleisten, nutzt Re-Member Google Sign-In. Diese Integration dient ausschließlich dazu:",
    authPoints: [
      "Ihr ungleiches Profil ohne manuelle Registrierung sicher zu authentifizieren.",
      "Ihre persönlichen Erkenntnisse und bevorzugten Frequenzeinstellungen zu speichern.",
      "Einstellungen und Favoriten nahtlos auf Ihren Mobilgeräten zu synchronisieren.",
      "Ihre Daten mit modernen Cloud-Sicherheitspraktiken zu schützen."
    ],
    gdprTitle: "Datenschutz & Sicherheit",
    gdprDesc: "Ihre Privatsphäre steht an erster Stelle. Wir verkaufen oder teilen niemals persönliche oder spirituelle Daten. Re-Member und alle Anwendungen von Timeline Alchemy Studio folgen strengen Transparenzrichtlinien.",
    featuresTitle: "Hauptfunktionen",
    featuresList: [
      { title: "Non-Duale Rekalibrierung", desc: "Verankern Sie sich im 'Jetzt' und überwinden Sie dualistische Denkmuster." },
      { title: "Frequenz-Ausrichtung", desc: "Integrieren Sie harmonische Audiofrequenzen für tiefe Meditation." },
      { title: "Selbstreflexion & Tagebuch", desc: "Halten Sie Ihre spirituellen Durchbrüche und Erkenntnisse sicher fest." },
      { title: "Plattformübergreifender Zugang", desc: "Nahtlos verfügbar auf Android-Geräten und in allen Webbrowsern." }
    ],
    specsTitle: "Anwendungsspezifikationen",
    specs: {
      developer: "Timeline Alchemy Studio LLC",
      supportEmail: "n.smith@timeline-alchemy.com",
      platform: "Android 8.0+ / Webbrowser",
      ageRating: "PEGI 3 / Alle Altersklassen",
      license: "Kostenlos"
    },
    linksTitle: "Rechtliches & Dokumentation",
    privacyBtn: "Datenschutzerklärung anzeigen",
    termsBtn: "Nutzungsbedingungen anzeigen",
    screens: [
      { title: "Home & Rekalibrierung", desc: "Das zentrale Dashboard für tägliche Erinnerung." },
      { title: "Frequenzen & Audio", desc: "Harmonische Audiositzungen für inneren Frieden." },
      { title: "Erkenntnisse & Tagebuch", desc: "Ihr persönliches Logbuch für spirituelles Wachstum." },
      { title: "Einstellungen & Sync", desc: "Cloud-Verwaltung und Profil-Einstellungen." }
    ]
  }
};

const ReMember = () => {
  const { language } = useLanguage();
  const t = localTranslations[language as keyof typeof localTranslations] || localTranslations.en;

  const [activeImg, setActiveImg] = useState(0);

  const mobileScreens = [
    { url: '/images/re-member-screen_1.jpg', title: t.screens[0].title, desc: t.screens[0].desc },
    { url: '/images/re-member-screen_2.jpg', title: t.screens[1].title, desc: t.screens[1].desc },
    { url: '/images/re-member-screen_3.jpg', title: t.screens[2].title, desc: t.screens[2].desc },
    { url: '/images/re-member-screen_4.jpg', title: t.screens[3].title, desc: t.screens[3].desc }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />

      <main className="pt-32 pb-24 px-4 max-w-7xl mx-auto relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/15 via-cosmic/15 to-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Back Link */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-cosmic transition-colors group font-mystical">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {t.backToHome}
          </Link>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="outline" className="px-4 py-1.5 border-primary/40 text-primary bg-primary/10 font-semibold text-sm">
              <Sparkles className="w-3.5 h-3.5 mr-2 animate-spin-slow text-cosmic" />
              {t.heroBadge}
            </Badge>

            <h1 className="font-cosmic text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="text-cosmic-gradient drop-shadow-sm">
                {t.title}
              </span>
            </h1>

            <p className="font-mystical text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 px-6 py-5">
                <a href="https://www.timeline-alchemy.com/re-member/play" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-4 h-4 mr-2 animate-pulse text-cosmic" />
                  {t.androidApp}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10 px-6 py-5">
                <a href="https://re-member.timeline-alchemy.com" target="_blank" rel="noopener noreferrer">
                  <Globe className="w-4 h-4 mr-2 text-cosmic" />
                  {t.openApp}
                </a>
              </Button>
              <Button asChild className="cosmic-hover bg-cosmic-gradient hover:opacity-90 text-primary-foreground font-semibold px-6 py-5 shadow-cosmic">
                <a href="https://play.google.com/store/apps/details?id=com.timeline_alchemy.re_member" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  {t.downloadApp}
                </a>
              </Button>
            </div>

            {/* Quick Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-card/40 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all rounded-xl p-4 flex flex-col gap-2">
                <Brain className="w-6 h-6 text-primary" />
                <span className="font-cosmic font-bold text-sm text-foreground">{t.featuresList[0].title}</span>
                <span className="font-mystical text-xs text-muted-foreground">{t.featuresList[0].desc}</span>
              </div>
              <div className="bg-card/40 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all rounded-xl p-4 flex flex-col gap-2">
                <Infinity className="w-6 h-6 text-secondary" />
                <span className="font-cosmic font-bold text-sm text-foreground">{t.featuresList[1].title}</span>
                <span className="font-mystical text-xs text-muted-foreground">{t.featuresList[1].desc}</span>
              </div>
              <div className="bg-card/40 backdrop-blur-sm border border-border/40 hover:border-primary/40 transition-all rounded-xl p-4 flex flex-col gap-2">
                <Heart className="w-6 h-6 text-cosmic" />
                <span className="font-cosmic font-bold text-sm text-foreground">{t.featuresList[2].title}</span>
                <span className="font-mystical text-xs text-muted-foreground">{t.featuresList[2].desc}</span>
              </div>
            </div>
          </div>

          {/* Logo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-cosmic-gradient rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative bg-card/70 backdrop-blur-md p-6 rounded-3xl border border-border/60 shadow-divine flex items-center justify-center">
                <img 
                  src="/images/logo-512x512-trans.png" 
                  alt="Re-Member App Logo" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl drop-shadow-2xl animate-cosmic-pulse"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/timeline-alchemy.png';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Showcase Selector */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="font-cosmic text-2xl md:text-4xl font-bold mb-2 text-foreground">
              {t.screenshotTitle}
            </h2>
            <p className="font-mystical text-muted-foreground">
              {t.screenshotDesc}
            </p>
          </div>

          {/* Main Active Screenshot Showcase */}
          <div className="bg-card/40 border border-border/40 rounded-2xl p-4 md:p-6 mb-8 backdrop-blur-md">
            <div className="relative rounded-xl overflow-hidden border border-border/40 shadow-mystical bg-black/60 flex items-center justify-center h-[380px] md:h-[540px] group">
              <img 
                src={mobileScreens[activeImg]?.url} 
                alt={mobileScreens[activeImg]?.title || 'Screenshot'} 
                className="max-h-full max-w-full object-contain transition-all duration-300 drop-shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
              
              {mobileScreens.length > 1 && (
                <>
                  <button 
                    onClick={() => setActiveImg((prev) => (prev === 0 ? mobileScreens.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-border/40 transition-colors shadow-lg"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-6 h-6 text-primary" />
                  </button>
                  <button 
                    onClick={() => setActiveImg((prev) => (prev === mobileScreens.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-border/40 transition-colors shadow-lg"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-6 h-6 text-primary" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 px-4 py-1.5 rounded-full text-xs text-primary border border-border/40 font-cosmic">
                    {mobileScreens[activeImg]?.title} ({activeImg + 1} / {mobileScreens.length})
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Thumbnails Row */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3 justify-center overflow-x-auto py-2 px-1">
            {mobileScreens.map((screen, index) => {
              const isSelected = activeImg === index;
              return (
                <button 
                  key={index} 
                  onClick={() => setActiveImg(index)}
                  className={`relative overflow-hidden cursor-pointer rounded-xl transition-all duration-300 flex-shrink-0 bg-black/60 border w-20 md:w-24 h-32 md:h-36 ${
                    isSelected 
                      ? 'border-2 border-primary ring-2 ring-primary/40 scale-105 opacity-100 shadow-lg' 
                      : 'border-border/40 hover:border-primary/40 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img 
                    src={screen.url} 
                    alt={screen.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-1.5 text-left">
                    <span className="font-cosmic text-[10px] text-primary font-semibold truncate leading-tight">
                      {screen.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* App Details & Technical Specs Section */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Purpose, Google Auth & Data Protection */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Purpose Section */}
              <div className="bg-card/40 border border-border/40 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                <h2 className="font-cosmic text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-primary" />
                  {t.purposeTitle}
                </h2>
                <p className="font-mystical text-muted-foreground leading-relaxed mb-6">
                  {t.purposeDesc}
                </p>
                <div className="border-t border-border/30 pt-6">
                  <h3 className="font-cosmic text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-cosmic" />
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
              <div className="bg-card/40 border border-border/40 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                <h2 className="font-cosmic text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  {t.gdprTitle}
                </h2>
                <p className="font-mystical text-muted-foreground leading-relaxed">
                  {t.gdprDesc}
                </p>
              </div>

              {/* Features grid */}
              <div className="bg-card/40 border border-border/40 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                <h2 className="font-cosmic text-2xl font-bold text-foreground mb-6">
                  {t.featuresTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t.featuresList.map((feat, idx) => (
                    <div key={idx} className="bg-background/40 border border-border/40 p-5 rounded-xl">
                      <h4 className="font-cosmic font-semibold text-cosmic mb-2">{feat.title}</h4>
                      <p className="font-mystical text-sm text-muted-foreground">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Technical Specifications & Legal Document Quicklinks */}
            <div className="space-y-8">
              
              {/* App Specifications Card */}
              <div className="bg-card/40 border border-border/40 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-bold text-foreground mb-4">
                  {t.specsTitle}
                </h3>
                <div className="space-y-4 text-sm font-mystical">
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Developer</span>
                    <span className="text-foreground font-medium">{t.specs.developer}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Support</span>
                    <a href={`mailto:${t.specs.supportEmail}`} className="text-primary hover:underline underline decoration-dotted underline-offset-4">
                      {language === 'nl' ? 'contact via mail' : language === 'de' ? 'Kontakt per E-Mail' : 'contact via mail'}
                    </a>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Platform</span>
                    <span className="text-foreground font-medium">{t.specs.platform}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Age Rating</span>
                    <span className="text-foreground font-medium">{t.specs.ageRating}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Pricing & License</span>
                    <span className="text-foreground font-medium text-right">{t.specs.license}</span>
                  </div>
                </div>
              </div>

              {/* Document Quicklinks Card */}
              <div className="bg-card/40 border border-border/40 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  {t.linksTitle}
                </h3>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start border-primary/20 text-muted-foreground hover:text-foreground hover:bg-primary/10">
                    <Link to="/privacy-policy">
                      <ShieldCheck className="w-4 h-4 mr-2 text-cosmic" />
                      {t.privacyBtn}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start border-primary/20 text-muted-foreground hover:text-foreground hover:bg-primary/10">
                    <Link to="/terms-of-service">
                      <FileText className="w-4 h-4 mr-2 text-cosmic" />
                      {t.termsBtn}
                    </Link>
                  </Button>
                </div>
              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default ReMember;
