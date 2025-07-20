import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
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
  );
};

export default Header;