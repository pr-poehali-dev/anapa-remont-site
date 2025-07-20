import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;