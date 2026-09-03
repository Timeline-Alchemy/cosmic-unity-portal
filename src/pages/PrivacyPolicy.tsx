import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Gamepad2, 
  Sparkles, 
  Star, 
  Smartphone, 
  Lock, 
  Database, 
  Trash2, 
  UserCheck, 
  Mail, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GamePolicyMeta {
  id: string;
  name: string;
  category: string;
  googleAppName: string;
  icon: React.ElementType;
  description: string;
}

const APPS_META: Record<string, GamePolicyMeta> = {
  'master': {
    id: 'master',
    name: 'Timeline Alchemy Studio (Master Policy)',
    category: 'Portal',
    googleAppName: 'Timeline Alchemy Studio & Cosmic Unity Portal',
    icon: Sparkles,
    description: 'Master privacy disclosures for Timeline Alchemy Studio LLC and all connected web and mobile applications.'
  },
  'cosmic-slots': {
    id: 'cosmic-slots',
    name: 'Cosmic Slots',
    category: 'Game',
    googleAppName: 'Cosmic Slots',
    icon: Gamepad2,
    description: 'Privacy Policy details specific to the Cosmic Slots mobile application & web edition.'
  },
  'blackhole-blackjack': {
    id: 'blackhole-blackjack',
    name: 'Blackhole Blackjack',
    category: 'Game',
    googleAppName: 'Blackhole Blackjack',
    icon: Gamepad2,
    description: 'Privacy Policy details specific to Blackhole Blackjack.'
  },
  'galactic-poker': {
    id: 'galactic-poker',
    name: 'Galactic Poker',
    category: 'Game',
    googleAppName: 'Galactic Poker',
    icon: Gamepad2,
    description: 'Privacy Policy details specific to Galactic Poker.'
  },
  'cosmic-roulette': {
    id: 'cosmic-roulette',
    name: 'Cosmic Roulette',
    category: 'Game',
    googleAppName: 'Cosmic Roulette',
    icon: Gamepad2,
    description: 'Privacy Policy details specific to Cosmic Roulette.'
  },
  'galactic-pinball': {
    id: 'galactic-pinball',
    name: 'Galactic Pinball',
    category: 'Game',
    googleAppName: 'Galactic Pinball',
    icon: Gamepad2,
    description: 'Privacy Policy details specific to Galactic Pinball.'
  },
  'merkaba-madness': {
    id: 'merkaba-madness',
    name: 'Merkaba Madness',
    category: 'Game',
    googleAppName: 'Merkaba Madness',
    icon: Gamepad2,
    description: 'Privacy Policy details specific to Merkaba Madness.'
  },
  'lumina': {
    id: 'lumina',
    name: 'Lumina Enlightenment',
    category: 'App',
    googleAppName: 'Lumina Enlightenment',
    icon: Star,
    description: 'Privacy Policy details specific to the Lumina Enlightenment mindfulness & cycle app.'
  },
  'timeless-awareness': {
    id: 'timeless-awareness',
    name: 'Timeless Awareness',
    category: 'App',
    googleAppName: 'Timeless Awareness',
    icon: Star,
    description: 'Privacy Policy details specific to Timeless Awareness.'
  },
  're-member': {
    id: 're-member',
    name: 'Re-Member',
    category: 'App',
    googleAppName: 'Re-Member',
    icon: Sparkles,
    description: 'Privacy Policy details specific to the Re-Member experience.'
  }
};

