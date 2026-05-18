import React from 'react';
import Navigation from '@/components/Navigation';
import BooksSection from '@/components/BooksSection';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';

const EBooks = () => {
  const { language } = useLanguage();
  const currentLang = (language === 'en' || language === 'de') ? 'en' : 'nl';

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="font-cosmic text-4xl md:text-5xl font-bold text-cosmic-gradient mb-4">
            E-Books
          </h1>
          <p className="font-mystical text-lg text-muted-foreground">
            {currentLang === 'nl' ? 'Ontdek de boeken van Timeline Alchemy Studio.' : 'Discover the books of Timeline Alchemy Studio.'}
          </p>
        </div>
      </div>
      <BooksSection />
      <Footer />
    </div>
  );
};

export default EBooks;
