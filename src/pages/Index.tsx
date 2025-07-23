import { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PortfolioSection from '@/components/PortfolioSection';
import CalculatorSection from '@/components/CalculatorSection';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-beige-300 font-roboto">
      <Header />
      
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <HeroSection 
          isModalOpen={isModalOpen} 
          setIsModalOpen={setIsModalOpen} 
        />
        <ContactModal onClose={() => setIsModalOpen(false)} />
      </Dialog>

      <AdvantagesSection />
      <StatsSection />
      <TestimonialsSection />
      
      <PortfolioSection 
        selectedImage={selectedImage}
        onImageSelect={setSelectedImage}
        onImageClose={() => setSelectedImage(null)}
      />
      
      <CalculatorSection />
      <Footer />
    </div>
  );
};

export default Index;