const PrivacyPolicy: React.FC = () => {
  const { appSlug } = useParams<{ appSlug?: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>(
    appSlug && APPS_META[appSlug] ? appSlug : 'master'
  );

  useEffect(() => {
    if (appSlug && APPS_META[appSlug]) {
      setActiveTab(appSlug);
    }
  }, [appSlug]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (tabId === 'master') {
      navigate('/privacy-policy');
    } else {
      navigate(`/privacy-policy/${tabId}`);
    }
  };

  const currentApp = APPS_META[activeTab] || APPS_META['master'];

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
                <ShieldCheck className="w-4 h-4" />
                <span>Google OAuth & Data Protection Disclosures</span>
              </div>
              <h1 className="font-cosmic text-3xl md:text-5xl font-bold text-foreground">
                Privacy Policy & Data Rights
              </h1>
              <p className="font-mystical text-muted-foreground mt-2 max-w-2xl">
                Timeline Alchemy Studio LLC is committed to full transparency regarding data collection, Google authentication, and user data rights across all our games and applications.
              </p>
            </div>
            <div className="text-sm font-mystical text-muted-foreground bg-background/50 p-4 rounded-xl border border-border">
              <p><strong>Effective Date:</strong> May 2026</p>
              <p><strong>Last Updated:</strong> September 2026</p>
              <p><strong>Entity:</strong> Timeline Alchemy Studio LLC</p>
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
            <span>Select Game / Application Privacy Policy:</span>
          </h2>
          <div className="flex flex-wrap gap-2 p-2 bg-card/40 rounded-xl border border-border/60">
            {Object.values(APPS_META).map((app) => {
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

        {/* Selected App Active Summary Box */}
        <div className="bg-card/50 border border-cosmic/30 p-6 rounded-2xl mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-cosmic px-2.5 py-0.5 rounded bg-cosmic/10 border border-cosmic/20">
                {currentApp.category} Policy Selected
              </span>
              <h2 className="font-cosmic text-2xl font-bold text-foreground mt-2">
                {currentApp.name} Privacy Policy
              </h2>
              <p className="font-mystical text-muted-foreground text-sm mt-1">
                {currentApp.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mystical text-muted-foreground">
              <span className="bg-background px-3 py-1.5 rounded-lg border border-border">
                OAuth Consent Name: <strong>{currentApp.googleAppName}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Policy Document Body */}
        <div className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-10">

          {/* 1. Google API Services Compliance & User Data Policy */}
          <section className="bg-card/30 p-8 rounded-2xl border border-border/80">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-cosmic/10 flex items-center justify-center text-cosmic">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="font-cosmic text-2xl font-semibold text-foreground m-0">
                1. Google API Services User Data Policy & OAuth Compliance
              </h2>
            </div>
            <p className="text-foreground/90">
              <strong>Timeline Alchemy Studio LLC's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-cosmic underline">Google API Services User Data Policy</a>, including the Limited Use requirements.</strong>
            </p>
            <p>
              When you use Google Sign-In or Google Play Games Services in <strong>{currentApp.name}</strong> or any of our applications, we request access only to essential basic profile scopes (such as email address, public display name, and unique Google account identifier). We do not request restricted or sensitive scopes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-background/60 p-4 rounded-xl border border-border/60">
                <h4 className="font-cosmic text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-cosmic" />
                  What Google Data We Collect
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li><strong>Google User ID:</strong> Unique anonymized player ID for authentication.</li>
                  <li><strong>Primary Email Address:</strong> Used strictly for user profile identity verification.</li>
                  <li><strong>Public Display Name & Avatar:</strong> Displayed on global in-game leaderboards.</li>
                  <li><strong>OAuth Access Tokens:</strong> Temporary secure tokens managed by Google SDKs.</li>
                </ul>
              </div>
              <div className="bg-background/60 p-4 rounded-xl border border-border/60">
                <h4 className="font-cosmic text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4 text-cosmic" />
                  How Google Data Is Used
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Authenticating player accounts without requiring password creation.</li>
                  <li>Synchronizing game save states and coin balances securely across devices.</li>
                  <li>Submitting achievements and scores to Google Play Games Services leaderboards.</li>
                  <li>Preventing unauthorized account access and fraud.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Comprehensive Data Collection */}
          <section className="bg-card/30 p-8 rounded-2xl border border-border/80">
            <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
              2. Information We Collect in {currentApp.name}
            </h2>
            <p>
              We collect information to provide better services to all our users. Depending on how you interact with <strong>{currentApp.name}</strong>, we collect:
            </p>
            
            <h3 className="font-cosmic text-xl font-semibold text-foreground mt-6 mb-3">A. Voluntarily Provided Information</h3>
            <p>
              When you log into {currentApp.name} using Google Sign-In or contact our support team at <a href="mailto:info@timeline-alchemy.net" className="text-cosmic underline">info@timeline-alchemy.net</a>, we receive your email address and any details included in your inquiry.
            </p>

            <h3 className="font-cosmic text-xl font-semibold text-foreground mt-6 mb-3">B. Automatically Collected Technical & Gameplay Data</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Device & Network Information:</strong> Operating system version, device model, language preferences, IP address, and network connection status.</li>
              <li><strong>Gameplay Progress & Statistics:</strong> Virtual credit balance, level achievements, spin counts, unlocked features, and game session timestamps.</li>
              <li><strong>Diagnostic & Performance Data:</strong> Application crash logs, load times, and technical error reports to ensure app stability.</li>
            </ul>

            <h3 className="font-cosmic text-xl font-semibold text-foreground mt-6 mb-3">C. In-App Purchases & Financial Information</h3>
            <p>
              All financial transactions and purchases (such as virtual credit bundles) are processed entirely by third-party store billing platforms: <strong>Google Play Store Billing</strong> or <strong>Apple App Store In-App Purchases</strong>. Timeline Alchemy Studio LLC never receives, views, or stores your credit card details or bank account information.
            </p>

            <h3 className="font-cosmic text-xl font-semibold text-foreground mt-6 mb-3">D. Advertising & Analytics Data (Google AdMob)</h3>
            <p>
              {currentApp.name} may utilize Google AdMob to display rewarded or interstitial advertisements. AdMob may use your Mobile Advertising Identifier (AAID on Android, IDFA on iOS) to serve relevant or non-personalized advertisements based on your consent settings managed through Google's User Messaging Platform (UMP).
            </p>
          </section>

          {/* 3. Game-Specific Privacy Nuances */}
          {activeTab === 'cosmic-slots' && (
            <section className="bg-cosmic/10 p-8 rounded-2xl border border-cosmic/30">
              <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-cosmic" />
                3. App-Specific Disclosures: Cosmic Slots
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>No Real-Money Gambling:</strong> Cosmic Slots is a single-player, simulated slot machine game created for entertainment purposes only. No real money can be deposited, wagered, or won. All currency ("Stellar Credits") is purely virtual.</li>
                <li><strong>Cloud Save & Leaderboards:</strong> Your Google Play Games profile is used to store your Stellar Credit balance, daily streak rewards, and level progression so that you can resume your slot progress across devices.</li>
                <li><strong>Ad Rewards:</strong> When you watch optional rewarded video ads to earn free virtual credits, Google AdMob processes ad views in accordance with Google's Advertising Privacy Policy.</li>
              </ul>
            </section>
          )}

          {activeTab === 'blackhole-blackjack' && (
            <section className="bg-cosmic/10 p-8 rounded-2xl border border-cosmic/30">
              <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-cosmic" />
                3. App-Specific Disclosures: Blackhole Blackjack
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Simulated Card Mechanics:</strong> Blackhole Blackjack is a single-player simulated card game. No real-money wagering is conducted.</li>
                <li><strong>Saved Hands & Chips:</strong> Your virtual chip stack and blackjack win ratios are stored under your Google account profile.</li>
              </ul>
            </section>
          )}

          {activeTab === 'galactic-poker' && (
            <section className="bg-cosmic/10 p-8 rounded-2xl border border-cosmic/30">
              <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-cosmic" />
                3. App-Specific Disclosures: Galactic Poker
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Simulated Texas Hold'em:</strong> Galactic Poker offers simulated poker gameplay with non-monetary virtual chips. No real currency is involved.</li>
                <li><strong>Leaderboard Integration:</strong> High score chip totals are submitted to Google Play Games Services to enable friendly competition on public leaderboards.</li>
              </ul>
            </section>
          )}

          {activeTab === 'cosmic-roulette' && (
            <section className="bg-cosmic/10 p-8 rounded-2xl border border-cosmic/30">
              <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-cosmic" />
                3. App-Specific Disclosures: Cosmic Roulette
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Simulated Wheel Mechanics:</strong> Cosmic Roulette features virtual wheel spins with zero financial payout capability.</li>
                <li><strong>Profile Save:</strong> Bet history and virtual credits are cached locally and synchronized with your Google profile.</li>
              </ul>
            </section>
          )}

          {activeTab === 'galactic-pinball' && (
            <section className="bg-cosmic/10 p-8 rounded-2xl border border-cosmic/30">
              <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Gamepad2 className="w-6 h-6 text-cosmic" />
                3. App-Specific Disclosures: Galactic Pinball
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Arcade High Scores:</strong> High score tables track pinball game scores, ball multipliers, and level completions.</li>
                <li><strong>Physics & Performance Data:</strong> Frame rate and device performance diagnostics are monitored to optimize pinball ball physics across mobile chipsets.</li>
              </ul>
            </section>
          )}

          {activeTab === 'lumina' && (
            <section className="bg-cosmic/10 p-8 rounded-2xl border border-cosmic/30">
              <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-cosmic" />
                3. App-Specific Disclosures: Lumina Enlightenment
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Mindfulness & Cycle Tracking:</strong> Lumina Enlightenment provides consciousness expansion and cycle tracking tools.</li>
                <li><strong>No Medical Advice:</strong> Lumina calculations are provided for informational and spiritual exploration only. We do not collect or store protected health information (PHI).</li>
              </ul>
            </section>
          )}

          {activeTab === 'timeless-awareness' && (
            <section className="bg-cosmic/10 p-8 rounded-2xl border border-cosmic/30">
              <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-cosmic" />
                3. App-Specific Disclosures: Timeless Awareness
              </h2>
              <p>
                Timeless Awareness stores reading progress, bookmark preferences, and meditation frequencies locally or linked to your Google user ID.
              </p>
            </section>
          )}

          {activeTab === 're-member' && (
            <section className="bg-cosmic/10 p-8 rounded-2xl border border-cosmic/30">
              <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-cosmic" />
                3. App-Specific Disclosures: Re-Member
              </h2>
              <p>
                Re-Member tracks user journey milestones and frequency preferences. All user selections are retained under strict data privacy safeguards.
              </p>
            </section>
          )}

          {/* 4. Data Sharing & Third Parties */}
          <section className="bg-card/30 p-8 rounded-2xl border border-border/80">
            <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
              4. Third-Party Service Providers & Data Sharing
            </h2>
            <p>
              We do not sell, rent, or trade user personal information to third parties. We share data only with trusted infrastructure providers who assist in operating our platform:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Cloud Platform & Firebase:</strong> Encrypted backend database and cloud storage hosting.</li>
              <li><strong>Google Play Services & Google Play Games:</strong> User authentication, leaderboards, and achievements.</li>
              <li><strong>Google AdMob:</strong> Ad serving engine supporting GDPR consent frameworks via Google UMP.</li>
              <li><strong>Vercel & Analytics:</strong> Web hosting and aggregate web analytics.</li>
            </ul>
          </section>

          {/* 5. How to Delete Your Data & Revoke Access */}
          <section className="bg-card/30 p-8 rounded-2xl border border-cosmic/40 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                <Trash2 className="w-5 h-5" />
              </div>
              <h2 className="font-cosmic text-2xl font-semibold text-foreground m-0">
                5. User Rights, Data Deletion Requests & OAuth Consent Revocation
              </h2>
            </div>
            <p>
              You have full control over your personal data. In accordance with GDPR, CPRA, and Google API policy, you may at any time request the deletion of your account and associated gameplay data, or revoke Google OAuth authorization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Box A: How to Request Data Deletion */}
              <div className="bg-background/80 p-6 rounded-xl border border-border">
                <h3 className="font-cosmic text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cosmic" />
                  Method 1: Account & Data Deletion Request
                </h3>
                <p className="text-sm mb-4">
                  To request complete deletion of your account, saved scores, and stored profile information for <strong>{currentApp.name}</strong>:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-xs">
                  <li>Send an email to <a href="mailto:info@timeline-alchemy.net" className="text-cosmic font-semibold underline">info@timeline-alchemy.net</a> with the subject line <strong>"Data Deletion Request - {currentApp.name}"</strong>.</li>
                  <li>Include your Google account email address or in-game Player ID.</li>
                  <li>Our support team will verify your identity and permanently delete all your cloud save records within 30 days.</li>
                </ol>
              </div>

              {/* Box B: How to Revoke Google Access */}
              <div className="bg-background/80 p-6 rounded-xl border border-border">
                <h3 className="font-cosmic text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-cosmic" />
                  Method 2: Direct Google OAuth Revocation
                </h3>
                <p className="text-sm mb-4">
                  You can immediately revoke <strong>{currentApp.name}</strong>'s access to your Google Account at any time directly through Google:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-xs">
                  <li>Go to your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-cosmic font-semibold underline">Google Account Security - App Access</a> page.</li>
                  <li>Locate <strong>{currentApp.googleAppName}</strong> in the list of connected apps.</li>
                  <li>Click <strong>"Remove Access"</strong> or <strong>"Delete all connections"</strong>.</li>
                </ol>
              </div>
            </div>

            {/* Google CMP Consent Revocation Widget */}
            <div className="mt-8 bg-cosmic/20 p-6 rounded-xl border border-cosmic/30">
              <h4 className="font-cosmic text-base font-semibold text-foreground mb-2">
                GDPR & Cookie Preference Settings (Google CMP)
              </h4>
              <p className="text-xs text-muted-foreground mb-4">
                If you are viewing our applications in the EU/EEA or UK, you can change your ad consent preferences or revoke consent for personalized cookies below:
              </p>
              <a
                href="javascript:if(window.googlefc&&googlefc.showRevocationMessage){googlefc.showRevocationMessage();}"
                className="inline-flex items-center gap-2 bg-cosmic hover:bg-cosmic/80 text-white text-xs font-semibold py-2.5 px-5 rounded-lg transition-colors"
              >
                <span>Manage Cookie & Ad Consent Settings</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>

          {/* 6. Contact Information */}
          <section className="bg-card/30 p-8 rounded-2xl border border-border/80">
            <h2 className="font-cosmic text-2xl font-semibold text-foreground mb-4">
              6. Data Controller & Contact Information
            </h2>
            <p>
              If you have any questions, privacy concerns, or requests regarding this Privacy Policy or <strong>{currentApp.name}</strong>, please contact our Data Protection Officer:
            </p>
            <div className="mt-4 p-6 bg-background/60 rounded-xl border border-border font-mystical text-sm space-y-1">
              <p className="font-bold text-foreground">Timeline Alchemy Studio LLC</p>
              <p>Attn: Privacy & Data Protection Team</p>
              <p>1209 Mountain Road Pl Ne Ste N, Albuquerque, New Mexico 87110, United States</p>
              <p>Email: <a href="mailto:info@timeline-alchemy.net" className="text-cosmic underline">info@timeline-alchemy.net</a></p>
              <p>Phone: +1(814)8925969</p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;