import React, { useState } from 'react';
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
  ArrowLeft, 
  Download, 
  Eye, 
  Award,
  BookMarked,
  Info,
  Users,
  CheckCircle,
  ShieldCheck,
  FileText,
  Smartphone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const localTranslations = {
  nl: {
    title: "Lumina Enlightenment",
    subtitle: "Synchroniseer met je innerlijke kosmos. Volg je heilige secretiecyclus (Christus-olie) en verhoog je bewustzijn.",
    heroBadge: "Multidimensionale Gids",
    desktopView: "Desktop Dashboard",
    mobileView: "Mobiele Sanctuary",
    backToHome: "Terug naar het Portaal",
    screenshotTitle: "Interface Visualisatie",
    screenshotDesc: "Verken de interfaces en visualisaties van de Lumina Enlightenment applicatie.",
    downloadApp: "Bekijk op Google Play",
    openApp: "Open Web Sanctum",
    purposeTitle: "Doel van de Applicatie & Details",
    purposeDesc: "Lumina Enlightenment is een gepersonaliseerde spirituele en fysiologische gids die de heilige secretiecyclus (het Christus-olie proces) volgt. De applicatie combineert astronomie, zodiaktransits en biologische ritmes om de exacte perioden te berekenen waarin spirituele en fysiologische energie piekt in het menselijk lichaam.",
    googleAuthTitle: "Integratie met Google Sign-In & Cloud Sync",
    googleAuthDesc: "Om een soepele, veilige en persoonlijke ervaring te garanderen, maakt Lumina Enlightenment gebruik van Google Sign-In en Cloud Synchronization. Dit wordt gebruikt om:",
    authPoints: [
      "Je biologische en zodiakprofiel veilig te verifiëren zonder dat handmatige registratie nodig is.",
      "Je gepersonaliseerde 6-maandelijkse secretiecyclus en kalenderinstellingen veilig op te slaan in de cloud.",
      "Meldingen en pushherinneringen te synchroniseren over je mobiele en desktop-apparaten.",
      "Je persoonlijke voortgang en spirituele notities te bewaren bij apparaatwissels."
    ],
    gdprTitle: "Privacy, Gegevensbescherming & Veiligheid",
    gdprDesc: "Je privacy staat voorop. We verkopen of delen geen persoonlijke of spirituele gegevens van gebruikers. Je Google-accountgegevens worden uitsluitend gebruikt om je unieke kalender- en notificatievoorkeuren te beveiligen. Lumina Enlightenment bevat geen verborgen tracering of verkoop van persoonsgegevens.",
    featuresTitle: "Belangrijkste App-Functies",
    featuresList: [
      { title: "Celestial Astrolabe", desc: "Volg maanstanden en de doorgang van de maan door alle 12 zodiaktekens." },
      { title: "6-Maanden Kalender", desc: "Berekent de exacte perioden waarin je spirituele energie biologisch piekt." },
      { title: "ICS Kalender Export", desc: "Exporteer je cyclus eenvoudig naar Google Calendar, Apple iCal of Outlook." },
      { title: "Heilige Wetenschap & Etymologie", desc: "Verklaring van esoterische teksten en fysiologie (pijnappelklier, cerebrum, claustrum)." }
    ],
    specsTitle: "Applicatie Informatie",
    specs: {
      developer: "Timeline Alchemy Studio LLC",
      supportEmail: "n.smith@timeline-alchemy.com",
      platform: "Android 8.0+ / Webbrowser",
      ageRating: "PEGI 3 / Alle Leeftijden",
      license: "Gratis (Inclusief Cloud Sync & Notificaties)"
    },
    linksTitle: "Wettelijk & Documentatie",
    privacyBtn: "Bekijk Privacybeleid",
    termsBtn: "Bekijk Algemene Voorwaarden",
    pillarsTitle: "De Vier Pijlers van Lumina Enlightenment",
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
        title: "6-Maanden Cyclus",
        desc: "Berekening van jouw unieke secretiemomenten en astronomische transits."
      },
      icsExport: {
        title: "Kalender Integratie",
        desc: "Exporteer je cyclusdata naar Google, Apple of Outlook-kalenders."
      }
    },
    screens: {
      screen1: { title: "Het Hemellichaam", desc: "Interactieve Zodiak & Anatomie wiel dat de maanovergangen toont." },
      screen2: { title: "Alchemistische Sanctuary", desc: "Countdown naar de volgende secretie-uitlijning en bewustzijns-tracker." },
      screen3: { title: "Heilige Tijdlijn", desc: "De 6-maandelijkse secretiekalender en notificatie-instellingen." },
      screen4: { title: "Heilige Wetenschap", desc: "De anatomische structuren en esoterische schriftteksten verklaard." },
      screen5: { title: "Kosmisch Overzicht", desc: "Het hoofddashboard dat alle kosmische en biologische cycli integreert." }
    }
  },
  en: {
    title: "Lumina Enlightenment",
    subtitle: "Synchronize with your inner cosmos. Track your sacred secretion cycle (Christ-Oil) and elevate your consciousness.",
    heroBadge: "Multidimensional Guide",
    desktopView: "Desktop Dashboard",
    mobileView: "Mobile Sanctuary",
    backToHome: "Back to Portal",
    screenshotTitle: "Interface Visualization",
    screenshotDesc: "Explore the interfaces and visualizations of the Lumina Enlightenment application.",
    downloadApp: "View on Google Play",
    openApp: "Open Web Sanctum",
    purposeTitle: "Application Purpose & Details",
    purposeDesc: "Lumina Enlightenment is a personalized spiritual and physiological guide that tracks the sacred secretion cycle (Christ-Oil process). The app combines astronomy, zodiac transits, and biological rhythms to calculate peak energy periods within the human body.",
    googleAuthTitle: "Google Sign-In & Cloud Sync Integration",
    googleAuthDesc: "To ensure a smooth, secure, and personalized experience, Lumina Enlightenment utilizes Google Sign-In and Cloud Synchronization. This integration serves to:",
    authPoints: [
      "Securely authenticate your profile without manual registration hassles.",
      "Safely back up your 6-month sacred secretion cycle calendar and settings in the cloud.",
      "Synchronize notifications and push reminders across mobile and desktop devices.",
      "Preserve your personalized notes and progress during device upgrades."
    ],
    gdprTitle: "Privacy, Data Protection & Safety",
    gdprDesc: "Your privacy is paramount. We do not sell or share user personal or spiritual data. Your Google account details are strictly used to secure your unique calendar and notification preferences. Lumina Enlightenment operates with full user transparency.",
    featuresTitle: "Key Application Features",
    featuresList: [
      { title: "Celestial Astrolabe", desc: "Track lunar phases and moon transits across all 12 zodiac signs." },
      { title: "6-Month Secretion Calendar", desc: "Calculate exact biological peak periods for spiritual elevation." },
      { title: "ICS Calendar Export", desc: "Export your cycles directly to Google Calendar, Apple iCal, or Outlook." },
      { title: "Sacred Science & Etymology", desc: "Explore esoteric scriptures correlated with physiological anatomy." }
    ],
    specsTitle: "Application Information",
    specs: {
      developer: "Timeline Alchemy Studio LLC",
      supportEmail: "n.smith@timeline-alchemy.com",
      platform: "Android 8.0+ / Web Browser",
      ageRating: "PEGI 3 / Everyone",
      license: "Free (Includes Cloud Sync & Notifications)"
    },
    linksTitle: "Legal & Documentation",
    privacyBtn: "View Privacy Policy",
    termsBtn: "View Terms of Service",
    pillarsTitle: "The Four Pillars of Lumina Enlightenment",
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
        title: "6-Month Cycle",
        desc: "Calculation of your unique secretion moments and astronomical transits."
      },
      icsExport: {
        title: "Calendar Integration",
        desc: "Export your cycle data directly to Google, Apple, or Outlook calendars."
      }
    },
    screens: {
      screen1: { title: "The Celestial Astrolabe", desc: "Interactive Zodiac & Anatomy wheel showing the moon transits." },
      screen2: { title: "Alchemical Sanctuary", desc: "Countdown to the next secretion alignment and consciousness tracker." },
      screen3: { title: "Sacred Timeline", desc: "The 6-month secretion calendar and custom notification panel." },
      screen4: { title: "Sacred Science", desc: "The anatomical structures and esoteric scriptures decoded." },
      screen5: { title: "Cosmic Overview", desc: "The main dashboard integrating all cosmic and biological cycles." }
    }
  },
  de: {
    title: "Lumina Enlightenment",
    subtitle: "Synchronisieren Sie sich mit Ihrem inneren Kosmos. Verfolgen Sie Ihren heiligen Sekretionszyklus (Christus-Öl) und erhöhen Sie Ihr Bewusstsein.",
    heroBadge: "Multidimensionaler Leitfaden",
    desktopView: "Desktop-Dashboard",
    mobileView: "Mobiles Heiligtum",
    backToHome: "Zurück zum Portal",
    screenshotTitle: "Visualisierung der Benutzeroberfläche",
    screenshotDesc: "Erkunden Sie die Schnittstellen und Visualisierungen der Lumina Enlightenment-Anwendung.",
    downloadApp: "Auf Google Play anzeigen",
    openApp: "Web Sanctum öffnen",
    purposeTitle: "Zweck der Anwendung & Details",
    purposeDesc: "Lumina Enlightenment ist ein personalisierter spiritueller und physiologischer Leitfaden, der den heiligen Sekretionszyklus (Christus-Öl-Prozess) verfolgt. Die Anwendung kombiniert Astronomie, Zodiak-Transite und biologische Rhythmen.",
    googleAuthTitle: "Integration von Google Sign-In & Cloud Sync",
    googleAuthDesc: "Um ein sicheres und nahtloses Erlebnis zu gewährleisten, nutzt Lumina Enlightenment Google Sign-In und Cloud-Synchronisation. Dies dient dazu:",
    authPoints: [
      "Ihr biologisches Profil sicher ohne manuelle Registrierung zu authentifizieren.",
      "Ihren 6-Monats-Kalender und Einstellungen sicher in der Cloud zu sichern.",
      "Benachrichtigungen und Push-Erinnerungen auf allen Geräten zu synchronisieren.",
      "Ihre Fortschritte und Notizen beim Gerätewechsel zu bewahren."
    ],
    gdprTitle: "Datenschutz, Datensicherheit & Sicherheit",
    gdprDesc: "Ihre Privatsphäre ist uns wichtig. Wir verkaufen oder teilen keine Nutzerdaten. Ihre Google-Anmeldedaten werden ausschließlich zur Sicherung Ihrer Kalendereinstellungen verwendet.",
    featuresTitle: "Hauptfunktionen der Anwendung",
    featuresList: [
      { title: "Himmlisches Astrolabium", desc: "Mondphasen und Sternzeichen-Transite verfolgen." },
      { title: "6-Monats-Sekretionskalender", desc: "Berechnung biologischer Spitzenzeiten für spirituelle Energie." },
      { title: "ICS-Kalenderexport", desc: "Export in Google Calendar, Apple iCal oder Outlook." },
      { title: "Heilige Wissenschaft", desc: "Erforschung esoterischer Schriften im Zusammenhang mit der Anatomie." }
    ],
    specsTitle: "Anwendungsinformationen",
    specs: {
      developer: "Timeline Alchemy Studio LLC",
      supportEmail: "n.smith@timeline-alchemy.com",
      platform: "Android 8.0+ / Webbrowser",
      ageRating: "PEGI 3 / Für alle Altersgruppen",
      license: "Kostenlos (Inklusive Cloud-Sync & Benachrichtigungen)"
    },
    linksTitle: "Rechtliches & Dokumentation",
    privacyBtn: "Datenschutzerklärung anzeigen",
    termsBtn: "Nutzungsbedingungen anzeigen",
    pillarsTitle: "Die Vier Säulen von Lumina Enlightenment",
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
        title: "6-Monats-Zyklus",
        desc: "Integrierte Berechnung Ihrer Sekretionsmomente."
      },
      icsExport: {
        title: "Kalenderintegration",
        desc: "Exportieren Sie Ihre Zyklusdaten direkt in Google, Apple oder Outlook Kalender."
      }
    },
    screens: {
      screen1: { title: "Das Himmlische Astrolabium", desc: "Interaktives Zodiak- & Anatomie-Rad, das die Monddurchgänge anzeigt." },
      screen2: { title: "Alchemistisches Heiligtum", desc: "Countdown zur nächsten Sekretionsausrichtung und Bewusstseins-Tracker." },
      screen3: { title: "Heilige Zeitlinie", desc: "Der 6-Monats-Sekretionskalender und das benutzerdefinierte Benachrichtigungsfeld." },
      screen4: { title: "Heilige Wissenschaft", desc: "Die anatomischen Strukturen und esoterischen Schriften entschlüsselt." },
      screen5: { title: "Kosmische Übersicht", desc: "Das Haupt-Dashboard, das alle kosmischen und biologischen Zyklen integriert." }
    }
  }
};

