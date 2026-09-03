import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Gamepad2, 
  Sparkles, 
  Star, 
  Smartphone, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle,
  Coins,
  Scale
} from 'lucide-react';

interface GameTermsMeta {
  id: string;
  name: string;
  category: string;
  googleAppName: string;
  icon: React.ElementType;
  description: string;
}

const APPS_TERMS_META: Record<string, GameTermsMeta> = {
  'master': {
    id: 'master',
    name: 'Timeline Alchemy Studio (Master Terms)',
    category: 'Portal',
    googleAppName: 'Timeline Alchemy Studio & Cosmic Unity Portal',
    icon: Sparkles,
    description: 'Master Terms of Service governing access to Timeline Alchemy Studio LLC websites, platforms, and applications.'
  },
  'cosmic-slots': {
    id: 'cosmic-slots',
    name: 'Cosmic Slots',
    category: 'Game',
    googleAppName: 'Cosmic Slots',
    icon: Gamepad2,
    description: 'Terms of Service for Cosmic Slots (Simulated Slot Machine, Non-Monetary Currency).'
  },
  'blackhole-blackjack': {
    id: 'blackhole-blackjack',
    name: 'Blackhole Blackjack',
    category: 'Game',
    googleAppName: 'Blackhole Blackjack',
    icon: Gamepad2,
    description: 'Terms of Service for Blackhole Blackjack.'
  },
  'galactic-poker': {
    id: 'galactic-poker',
    name: 'Galactic Poker',
    category: 'Game',
    googleAppName: 'Galactic Poker',
    icon: Gamepad2,
    description: 'Terms of Service for Galactic Poker.'
  },
  'cosmic-roulette': {
    id: 'cosmic-roulette',
    name: 'Cosmic Roulette',
    category: 'Game',
    googleAppName: 'Cosmic Roulette',
    icon: Gamepad2,
    description: 'Terms of Service for Cosmic Roulette.'
  },
  'galactic-pinball': {
    id: 'galactic-pinball',
    name: 'Galactic Pinball',
    category: 'Game',
    googleAppName: 'Galactic Pinball',
    icon: Gamepad2,
    description: 'Terms of Service for Galactic Pinball.'
  },
  'merkaba-madness': {
    id: 'merkaba-madness',
    name: 'Merkaba Madness',
    category: 'Game',
    googleAppName: 'Merkaba Madness',
    icon: Gamepad2,
    description: 'Terms of Service for Merkaba Madness.'
  },
  'lumina': {
    id: 'lumina',
    name: 'Lumina Enlightenment',
    category: 'App',
    googleAppName: 'Lumina Enlightenment',
    icon: Star,
    description: 'Terms of Service for Lumina Enlightenment.'
  },
  'timeless-awareness': {
    id: 'timeless-awareness',
    name: 'Timeless Awareness',
    category: 'App',
    googleAppName: 'Timeless Awareness',
    icon: Star,
    description: 'Terms of Service for Timeless Awareness.'
  },
  're-member': {
    id: 're-member',
    name: 'Re-Member',
    category: 'App',
    googleAppName: 'Re-Member',
    icon: Sparkles,
    description: 'Terms of Service for Re-Member.'
  }
};

