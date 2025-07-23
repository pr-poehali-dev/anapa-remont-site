import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface PortfolioSectionProps {
  selectedImage: string | null;
  onImageSelect: (image: string) => void;
  onImageClose: () => void;
}

const PortfolioSection = ({ selectedImage, onImageSelect, onImageClose }: PortfolioSectionProps) => {
  const portfolioItems = [
    {
      id: 1,
      title: "Современная гостиная",
      image: "https://cdn.poehali.dev/files/52bca8cd-d59e-4914-84d4-86f624598356.jpeg",
      description: "Дизайн гостиной в бежевых тонах с видом на море"
    },
    {
      id: 2,
      title: "Квартира в новостройке",
      image: "/img/42a08515-b685-41b6-8732-6523dc3e32a9.jpg",
      description: "Дизайн и ремонт 2-комнатной квартиры 65 м²"
    },
    {
      id: 3,
      title: "Спальня у моря",
      image: "/img/a3bf1e56-5f4a-4b70-b2d2-079ab03b8dbc.jpg", 
      description: "Современный дизайн спальни 25 м²"
    },
    {
      id: 4,
      title: "Кухня-гостиная",
      image: "/img/6872247b-589c-4fe3-a1be-3d5feec90790.jpg",
      description: "Современная кухня 30 м²"
    },
    {
      id: 5,
      title: "Ванная комната",
      image: "/img/16ede625-8e84-4f26-bf13-0c45fa327eeb.jpg",
      description: "Дизайн ванной комнаты 8 м²"
    }
  ];

  return (
    <>
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
                onClick={() => onImageSelect(item.image)}
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

      {/* Portfolio Image Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={onImageClose}>
          <DialogContent className="max-w-4xl bg-white">
            <img 
              src={selectedImage} 
              alt="Портфолио" 
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default PortfolioSection;