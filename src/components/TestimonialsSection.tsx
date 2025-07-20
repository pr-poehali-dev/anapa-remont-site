import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TestimonialsSection = () => {
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

  return (
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
  );
};

export default TestimonialsSection;