const TermsOfService: React.FC = () => {
  const { appSlug } = useParams<{ appSlug?: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(
    appSlug && APPS_TERMS_META[appSlug] ? appSlug : 'master'
  );

  useEffect(() => {
    if (appSlug && APPS_TERMS_META[appSlug]) {
      setActiveTab(appSlug);
    }
  }, [appSlug]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'master') {
      navigate('/terms-of-service');
    } else {
      navigate(`/terms-of-service/${tabId}`);
    }
  };

  const currentApp = APPS_TERMS_META[activeTab] || APPS_TERMS_META['master'];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header Banner */}
      <section className="py-12 bg-card/60 border-b border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-cosmic-gradient opacity-10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cosmic/10 border border-cosmic/20 text-cosmic text-xs font-semibold mb-3">
                <Scale className="w-4 h-4" />
                <span>Legal Framework & User Agreement</span>
              </div>
              <h1 className="font-cosmic text-3xl md:text-5xl font-bold text-foreground">
                Terms of Service
              </h1>
              <p className="font-mystical text-muted-foreground mt-2 max-w-2xl">
                Please review these Terms of Service governing your access to and use of Timeline Alchemy Studio LLC platforms and individual applications.
              </p>
            </div>
            <div className="text-sm font-mystical text-muted-foreground bg-background/50 p-4 rounded-xl border border-border">
              <p><strong>Effective Date:</strong> July 2026</p>
              <p><strong>Last Updated:</strong> September 2026</p>
              <p><strong>Publisher:</strong> Timeline Alchemy Studio LLC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Game Selection Tabs Bar */}
        <div className="mb-10">
          <h2 className="font-cosmic text-lg font-semibold mb-3 text-cosmic-gradient flex items-center gap-2">
            <Smartphone className="w-5 h-5" />
            <span>Select Application Terms of Service:</span>
          </h2>
          <div className="flex flex-wrap gap-2 p-2 bg-card/40 rounded-xl border border-border/60">
            {Object.values(APPS_TERMS_META).map((app) => {
              const Icon = app.icon;
              const isActive = activeTab === app.id;
              return (
                <button
                  key={app.id}
                  onClick={() => handleTabChange(app.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-mystical text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-cosmic text-white font-semibold shadow-lg shadow-cosmic/20 scale-[1.02]'
                      : 'bg-background/60 text-muted-foreground hover:text-foreground hover:bg-card/80'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cosmic'}`} />
                  <span>{app.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Selection Box */}
        <div className="bg-card/50 border border-cosmic/30 p-6 rounded-2xl mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-cosmic px-2.5 py-0.5 rounded bg-cosmic/10 border border-cosmic/20">
                {currentApp.category} Terms Selected
              </span>
              <h2 className="font-cosmic text-2xl font-bold text-foreground mt-2">
                {currentApp.name} Terms of Service
              </h2>
              <p className="font-mystical text-muted-foreground text-sm mt-1">
                {currentApp.description}
              </p>
            </div>
            <div className="text-xs font-mystical text-muted-foreground bg-background px-3 py-1.5 rounded-lg border border-border">
              Application Identifier: <strong>{currentApp.googleAppName}</strong>
            </div>
          </div>
        </div>

        {/* Terms Document Body */}
        <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-10">

          {/* Section 1 */}
          <section className="bg-card/30 p-8 rounded-2xl border border-border/80">
            <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and <strong>Timeline Alchemy Studio LLC</strong> ("we," "us," or "our") concerning your access to and use of our website, mobile applications (including <strong>{currentApp.name}</strong>), and related services.
            </p>
            <p>
              By accessing or downloading <strong>{currentApp.name}</strong>, you acknowledge that you have read, understood, and agree to be bound by all of these Terms. If you do not agree with all of these Terms, you are expressly prohibited from using the application and must discontinue use immediately.
            </p>
          </section>

          {/* Section 2: Account Registration & Google Authentication */}
          <section className="bg-card/30 p-8 rounded-2xl border border-border/80">
            <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
              2. User Accounts & Google Services Integration
            </h2>
            <p>
              When accessing <strong>{currentApp.name}</strong>, you may choose to log in using <strong>Google Sign-In</strong> or <strong>Google Play Games Services</strong>. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate account information as maintained in your Google profile.</li>
              <li>Maintain the security of your Google account credentials.</li>
              <li>Notify us immediately if you discover any unauthorized access to your account.</li>
              <li>Accept responsibility for all gameplay activities, virtual currency transactions, and leaderboard scores registered under your authenticated profile.</li>
            </ul>
          </section>

          {/* Section 3: App-Specific Rules */}
          {(activeTab === 'cosmic-slots' || activeTab === 'blackhole-blackjack' || activeTab === 'galactic-poker' || activeTab === 'cosmic-roulette') && (
            <section className="bg-amber-500/10 p-8 rounded-2xl border border-amber-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <Coins className="w-5 h-5" />
                </div>
                <h2 className="font-cosmic text-2xl font-semibold text-foreground m-0">
                  3. Virtual Currency & Simulated Gambling Disclaimer ({currentApp.name})
                </h2>
              </div>
              
              <div className="space-y-4 text-foreground/90">
                <p>
                  <strong>NO REAL-MONEY GAMBLING:</strong> {currentApp.name} is a single-player, simulated casino game intended strictly for entertainment purposes. No real money, legal tender, or real-world goods/services can be deposited, wagered, bet, or won in this application.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Virtual Items & Currency:</strong> All coins, chips, or "Stellar Credits" in {currentApp.name} are virtual game items with zero real-world monetary value. They cannot be exchanged, redeemed, or refunded for cash, credit, or tangible items under any circumstances.</li>
                  <li><strong>In-App Purchases:</strong> If you purchase virtual credit bundles via Google Play Billing or Apple App Store, you receive a limited, revocable, non-transferable license to use those virtual items within {currentApp.name}. All purchases are final and non-refundable except as required by applicable store policies.</li>
                  <li><strong>Age Requirement:</strong> Because {currentApp.name} contains simulated gambling mechanics, users must be at least 18 years of age (or the age of legal majority in your jurisdiction) to download and play.</li>
                </ul>
              </div>
            </section>
          )}

          {activeTab === 'galactic-pinball' && (
            <section className="bg-cosmic/10 p-8 rounded-2xl border border-cosmic/30">
              <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
                3. Fair Play & Arcade Rules (Galactic Pinball)
              </h2>
              <p>
                Galactic Pinball features competitive high-score tracking. Players agree not to use memory editors, speed hacks, automated bots, or modified APKs to falsify pinball scores. Timeline Alchemy Studio LLC reserves the right to remove cheated scores from global leaderboards.
              </p>
            </section>
          )}

          {(activeTab === 'lumina' || activeTab === 'timeless-awareness' || activeTab === 're-member') && (
            <section className="bg-cosmic/10 p-8 rounded-2xl border border-cosmic/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-cosmic/20 flex items-center justify-center text-cosmic">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="font-cosmic text-2xl font-semibold text-foreground m-0">
                  3. Mindfulness & Informational Disclaimer ({currentApp.name})
                </h2>
              </div>
              <p>
                {currentApp.name} provides spiritual philosophy, cycle calculations, and mindfulness experiences. All content is intended for personal reflection and entertainment only. It does not constitute professional medical, psychiatric, or health advice.
              </p>
            </section>
          )}

          {/* Section 4: Intellectual Property */}
          <section className="bg-card/30 p-8 rounded-2xl border border-border/80">
            <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
              4. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise indicated, <strong>{currentApp.name}</strong>, including all source code, databases, artwork, audio recordings, game graphics, symbols, trademarks, and logos, are owned or controlled by <strong>Timeline Alchemy Studio LLC</strong> and are protected by international copyright and trademark laws.
            </p>
            <p>
              You are granted a non-exclusive, non-transferable, revocable license to access and use <strong>{currentApp.name}</strong> solely for your personal, non-commercial entertainment.
            </p>
          </section>

          {/* Section 5: Code of Conduct */}
          <section className="bg-card/30 p-8 rounded-2xl border border-border/80">
            <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
              5. User Code of Conduct
            </h2>
            <p>When using our applications, you warrant that you will not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Reverse engineer, decompile, or disassemble any part of the application.</li>
              <li>Attempt to circumvent security measures or access restrictions.</li>
              <li>Use automated scripts, bots, or hacks to manipulate leaderboards or virtual currency balances.</li>
              <li>Engage in conduct that disrupts the enjoyment of other users or compromises system stability.</li>
            </ul>
          </section>

          {/* Section 6: Limitation of Liability */}
          <section className="bg-card/30 p-8 rounded-2xl border border-border/80">
            <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
              6. Disclaimer & Limitation of Liability
            </h2>
            <p>
              <strong>{currentApp.name}</strong> is provided on an "AS-IS" and "AS-AVAILABLE" basis. Timeline Alchemy Studio LLC disclaims all warranties, express or implied, including fitness for a particular purpose and non-infringement.
            </p>
            <p>
              In no event shall Timeline Alchemy Studio LLC be liable for any indirect, consequential, or incidental damages arising out of your use or inability to use the application.
            </p>
          </section>

          {/* Section 7: Contact Us */}
          <section className="bg-card/30 p-8 rounded-2xl border border-border/80">
            <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
              7. Contact & Legal Inquiries
            </h2>
            <p>
              If you have any questions or concerns regarding these Terms of Service for <strong>{currentApp.name}</strong>, please contact our legal team:
            </p>
            <div className="mt-4 p-6 bg-background/60 rounded-xl border border-border font-mystical text-sm space-y-1">
              <p className="font-bold text-foreground">Timeline Alchemy Studio LLC</p>
              <p>Legal & Compliance Department</p>
              <p>1209 Mountain Road Pl Ne Ste N, Albuquerque, New Mexico 87110, United States</p>
              <p>Email: <a href="mailto:info@timeline-alchemy.net" className="text-cosmic underline">info@timeline-alchemy.net</a></p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;