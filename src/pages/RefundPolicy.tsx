import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  CreditCard, 
  Store, 
  Mail, 
  HelpCircle, 
  ExternalLink,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const RefundPolicy = () => {
  const { language } = useLanguage();
  const currentLang = (language === 'en' || language === 'de') ? 'en' : 'nl';

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Navigation />

        <main className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Back to Home Button */}
            <div className="mb-8">
              <Link to="/">
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-cosmic">
                  <ArrowLeft className="w-4 h-4" />
                  <span>{currentLang === 'nl' ? 'Terug naar Home' : 'Back to Home'}</span>
                </Button>
              </Link>
            </div>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cosmic/10 border border-cosmic/20 text-cosmic text-xs font-semibold mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Timeline Alchemy Studio LLC</span>
              </div>
              <h1 className="font-cosmic text-3xl md:text-5xl font-bold mb-4 text-foreground">
                {currentLang === 'nl' ? 'Teruggavebeleid' : 'Refund Policy'}
              </h1>
              <p className="font-mystical text-muted-foreground text-sm max-w-xl mx-auto">
                {currentLang === 'nl'
                  ? 'Informatie over in-app aankopen, digitale producten en platformvoorwaarden.'
                  : 'Information regarding digital purchases, app store platforms, and transaction policies.'}
              </p>
              <div className="mt-3 text-xs text-muted-foreground font-mono">
                {currentLang === 'nl' ? 'Laatst bijgewerkt: 7 september 2026' : 'Last Updated: September 7, 2026'}
              </div>
            </div>

            {/* Highlighted Banner Statement */}
            <Card className="bg-cosmic/5 border-cosmic/30 mb-8 backdrop-blur-sm">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cosmic/20 text-cosmic flex items-center justify-center shrink-0 mt-0.5">
                  <Store className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-cosmic text-base font-bold text-foreground">
                    {currentLang === 'nl' ? 'Toepasselijk Platformbeleid' : 'Applicable Store & Platform Policies'}
                  </h3>
                  <p className="font-mystical text-sm text-muted-foreground leading-relaxed">
                    {currentLang === 'nl'
                      ? 'Alle aankopen en transacties die plaatsvinden via externe platforms of app-stores (zoals de Google Play Store, Apple App Store of web-platforms) zijn onderworpen aan het specifieke teruggavebeleid en de aankoopvoorwaarden van de betreffende winkel waar de aankoop is gedaan.'
                      : 'All purchases and transactions completed through third-party platforms or app stores (such as the Google Play Store, Apple App Store, or web storefronts) are subject to the specific refund policies, terms of service, and processing rules of the store or platform through which the purchase was originally made.'}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Main Policy Content Sections */}
            <div className="space-y-6">
              
              {/* Section 1: App Store Purchases */}
              <Card className="bg-card/60 border-border/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="font-cosmic text-lg flex items-center gap-2 text-foreground">
                    <CreditCard className="w-5 h-5 text-cosmic" />
                    <span>
                      {currentLang === 'nl' ? '1. In-App & Store Aankopen' : '1. In-App & Store Purchases'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mystical text-sm text-muted-foreground space-y-3 leading-relaxed">
                  <p>
                    {currentLang === 'nl'
                      ? 'Wanneer u een applicatie, game-uitbreiding of digitaal item aanschaft via een app-store (bijvoorbeeld Google Play), wordt de betaling rechtstreeks verwerkt door de betreffende store-aanbieder. Timeline Alchemy Studio LLC heeft geen directe toegang tot uw betalingsgegevens of creditcardinformatie.'
                      : 'When you purchase an application, game enhancement, or digital item via an official app store (such as Google Play), payment processing and billing are managed directly by that store provider. Timeline Alchemy Studio LLC does not collect, store, or directly process your billing details or credit card information.'}
                  </p>
                  <p>
                    {currentLang === 'nl'
                      ? 'Teruggaveverzoeken voor aankopen via de Google Play Store of Apple App Store moeten worden ingediend overeenkomstig het teruggavebeleid van het betreffende platform.'
                      : 'Refund requests for purchases made through the Google Play Store or Apple App Store must be submitted directly in accordance with the official refund policy guidelines of that platform.'}
                  </p>
                </CardContent>
              </Card>

              {/* Section 2: Virtual Items & Stellar Credits */}
              <Card className="bg-card/60 border-border/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="font-cosmic text-lg flex items-center gap-2 text-foreground">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span>
                      {currentLang === 'nl' ? '2. Virtuele Goederen & Stellar Credits' : '2. Virtual Goods & Stellar Credits'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mystical text-sm text-muted-foreground space-y-3 leading-relaxed">
                  <p>
                    {currentLang === 'nl'
                      ? 'Onze applicaties en gesimuleerde casinospellen (zoals Cosmic Slots, Blackhole Blackjack en Galactic Poker) maken gebruik van virtuele, niet-geldelijke Stellar Credits. Virtuele valuta en in-game items hebben geen echte geldwaarde en kunnen niet worden ingewisseld voor echt geld of contant geld.'
                      : 'Our applications and simulated casino entertainment games (including Cosmic Slots, Blackhole Blackjack, and Galactic Poker) utilize virtual, non-monetary Stellar Credits. Virtual currency and digital goods have no real-world monetary value and cannot be exchanged for cash, prizes, or real currency payouts.'}
                  </p>
                </CardContent>
              </Card>

              {/* Section 3: How to Request a Refund */}
              <Card className="bg-card/60 border-border/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="font-cosmic text-lg flex items-center gap-2 text-foreground">
                    <HelpCircle className="w-5 h-5 text-cosmic" />
                    <span>
                      {currentLang === 'nl' ? '3. Hoe vraagt u een teruggave aan?' : '3. How to Request a Refund'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mystical text-sm text-muted-foreground space-y-3 leading-relaxed">
                  <p>
                    {currentLang === 'nl'
                      ? 'Voor aankopen gedaan via de Google Play Store kunt u binnen 48 uur na de aankoop een teruggave aanvragen via uw Google Account:'
                      : 'For purchases completed through the Google Play Store, you can request a refund directly within 48 hours of purchase via your Google Account:'}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>
                      {currentLang === 'nl' 
                        ? 'Ga naar play.google.com en log in op uw account.' 
                        : 'Navigate to play.google.com/store/account/orderhistory.'}
                    </li>
                    <li>
                      {currentLang === 'nl' 
                        ? 'Selecteer Bestelgeschiedenis en zoek de betreffende bestelling.' 
                        : 'Select Order History and locate the transaction.'}
                    </li>
                    <li>
                      {currentLang === 'nl' 
                        ? 'Klik op Een teruggave aanvragen of Rapporteer een probleem.' 
                        : 'Click "Request a refund" or "Report a problem" and follow the store instructions.'}
                    </li>
                  </ul>
                  <div className="pt-2">
                    <a 
                      href="https://support.google.com/googleplay/answer/2479637" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-cosmic hover:underline"
                    >
                      <span>{currentLang === 'nl' ? 'Google Play Helpcentrum' : 'Google Play Refund Support Page'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4: Contact & Support */}
              <Card className="bg-card/60 border-border/60 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="font-cosmic text-lg flex items-center gap-2 text-foreground">
                    <Mail className="w-5 h-5 text-cosmic" />
                    <span>
                      {currentLang === 'nl' ? '4. Vragen & Support' : '4. Support & Contact'}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-mystical text-sm text-muted-foreground space-y-3 leading-relaxed">
                  <p>
                    {currentLang === 'nl'
                      ? 'Als u vragen heeft over een specifieke transactie of hulp nodig heeft met uw account, neem dan gerust contact op met ons ondersteuningsteam:'
                      : 'If you have questions about a transaction or need assistance with your account, please reach out to our support team:'}
                  </p>
                  <div className="bg-background/80 p-4 rounded-xl border border-border/60 text-xs space-y-1">
                    <div className="font-semibold text-foreground">Timeline Alchemy Studio LLC</div>
                    <div>Email: <a href="mailto:info@timeline-alchemy.net" className="text-cosmic hover:underline">info@timeline-alchemy.net</a></div>
                    <div>Adres: 1209 Mountain Road Pl Ne Ste N, Albuquerque, NM 87110, United States</div>
                  </div>
                </CardContent>
              </Card>

            </div>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default RefundPolicy;