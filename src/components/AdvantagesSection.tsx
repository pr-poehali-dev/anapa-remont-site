import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: "Hammer",
      title: "15 лет опыта",
      description: "Профессиональная команда с многолетним опытом в строительстве и дизайне интерьеров"
    },
    {
      icon: "Clock",
      title: "Соблюдение сроков",
      description: "Гарантируем выполнение работ точно в срок без задержек"
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Предоставляем гарантию на все виды выполненных работ до 3 лет"
    },
    {
      icon: "Calculator",
      title: "Фиксированная цена",
      description: "Стоимость не изменится в процессе работы - никаких доплат"
    },
    {
      icon: "Award",
      title: "Качественные материалы",
      description: "Работаем только с проверенными поставщиками и сертифицированными материалами"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="font-montserrat font-bold text-4xl text-center text-construction-black mb-12">
          Наши 5 преимуществ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-beige border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in">
              <CardContent className="p-6 text-center">
                <div className="bg-construction-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="font-montserrat font-semibold text-xl text-construction-black mb-3">
                  {advantage.title}
                </h3>
                <p className="text-construction-gray leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;