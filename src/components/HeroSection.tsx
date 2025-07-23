import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onModalOpen: () => void;
}

const HeroSection = ({ onModalOpen }: HeroSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-beige to-white">
      <div className="container mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <img 
            src="https://cdn.poehali.dev/files/e47f6115-10c2-4de8-acb5-830126c5d7ad.jpeg" 
            alt="Ремонт и Дизайн" 
            className="h-24 md:h-32 w-auto mx-auto mb-6"
          />
        </div>
        <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-construction-black mb-6 animate-fade-in">
          Ремонт и дизайн квартир
          <br />
          <span className="text-4xl md:text-5xl">в Анапе</span>
        </h1>
        <p className="text-xl text-construction-gray mb-8 max-w-2xl mx-auto animate-fade-in">
          Профессиональные услуги по ремонту и дизайну интерьеров. Создаем пространства вашей мечты с гарантией качества.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-construction-black text-white hover:bg-gray-800 px-8 py-4 text-lg"
                onClick={onModalOpen}
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
            </DialogTrigger>
          </Dialog>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-construction-black text-construction-black hover:bg-construction-black hover:text-white px-8 py-4 text-lg"
            onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;