const Lumina = () => {
  const { language } = useLanguage();
  const t = localTranslations[language as keyof typeof localTranslations] || localTranslations.en;

  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');
  const [activeImg, setActiveImg] = useState(0);

  const desktopScreens = [
    { url: '/images/lumina/lumina_1.png', key: 'screen1' },
    { url: '/images/lumina/lumina_2.png', key: 'screen2' },
    { url: '/images/lumina/lumina_3.png', key: 'screen3' },
    { url: '/images/lumina/lumina_4.png', key: 'screen4' },
    { url: '/images/lumina/lumina_5.png', key: 'screen5' }
  ];

  const mobileScreens = [
    { url: '/images/lumina/lumina_mobile_1.jpg', key: 'screen1' },
    { url: '/images/lumina/lumina_mobile_2.jpg', key: 'screen2' },
    { url: '/images/lumina/lumina_mobile_3.jpg', key: 'screen3' },
    { url: '/images/lumina/lumina_mobile_4.jpg', key: 'screen4' },
    { url: '/images/lumina/lumina_mobile_5.jpg', key: 'screen5' }
  ];

  const currentScreens = activeTab === 'desktop' ? desktopScreens : mobileScreens;

  const handleTabChange = (tab: 'desktop' | 'mobile') => {
    setActiveTab(tab);
    setActiveImg(0);
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6 text-left">
            <Badge variant="outline" className="px-4 py-1.5 border-amber-500/50 text-amber-500 bg-amber-500/5 font-semibold text-sm">
              <Sparkles className="w-3.5 h-3.5 mr-2 animate-spin-slow" />
              {t.heroBadge}
            </Badge>

            <h1 className="font-cosmic text-4xl md:text-6xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
                Lumina Enlightenment
              </span>
              <br />
              <span className="text-2xl md:text-3xl text-muted-foreground font-mystical tracking-normal">
                Sacred Secretion Calendar
              </span>
            </h1>

            <p className="font-mystical text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {t.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild className="cosmic-hover bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-6 py-5">
                <a href="https://play.google.com/store/apps/details?id=com.timeline_alchemy.lumina_enlightenment" target="_blank" rel="noopener noreferrer">
                  <Download className="w-4 h-4 mr-2" />
                  {t.downloadApp}
                </a>
              </Button>
              <Button asChild variant="outline" className="border-amber-500/30 text-white hover:bg-amber-950/20 px-6 py-5">
                <a href="https://lumina.timeline-alchemy.com" target="_blank" rel="noopener noreferrer">
                  <Smartphone className="w-4 h-4 mr-2 animate-pulse text-amber-400" />
                  {t.openApp}
                </a>
              </Button>
            </div>

            {/* Quick Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-card/40 backdrop-blur-sm border border-border/40 hover:border-amber-500/20 transition-all rounded-xl p-4 flex flex-col gap-2">
                <Compass className="w-6 h-6 text-amber-400" />
                <span className="font-cosmic font-bold text-sm">{t.features.zodiacWheel.title}</span>
                <span className="font-mystical text-xs text-muted-foreground">{t.features.zodiacWheel.desc}</span>
              </div>
              <div className="bg-card/40 backdrop-blur-sm border border-border/40 hover:border-amber-500/20 transition-all rounded-xl p-4 flex flex-col gap-2">
                <Calendar className="w-6 h-6 text-purple-400" />
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
                  alt="Lumina Enlightenment App Icon" 
                  className="w-48 h-48 md:w-64 md:h-64 object-contain rounded-2xl drop-shadow-2xl animate-cosmic-pulse"
                />
              </div>
            </div>
          </div>
        </div>

        {/* App Info & Specifications Section (2 Columns, matching Cosmic Slots pattern) */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Purpose, Google Auth & Data Protection */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Purpose Section */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                <h2 className="font-cosmic text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <Info className="w-6 h-6 text-amber-400" />
                  {t.purposeTitle}
                </h2>
                <p className="font-mystical text-muted-foreground leading-relaxed mb-6">
                  {t.purposeDesc}
                </p>
                <div className="border-t border-border/30 pt-6">
                  <h3 className="font-cosmic text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-400" />
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
                <h2 className="font-cosmic text-2xl font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-amber-400" />
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
                  {t.featuresList.map((feat, idx) => (
                    <div key={idx} className="bg-background/40 border border-border/40 p-5 rounded-xl">
                      <h4 className="font-cosmic font-semibold text-amber-300 mb-2">{feat.title}</h4>
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
                    <a href={`mailto:${t.specs.supportEmail}`} className="text-amber-400 hover:underline underline decoration-dotted underline-offset-4">
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
                    <span className="text-muted-foreground">Pricing & Cloud</span>
                    <span className="text-white font-medium text-right max-w-[200px]">{t.specs.license}</span>
                  </div>
                </div>
              </div>

              {/* Document Quicklinks Card (Google Play store requirement) */}
              <div className="bg-card/40 border border-border/40 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  {t.linksTitle}
                </h3>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start border-amber-500/20 text-muted-foreground hover:text-white hover:bg-amber-950/10">
                    <Link to="/privacy-policy">
                      <ShieldCheck className="w-4 h-4 mr-2 text-amber-400" />
                      {t.privacyBtn}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start border-amber-500/20 text-muted-foreground hover:text-white hover:bg-amber-950/10">
                    <Link to="/terms-of-service">
                      <FileText className="w-4 h-4 mr-2 text-amber-400" />
                      {t.termsBtn}
                    </Link>
                  </Button>
                </div>
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
                  onClick={() => handleTabChange('desktop')}
                  className={`px-5 py-2.5 rounded-full font-cosmic text-xs font-semibold transition-all duration-300 ${
                    activeTab === 'desktop'
                      ? 'bg-amber-500 text-black shadow-md scale-105'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t.desktopView}
                </button>
                <button
                  onClick={() => handleTabChange('mobile')}
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

          {/* Main Active Screenshot Showcase (Full View, game style) */}
          <div className="bg-card/30 border border-border/30 rounded-2xl p-4 md:p-6 mb-8 backdrop-blur-md">
            <div className="relative rounded-xl overflow-hidden border border-border/40 shadow-mystical bg-black/60 flex items-center justify-center h-[360px] md:h-[520px] group">
              <img 
                src={currentScreens[activeImg]?.url} 
                alt={t.screens[currentScreens[activeImg]?.key as keyof typeof t.screens]?.title || 'Screenshot'} 
                className="max-h-full max-w-full object-contain transition-all duration-300 drop-shadow-lg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/placeholder.svg';
                }}
              />
              
              {currentScreens.length > 1 && (
                <>
                  <button 
                    onClick={() => setActiveImg((prev) => (prev === 0 ? currentScreens.length - 1 : prev - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-border/40 transition-colors shadow-lg"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft className="w-6 h-6 text-amber-400" />
                  </button>
                  <button 
                    onClick={() => setActiveImg((prev) => (prev === currentScreens.length - 1 ? 0 : prev + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full border border-border/40 transition-colors shadow-lg"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight className="w-6 h-6 text-amber-400" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-1.5 rounded-full text-xs text-amber-300 border border-border/40 font-cosmic">
                    {t.screens[currentScreens[activeImg]?.key as keyof typeof t.screens]?.title} ({activeImg + 1} / {currentScreens.length})
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Thumbnails Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {currentScreens.map((screen, index) => {
              const itemKey = screen.key as keyof typeof t.screens;
              const screenText = t.screens[itemKey] || { title: `Screen ${index+1}`, desc: "" };
              const isSelected = activeImg === index;
              
              return (
                <Card 
                  key={index} 
                  onClick={() => setActiveImg(index)}
                  className={`bg-card/40 backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                    isSelected 
                      ? 'border-2 border-amber-500 ring-2 ring-amber-500/30 scale-[1.02]' 
                      : 'border border-border/40 hover:border-amber-500/30 opacity-80 hover:opacity-100'
                  }`}
                >
                  <CardContent className="p-0">
                    <div className={`${activeTab === 'desktop' ? 'aspect-[16/10]' : 'aspect-[9/16]'} overflow-hidden relative bg-black/50 flex items-center justify-center p-1.5`}>
                      <img 
                        src={screen.url} 
                        alt={screenText.title}
                        className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                        <h4 className="font-cosmic text-xs font-bold text-amber-400 flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {screenText.title}
                        </h4>
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
