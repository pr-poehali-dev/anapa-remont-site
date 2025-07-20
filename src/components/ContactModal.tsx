import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal = ({ onClose }: ContactModalProps) => {
  return (
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
          onClick={onClose}
        >
          Отправить заявку
        </Button>
      </form>
    </DialogContent>
  );
};

export default ContactModal;