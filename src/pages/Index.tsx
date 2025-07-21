import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [area, setArea] = useState(50);
  const [repairType, setRepairType] = useState('cosmetic');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

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

  const portfolioItems = [
    {
      id: 1,
      title: "Квартира в новостройке",
      image: "/img/42a08515-b685-41b6-8732-6523dc3e32a9.jpg",
      description: "Дизайн и ремонт 2-комнатной квартиры 65 м²"
    },
    {
      id: 2,
      title: "Спальня у моря",
      image: "/img/a3bf1e56-5f4a-4b70-b2d2-079ab03b8dbc.jpg", 
      description: "Современный дизайн спальни 25 м²"
    },
    {
      id: 3,
      title: "Кухня-гостиная",
      image: "/img/6872247b-589c-4fe3-a1be-3d5feec90790.jpg",
      description: "Современная кухня 30 м²"
    },
    {
      id: 4,
      title: "Ванная комната",
      image: "/img/16ede625-8e84-4f26-bf13-0c45fa327eeb.jpg",
      description: "Дизайн ванной комнаты 8 м²"
    }
  ];

  const stats = [
    { number: 250, label: "Выполненных проектов", suffix: "+", icon: "Building" },
    { number: 15, label: "Лет опыта", suffix: "", icon: "Calendar" },
    { number: 180, label: "Довольных клиентов", suffix: "+", icon: "Users" },
    { number: 24, label: "Часа в сутки на связи", suffix: "/7", icon: "Clock" }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Замечательная команда! Сделали ремонт квартиры быстро и качественно. Все работы выполнили точно в срок.",
      rating: 5,
      project: "Ремонт 3-комнатной квартиры"
    },
    {
      name: "Михаил Сидоров", 
      text: "Очень довольны результатом! Дизайн превзошел все ожидания, а цена оказалась даже ниже других предложений.",
      rating: 5,
      project: "Дизайн кухни-гостиной"
    },
    {
      name: "Елена Козлова",
      text: "Профессиональный подход на всех этапах. Рекомендую всем, кто хочет качественный ремонт без головной боли!",
      rating: 5,
      project: "Ремонт ванной комнаты"
    }
  ];

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000; 
      const steps = 60;
      const stepDuration = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        const progress = step / steps;
        setProjectsCount(Math.floor(250 * progress));
        setYearsCount(Math.floor(15 * progress));
        setClientsCount(Math.floor(180 * progress));
        
        step++;
        if (step > steps) {
          clearInterval(timer);
          setProjectsCount(250);
          setYearsCount(15);
          setClientsCount(180);
        }
      }, stepDuration);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.disconnect();
        }
      });
    });

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  const calculatePrice = () => {
    const basePrice = {
      cosmetic: 15000,
      capital: 35000,
      luxury: 60000
    };
    
    const multiplier = rooms * 0.3 + 1;
    const areaMultiplier = area / 50;
    const finalPrice = basePrice[repairType as keyof typeof basePrice] * multiplier * areaMultiplier;
    
    setCalculatedPrice(Math.round(finalPrice));
  };

  useEffect(() => {
    calculatePrice();
  }, [rooms, area, repairType]);

  return (
    <div className="min-h-screen bg-beige font-roboto">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-montserrat font-bold text-2xl text-construction-black">
            Анапа Ремонт и Дизайн 2025
          </div>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="sm"
              className="bg-green-500 hover:bg-green-600 text-white border-green-500"
              onClick={() => window.open('https://wa.me/79999999999', '_blank')}
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              WhatsApp
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
              onClick={() => window.open('https://t.me/yourusername', '_blank')}
            >
              <Icon name="Send" size={16} className="mr-2" />
              Telegram
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              className="bg-pink-500 hover:bg-pink-600 text-white border-pink-500"
              onClick={() => window.open('https://instagram.com/yourusername', '_blank')}
            >
              <Icon name="Instagram" size={16} className="mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-beige to-white">
        <div className="container mx-auto text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl text-construction-black mb-6 animate-fade-in">
            Ремонт и дизайн квартир
            <br />
            <span className="text-4xl md:text-5xl">в Анапе</span>
          </h1>
          <p className="text-xl text-construction-gray mb-8 max-w-2xl mx-auto animate-fade-in">
            Профессиональные услуги по ремонту и дизайну интерьеров. Создаем пространства вашей мечты с гарантией качества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  className="bg-construction-black text-white hover:bg-gray-800 px-8 py-4 text-lg"
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

      {/* Advantages Section */}
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

      {/* Statistics Section */}
      <section id="stats-section" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-montserrat font-bold text-4xl text-center text-construction-black mb-12">
            Наши достижения
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-beige border-none shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="bg-construction-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} size={24} className="text-white" />
                  </div>
                  <div className="font-montserrat font-bold text-4xl text-construction-black mb-2">
                    {index === 0 ? projectsCount : index === 1 ? yearsCount : index === 2 ? clientsCount : stat.number}
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <p className="text-construction-gray font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-beige">
        <div className="container mx-auto">
          <h2 className="font-montserrat font-bold text-4xl text-center text-construction-black mb-12">
            Отзывы наших клиентов
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-construction-gray mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-montserrat font-semibold text-construction-black">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-construction-gray">
                      {testimonial.project}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="font-montserrat font-bold text-4xl text-center text-construction-black mb-12">
            Наши работы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item) => (
              <Card 
                key={item.id} 
                className="bg-white border-none shadow-lg hover:shadow-xl transition-all cursor-pointer animate-scale-in"
                onClick={() => setSelectedImage(item.image)}
              >
                <CardContent className="p-0">
                  <div className="aspect-square bg-gray-200 rounded-t-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-montserrat font-semibold text-lg text-construction-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-construction-gray text-sm">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-16 px-4 bg-beige">
        <div className="container mx-auto">
          <h2 className="font-montserrat font-bold text-4xl text-center text-construction-black mb-12">
            Калькулятор стоимости ремонта
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-construction-black font-semibold mb-3 block">
                        Тип ремонта
                      </Label>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          { value: 'cosmetic', label: 'Косметический', desc: 'Покраска, обои, плитка' },
                          { value: 'capital', label: 'Капитальный', desc: 'Перепланировка, сантехника' },
                          { value: 'luxury', label: 'Премиум', desc: 'Дизайнерский ремонт' }
                        ].map((type) => (
                          <Button
                            key={type.value}
                            variant={repairType === type.value ? "default" : "outline"}
                            className={`p-4 h-auto text-left justify-start ${
                              repairType === type.value 
                                ? 'bg-construction-black text-white' 
                                : 'border-gray-300 hover:border-construction-black'
                            }`}
                            onClick={() => setRepairType(type.value)}
                          >
                            <div>
                              <div className="font-semibold">{type.label}</div>
                              <div className="text-sm opacity-75">{type.desc}</div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-construction-black font-semibold mb-3 block">
                        Количество комнат: {rooms}
                      </Label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                          <Button
                            key={num}
                            variant={rooms === num ? "default" : "outline"}
                            className={rooms === num ? 'bg-construction-black' : ''}
                            onClick={() => setRooms(num)}
                          >
                            {num}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-construction-black font-semibold mb-3 block">
                        Площадь: {area} м²
                      </Label>
                      <input
                        type="range"
                        min="20"
                        max="200"
                        value={area}
                        onChange={(e) => setArea(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-construction-gray mt-1">
                        <span>20 м²</span>
                        <span>200 м²</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-beige rounded-lg p-6 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-sm text-construction-gray mb-2">
                        Примерная стоимость ремонта:
                      </div>
                      <div className="font-montserrat font-bold text-4xl text-construction-black mb-4">
                        {calculatedPrice.toLocaleString()} ₽
                      </div>
                      <div className="text-sm text-construction-gray mb-6">
                        * Точную стоимость рассчитаем после осмотра объекта
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button className="w-full bg-construction-black text-white hover:bg-gray-800">
                            <Icon name="Phone" size={20} className="mr-2" />
                            Получить точный расчет
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-white max-w-md">
                          <DialogHeader>
                            <DialogTitle className="font-montserrat text-2xl text-construction-black">
                              Получить точный расчет
                            </DialogTitle>
                            <DialogDescription className="text-construction-gray">
                              Оставьте заявку и мы сделаем персональный расчет для вашего объекта
                            </DialogDescription>
                          </DialogHeader>
                          <form className="space-y-4 pt-4">
                            <div>
                              <Label htmlFor="calc-name" className="text-construction-black">Ваше имя</Label>
                              <Input id="calc-name" placeholder="Введите ваше имя" />
                            </div>
                            <div>
                              <Label htmlFor="calc-phone" className="text-construction-black">Телефон</Label>
                              <Input id="calc-phone" placeholder="+7 (999) 999-99-99" />
                            </div>
                            <div>
                              <Label htmlFor="calc-address" className="text-construction-black">Адрес объекта</Label>
                              <Input id="calc-address" placeholder="Укажите адрес для осмотра" />
                            </div>
                            <Button type="submit" className="w-full bg-construction-black text-white hover:bg-gray-800">
                              Отправить заявку
                            </Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <DialogContent className="bg-white max-w-md">
        <DialogHeader>
          <DialogTitle className="font-montserrat text-2xl text-construction-black">
            Бесплатная консультация
          </DialogTitle>
          <DialogDescription className="text-construction-gray">
            Оставьте заявку и мы свяжемся с вами в течение 15 минут
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4 pt-4">
          <div>
            <Label htmlFor="name" className="text-construction-black">Ваше имя</Label>
            <Input 
              id="name" 
              placeholder="Введите ваше имя"
              className="border-gray-300 focus:border-construction-black"
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-construction-black">Телефон</Label>
            <Input 
              id="phone" 
              placeholder="+7 (999) 999-99-99"
              className="border-gray-300 focus:border-construction-black"
            />
          </div>
          <div>
            <Label htmlFor="message" className="text-construction-black">Сообщение</Label>
            <Textarea 
              id="message" 
              placeholder="Расскажите о ваших планах..."
              className="border-gray-300 focus:border-construction-black"
              rows={3}
            />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-construction-black text-white hover:bg-gray-800"
            onClick={() => setIsModalOpen(false)}
          >
            Отправить заявку
          </Button>
        </form>
      </DialogContent>

      {/* Portfolio Image Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-white">
            <img 
              src={selectedImage} 
              alt="Портфолио" 
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      )}

      {/* Footer */}
      <footer className="bg-construction-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-montserrat font-bold text-xl mb-4">
                Анапа Ремонт и Дизайн 2025
              </h3>
              <p className="text-gray-300 mb-4">
                Профессиональные услуги по ремонту и дизайну интерьеров в Анапе и окрестностях.
              </p>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white border-green-500"
                  onClick={() => window.open('https://wa.me/79999999999', '_blank')}
                >
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
                  onClick={() => window.open('https://t.me/yourusername', '_blank')}
                >
                  <Icon name="Send" size={16} />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="bg-pink-500 hover:bg-pink-600 text-white border-pink-500"
                  onClick={() => window.open('https://instagram.com/yourusername', '_blank')}
                >
                  <Icon name="Instagram" size={16} />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Дизайн интерьера</li>
                <li>Капитальный ремонт</li>
                <li>Косметический ремонт</li>
                <li>Ремонт квартир под ключ</li>
                <li>Ремонт ванных комнат</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 999-99-99</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@anaparemontdesign.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Анапа, ул. Примерная, 123</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Анапа Ремонт и Дизайн. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;