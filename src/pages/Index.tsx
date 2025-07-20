import { useState } from 'react';
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

      {/* Portfolio Section */}
      <section className="py-16 px-4 bg-beige">
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