import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-black/40 p-8 rounded-xl backdrop-blur-sm border border-purple-900/50">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-white mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Terms of Service
            </h1>
            
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4"><strong>Last Updated:</strong> July 2026</p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement made between you and Timeline Alchemy Studio LLC ("we," "us," or "our"), concerning your access to and use of our website, mobile applications (including Lumina Enlightenment, Timeless Awareness, Re-Member, Cosmic Slots, Blackhole Blackjack, Galactic Poker, Cosmic Roulette, Galactic Pinball), and related services.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Account Registration & Google Services</h2>
              <p className="mb-4">
                When using our applications, you may log in via Google Sign-In or Google Play Games Services. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Intellectual Property Rights</h2>
              <p className="mb-4">
                Unless otherwise indicated, the applications, code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics are owned or controlled by Timeline Alchemy Studio LLC and are protected by copyright and trademark laws.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. User Representations & Code of Conduct</h2>
              <p className="mb-4">
                By using our services, you represent and warrant that:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>All registration information you submit will be true, accurate, current, and complete.</li>
                <li>You will maintain the accuracy of such information and promptly update it as necessary.</li>
                <li>You have the legal capacity and agree to comply with these Terms of Service.</li>
                <li>You will not use the service for any unlawful or unauthorized purpose.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Disclaimer & Limitation of Liability</h2>
              <p className="mb-4">
                Our services, applications, and content (including spiritual and astrological cycle calculations in Lumina Enlightenment) are provided on an AS-IS and AS-AVAILABLE basis for informational and entertainment purposes. Timeline Alchemy Studio LLC makes no warranties regarding absolute precision or medical suitability.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact Us</h2>
              <p className="mb-4">
                If you have any questions or concerns regarding these Terms of Service, please <a href="mailto:info@timeline-alchemy.com" className="text-purple-400 hover:text-purple-300 underline">contact us via email</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;