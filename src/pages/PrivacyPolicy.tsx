import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  // Ensure the Google CMP revocation function is available globally for the web CMP
  useEffect(() => {
    // If we want to dynamically show/hide the revocation link based on whether Google CMP is loaded
    // we could do it here, but a static link using javascript:googlefc.callbackQueue... is standard.
  }, []);

  return (
    <div className="min-h-screen bg-gradient-cosmic">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-black/40 p-8 rounded-xl backdrop-blur-sm border border-purple-900/50">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-white mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Privacy Policy
            </h1>
            
            <div className="prose prose-invert max-w-none text-gray-300">
              <p className="mb-4"><strong>Last Updated:</strong> May 2026</p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to the Cosmic Casino Collection ("we," "our," or "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our mobile applications (Blackhole Blackjack, Cosmic Slots, Galactic Poker).
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h2>
              <p className="mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and demographic information, that you voluntarily give to us when you register with our applications using services like Google Sign-In or Apple Sign-In.</li>
                <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the applications, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the applications.</li>
                <li><strong>Financial Data:</strong> Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services. All financial data is stored by our payment processors (e.g., Apple Store, Google Play Store, Stripe), and you are encouraged to review their privacy policies.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Use of Your Information</h2>
              <p className="mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via our applications to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Create and manage your account.</li>
                <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                <li>Serve tailored advertising, including through Google AdMob.</li>
                <li>Monitor and analyze usage and trends to improve your experience.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Third-Party Services & Advertising (Google UMP)</h2>
              <p className="mb-4">
                We use third-party advertising companies to serve ads when you visit our applications. These companies may use information about your visits to our apps and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.
              </p>
              <p className="mb-4">
                We use Google AdMob and Google's User Messaging Platform (UMP) SDK to manage consent and deliver personalized or non-personalized advertisements based on your preferences.
              </p>
              
              <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30 my-6">
                <h3 className="text-xl font-semibold text-white mb-3">Manage Your Consent (GDPR / CPRA)</h3>
                <p className="mb-4 text-sm text-gray-400">
                  You have the right to withdraw your consent for data collection and personalized advertising at any time. 
                  If you are using our mobile applications, you can change your consent preferences directly within the settings menu of the app.
                  If you are using our web platforms, you can update your privacy preferences using the link below:
                </p>
                {/* Google CMP Revocation Link */}
                <a 
                  href="javascript:googlefc.callbackQueue.push(googlefc.showRevocationMessage)" 
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition-colors duration-200"
                >
                  Privacy & Cookie Settings (Revoke Consent)
                </a>
              </div>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Security of Your Information</h2>
              <p className="mb-4">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Contact Us</h2>
              <p className="mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at: support@sh4m4ni4k.nl.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;