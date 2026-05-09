import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Hammer, Rocket, Sparkles } from 'lucide-react';

const TimelineAlchemyStatus = () => {
  const { t } = useLanguage();

  const screenshots = [
    {
      url: '/images/timeline-alchemy/portal.png',
      title: 'The Portal',
      description: 'Your gateway to content alchemy.'
    },
    {
      url: '/images/timeline-alchemy/forge.png',
      title: 'Content Forge',
      description: 'Where trends are transformed into soul-resonant transmissions.'
    },
    {
      url: '/images/timeline-alchemy/feed.png',
      title: 'Community Feed',
      description: 'The heartbeat of the collective consciousness.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navigation />
      
      <main className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/images/timeline-alchemy/logo.png" 
              alt="Timeline Alchemy Logo" 
              className="relative w-32 h-32 md:w-48 md:h-48 object-contain"
              onError={(e) => {
                // Fallback if image doesn't exist yet
                (e.target as HTMLImageElement).src = 'https://raw.githubusercontent.com/lucide-react/lucide/main/icons/sparkles.svg';
              }}
            />
          </div>
          
          <div className="space-y-4 max-w-3xl">
            <Badge variant="outline" className="px-4 py-1 border-primary/50 text-primary animate-pulse">
              <Hammer className="w-3 h-3 mr-2" />
              {t('common.maintenanceMode')}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
              {t('timelineAlchemy.underConstruction.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('timelineAlchemy.underConstruction.description')}
            </p>
          </div>

          <div className="flex gap-4">
            <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
              <Link to="/">
                <Sparkles className="w-4 h-4 mr-2" />
                {t('timelineAlchemy.underConstruction.backToPortal')}
              </Link>
            </Button>
          </div>
        </div>

        {/* Screenshots Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {screenshots.map((screen, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-white/5 overflow-hidden group hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <CardContent className="p-0">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={screen.url} 
                    alt={screen.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/placeholder.svg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{screen.title}</h3>
                    <p className="text-sm text-white/70">{screen.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-flex flex-col items-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-primary animate-bounce" />
            </div>
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
              {t('timelineAlchemy.underConstruction.stayTuned')}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TimelineAlchemyStatus;
