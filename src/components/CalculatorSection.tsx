import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const CalculatorSection = () => {
  const [rooms, setRooms] = useState(1);
  const [area, setArea] = useState(50);
  const [repairType, setRepairType] = useState('cosmetic');
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  const calculatePrice = () => {
    const basePrice = {
      cosmetic: 15000,
      capital: 20000,
      luxury: 26000
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
                        { value: 'cosmetic', label: 'Стандарт', desc: 'Покраска, обои, плитка' },
                        { value: 'capital', label: 'Стандарт +', desc: 'Перепланировка, сантехника' },
                        { value: 'luxury', label: 'Дизайнерский', desc: 'Дизайнерский ремонт' }
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
                            <Input id="calc-phone" placeholder="+7 (938) 422-06-96" />
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
  );
};

export default CalculatorSection;