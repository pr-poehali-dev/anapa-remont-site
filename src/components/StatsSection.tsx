import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const StatsSection = () => {
  const [projectsCount, setProjectsCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);
  const [clientsCount, setClientsCount] = useState(0);

  const stats = [
    { number: 250, label: "Выполненных проектов", suffix: "+", icon: "Building" },
    { number: 15, label: "Лет опыта", suffix: "", icon: "Calendar" },
    { number: 180, label: "Довольных клиентов", suffix: "+", icon: "Users" },
    { number: 24, label: "Часа в сутки на связи", suffix: "/7", icon: "Clock" }
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

  return (
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
  );
};

export default StatsSection;