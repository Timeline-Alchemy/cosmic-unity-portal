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
  Sparkles,
  Star,
  ExternalLink,
  Layers
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const MerkabaMadness = () => {
  const { language } = useLanguage();
  
  const content = {
    en: {
      title: 'Merkaba Madness',
      subtitle: 'Activate your cosmic light vehicle and journey through multidimensional sacred geometry realms.',
      statusBadge: 'Google Play Store Pre-Release & Policy Listing',
      playOnline: 'Play Web Version (Coming Soon)',
      androidApp: 'Open Android App',
      downloadApk: 'Google Play Store Listing',
      purposeTitle: 'Application Purpose & Details',
      purposeDesc: 'Merkaba Madness is an upcoming arcade and puzzle game built around sacred geometry, lightbody activations, and multidimensional space mechanics. Players navigate rotating Merkaba star tetrahedrons through celestial energy fields, aligning cosmic frequencies, clearing geometric obstacles, and accumulating Stellar Credits within the Timeline Alchemy ecosystem.',
      googleAuthTitle: 'Google Sign-In & Play Games Services Integration',
      googleAuthDesc: 'To provide a seamless cross-platform experience, Merkaba Madness utilizes Google Sign-In and Google Play Games Services for:',
      authPoints: [
        'Securely authenticating your unique player profile without third-party registration.',
        'Saving your Merkaba progress, unlocked geometry skins, and high scores safely to the cloud.',
        'Tracking your daily cosmic missions, level milestones, and Stellar Credit balance.',
        'Submitting your achievements and scores to global Play Games leaderboards.'
      ],
      gdprTitle: 'Privacy, Data Protection & Safety',
      gdprDesc: 'Your privacy and data safety are fundamental. Timeline Alchemy Studio LLC does not sell, rent, or monetize personal data. Credentials provided via Google Sign-In are strictly used for in-game authentication and progress tracking. Merkaba Madness is purely for entertainment; it does not offer real-money gambling, cash prizes, or monetary payouts. All currency (Stellar Credits) is simulated.',
      featuresTitle: 'Key Game Features',
      features: [
        { title: 'Merkaba Lightbody Mechanics', desc: 'Control counter-rotating fields of light to navigate intricate cosmic mazes and energy gates.' },
        { title: 'Sacred Geometry Puzzles', desc: 'Solve frequency alignments based on Platonic solids, Sri Yantra patterns, and celestial grids.' },
        { title: 'Stellar Credits Integration', desc: 'Earn and sync Stellar Credits across the entire Timeline Alchemy Studio casino and app network.' },
        { title: 'Offline & Online Play', desc: 'Experience core gameplay mechanics offline, syncing progress when reconnected.' }
      ],
      specsTitle: 'Application Information',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        packageName: 'com.timeline_alchemy.merkaba_madness',
        supportEmail: 'info@timeline-alchemy.net',
        platform: 'Android 8.0+ / Web Browser',
        ageRating: 'PEGI 3 (Everyone)',
        license: 'Free (Simulated Currency & In-App Purchases)'
      },
      linksTitle: 'Legal Policies & Compliance',
      privacyBtn: 'View Merkaba Privacy Policy',
      termsBtn: 'View Merkaba Terms of Service',
      backToCasino: 'Back to Casino Collection'
    },
    nl: {
      title: 'Merkaba Madness',
      subtitle: 'Activeer je kosmische voertuig van licht en reis door multidimensionale werelden.',
      statusBadge: 'Google Play Store Pre-Release & Beleidspagina',
      playOnline: 'Speel Webversie (Binnenkort)',
      androidApp: 'Open Android App',
      downloadApk: 'Google Play Store Listing',
      purposeTitle: 'Doel van de Applicatie & Details',
      purposeDesc: 'Merkaba Madness is een aankomende arcade- en puzzelgame gebouwd rond heilige geometrie, lichtlichaamactivaties en multidimensionale ruimte-mechanieken. Spelers navigeren roterende Merkaba-stertetraëders door celestiale energievelden, synchroniseren kosmische frequenties, ruimen geometrische obstakels op en verzamelen Stellar Credits binnen het Timeline Alchemy ecosysteem.',
      googleAuthTitle: 'Integratie met Google Sign-In & Play Games-services',
      googleAuthDesc: 'Om een naadloze cross-platform ervaring te bieden, gebruikt Merkaba Madness Google Sign-In en Google Play Games-services voor:',
      authPoints: [
        'Het veilig verifiëren van je unieke spelersprofiel zonder handmatige accountregistratie.',
        'Het veilig opslaan van je Merkaba-voortgang, ontgrendelde geometrie-skins en topscores in de cloud.',
        'Het bijhouden van je dagelijkse kosmische missies, niveaus en Stellar Credit-saldo.',
        'Het doorgeven van je prestaties en topscores aan wereldwijde Google Play-ranglijsten.'
      ],
      gdprTitle: 'Privacy, Gegevensbescherming & Veiligheid',
      gdprDesc: 'Je privacy en gegevensbeveiliging staan voorop. Timeline Alchemy Studio LLC verkoopt of deelt geen persoonlijke gegevens. Google-accountgegevens worden uitsluitend gebruikt voor authenticatie en cloud-voortgang. Merkaba Madness biedt geen gokken met echt geld, contante prijzen of uitbetalingen aan. Alle valuta (Stellar Credits) zijn virtueel en gesimuleerd.',
      featuresTitle: 'Belangrijkste Spelfuncties',
      features: [
        { title: 'Merkaba Lichtlichaam Mechanieken', desc: 'Bestuur tegengesteld roterende lichtvelden om door complexe kosmische doolhoven en energiepoorten te sturen.' },
        { title: 'Heilige Geometrie Puzzels', desc: 'Los frequentie-uitlijningen op gebaseerd op Platonische lichamen, Sri Yantra patronen en celestiale rasters.' },
        { title: 'Stellar Credits Integratie', desc: 'Verdien en synchroniseer Stellar Credits in het gehele Timeline Alchemy studio-netwerk.' },
        { title: 'Offline & Online Spelen', desc: 'Ervaar de kerngameplay offline en synchroniseer voortgang zodra je weer online bent.' }
      ],
      specsTitle: 'Applicatie Informatie',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        packageName: 'com.timeline_alchemy.merkaba_madness',
        supportEmail: 'info@timeline-alchemy.net',
        platform: 'Android 8.0+ / Webbrowser',
        ageRating: 'PEGI 3 (Alle leeftijden)',
        license: 'Gratis (Virtuele Valuta & In-App Aankopen)'
      },
      linksTitle: 'Wettelijk Beleid & Documentatie',
      privacyBtn: 'Bekijk Merkaba Privacybeleid',
      termsBtn: 'Bekijk Merkaba Algemene Voorwaarden',
      backToCasino: 'Terug naar Casino Collectie'
    },
    de: {
      title: 'Merkaba Madness',
      subtitle: 'Aktivieren Sie Ihr kosmisches Lichtfahrzeug und reisen Sie durch multidimensionale Welten.',
      statusBadge: 'Google Play Store Pre-Release & Richtlinienseite',
      playOnline: 'Web-Version spielen (Demnächst)',
      androidApp: 'Android App öffnen',
      downloadApk: 'Google Play Store Listing',
      purposeTitle: 'Zweck der Anwendung & Details',
      purposeDesc: 'Merkaba Madness ist ein kommendes Arcade- und Puzzlespiel rund um heilige Geometrie, Lichtkörperaktivierungen und multidimensionale Raummechaniken. Spieler steuern rotierende Merkaba-Sterntetraeder durch kosmetische Energiefelder, richten Frequenzen aus und sammeln Stellar Credits im Timeline Alchemy Ökosystem.',
      googleAuthTitle: 'Integration von Google Sign-In & Play Games Services',
      googleAuthDesc: 'Für ein nahtloses plattformübergreifendes Erlebnis nutzt Merkaba Madness Google Sign-In und Google Play Spieledienste für:',
      authPoints: [
        'Sichere Authentifizierung Ihres Spielerprofils ohne manuelle Registrierung.',
        'Sicheres Speichern Ihres Spielstands, von Geometrie-Skins und Highscores in der Cloud.',
        'Verfolgung täglicher Missionen, Level-Meilensteine und des Stellar Credit Guthabens.',
        'Übermittlung von Erfolgen und Highscores an globale Play Games Bestenlisten.'
      ],
      gdprTitle: 'Datenschutz, Datensicherheit & Sicherheit',
      gdprDesc: 'Ihre Privatsphäre ist uns wichtig. Timeline Alchemy Studio LLC verkauft oder vermarktet keine persönlichen Daten. Google-Anmeldedaten dienen ausschließlich der Authentifizierung. Merkaba Madness bietet kein Echtgeld-Glücksspiel. Alle Credits sind rein virtuell.',
      featuresTitle: 'Wichtigste Spielfunktionen',
      features: [
        { title: 'Merkaba-Lichtkörper-Mechanik', desc: 'Steuern Sie gegengleich rotierende Lichtfelder durch kosmetische Labyrinthe und Energie-Tore.' },
        { title: 'Heilige Geometrie-Rätsel', desc: 'Lösen Sie Frequenz-Ausrichtungen basierend auf Platonischen Körpern und Sternenrastern.' },
        { title: 'Stellar Credits Integration', desc: 'Verdienen und synchronisieren Sie Credits im gesamten Timeline Alchemy Netzwerk.' },
        { title: 'Offline & Online Spielen', desc: 'Genießen Sie das Gameplay offline und synchronisieren Sie Fortschritte bei erneuter Verbindung.' }
      ],
      specsTitle: 'Anwendungsinformationen',
      specs: {
        developer: 'Timeline Alchemy Studio LLC',
        packageName: 'com.timeline_alchemy.merkaba_madness',
        supportEmail: 'info@timeline-alchemy.net',
        platform: 'Android 8.0+ / Webbrowser',
        ageRating: 'PEGI 3',
        license: 'Kostenlos (Virtuelle Währung & In-App-Käufe)'
      },
      linksTitle: 'Rechtliches & Dokumentation',
      privacyBtn: 'Merkaba Datenschutzerklärung anzeigen',
      termsBtn: 'Merkaba Nutzungsbedingungen anzeigen',
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
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-black/40 rounded-3xl p-4 flex items-center justify-center border border-amber-500/30 shadow-mystical">
                <img 
                  src="/images/merkaba-app-icon.png" 
                  alt="Merkaba Madness Logo" 
                  className="w-full h-full object-contain rounded-2xl drop-shadow-2xl animate-cosmic-pulse"
                />
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.statusBadge}</span>
                </div>
                <h1 className="font-cosmic text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-mystical-gradient">Merkaba</span> <span className="text-cosmic-gradient">Madness</span>
                </h1>
                <p className="font-mystical text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
                  {t.subtitle}
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <Button asChild variant="outline" className="border-amber-500/30 text-white hover:bg-amber-950/20 px-6 py-5 cursor-default">
                    <span className="flex items-center">
                      <Gamepad2 className="w-4 h-4 mr-2 text-amber-400" />
                      {t.playOnline}
                    </span>
                  </Button>
                  <Button asChild variant="outline" className="border-amber-500/30 text-white hover:bg-amber-950/20 px-6 py-5">
                    <a href="https://play.google.com/store/apps/details?id=com.timeline_alchemy.merkaba_madness" target="_blank" rel="noopener noreferrer">
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
              
              {/* App Screenshot / Visual Placeholder */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  Visual & Sacred Geometry Overview
                </h3>
                <div className="relative rounded-xl overflow-hidden border border-border/40 shadow-mystical bg-black/50 flex flex-col items-center justify-center p-12 text-center min-h-[350px]">
                  <div className="w-28 h-28 mb-6 relative">
                    <img 
                      src="/images/merkaba-app-icon.png" 
                      alt="Merkaba Icon Preview" 
                      className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]"
                    />
                  </div>
                  <h4 className="font-cosmic text-2xl text-amber-300 font-semibold mb-2">Multidimensional Sacred Geometry Arcade</h4>
                  <p className="font-mystical text-muted-foreground max-w-lg text-sm">
                    Merkaba Madness merges sacred geometry alignment with fast-paced cosmic action. Designed to activate higher consciousness while accumulating Stellar Credits.
                  </p>
                </div>
              </div>

              {/* Purpose & Application Details */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-cosmic" />
                  {t.purposeTitle}
                </h3>
                <p className="font-mystical text-muted-foreground leading-relaxed">
                  {t.purposeDesc}
                </p>
              </div>

              {/* Google Sign-In & Auth Disclosures */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  {t.googleAuthTitle}
                </h3>
                <p className="font-mystical text-muted-foreground mb-4">
                  {t.googleAuthDesc}
                </p>
                <ul className="space-y-2.5">
                  {t.authPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm font-mystical text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Privacy & Non-Monetary Gambling Notice */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-semibold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  {t.gdprTitle}
                </h3>
                <p className="font-mystical text-muted-foreground leading-relaxed">
                  {t.gdprDesc}
                </p>
              </div>

              {/* Key Features */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  {t.featuresTitle}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {t.features.map((feature, idx) => (
                    <div key={idx} className="bg-background/40 border border-border/40 p-4 rounded-xl">
                      <h4 className="font-cosmic text-base font-semibold text-amber-300 mb-1">{feature.title}</h4>
                      <p className="font-mystical text-xs text-muted-foreground">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: App Specifications & Policy Links */}
            <div className="space-y-8">
              
              {/* App Specifications Card */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-cosmic" />
                  {t.specsTitle}
                </h3>
                <div className="space-y-3 font-mystical text-sm">
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Developer:</span>
                    <span className="text-white font-medium text-right">{t.specs.developer}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Package:</span>
                    <span className="text-amber-400 font-mono text-xs text-right">{t.specs.packageName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Support:</span>
                    <a href={`mailto:${t.specs.supportEmail}`} className="text-cosmic hover:underline text-right">{t.specs.supportEmail}</a>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Platform:</span>
                    <span className="text-white text-right">{t.specs.platform}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/20">
                    <span className="text-muted-foreground">Age Rating:</span>
                    <span className="text-emerald-400 font-medium text-right">{t.specs.ageRating}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">License:</span>
                    <span className="text-white text-xs text-right">{t.specs.license}</span>
                  </div>
                </div>
              </div>

              {/* Policy & Compliance Links Card (CRITICAL FOR GOOGLE PLAY CONSOLE) */}
              <div className="bg-card/30 border border-amber-500/30 rounded-2xl p-6 backdrop-blur-md shadow-lg shadow-amber-500/5">
                <h3 className="font-cosmic text-xl font-semibold text-amber-300 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  {t.linksTitle}
                </h3>
                <p className="font-mystical text-xs text-muted-foreground mb-4">
                  Official policy documents required for Google Play Store Listing & Data Safety disclosures:
                </p>
                <div className="space-y-3">
                  <Button asChild className="w-full cosmic-hover bg-cosmic-gradient text-white border-none justify-start">
                    <Link to="/privacy-policy/merkaba-madness">
                      <ShieldCheck className="w-4 h-4 mr-2" />
                      {t.privacyBtn}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full border-border/60 text-white hover:bg-card justify-start">
                    <Link to="/terms-of-service/merkaba-madness">
                      <FileText className="w-4 h-4 mr-2 text-amber-400" />
                      {t.termsBtn}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Cross-App Ecosystem Info */}
              <div className="bg-card/30 border border-border/30 rounded-2xl p-6 backdrop-blur-md">
                <h3 className="font-cosmic text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-cosmic" />
                  Stellar Credits Ecosystem
                </h3>
                <p className="font-mystical text-xs text-muted-foreground leading-relaxed">
                  Merkaba Madness is fully integrated with the Timeline Alchemy Studio unified wallet system. Your Stellar Credits balance, avatar profiles, and achievements are shared across all portal titles.
                </p>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MerkabaMadness;
