import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const BeforeAfterItem = ({ before, after, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-xl shadow-md"
    >
      <div className="flex-1">
        <div className="relative">
          <img 
            src={before} 
            alt="Tedavi Öncesi" 
            className="w-full h-64 object-cover rounded-lg"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 bg-gray-800 bg-opacity-70 text-white text-xs font-bold px-3 py-1 m-2 rounded">
            Öncesi
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="relative">
          <img 
            src={after} 
            alt="Tedavi Sonrası" 
            className="w-full h-64 object-cover rounded-lg"
            loading="lazy"
          />
          <div className="absolute top-0 left-0 bg-cyan-600 bg-opacity-70 text-white text-xs font-bold px-3 py-1 m-2 rounded">
            Sonrası
          </div>
        </div>
      </div>
      
      <div className="mt-4 md:mt-0 md:w-40 flex flex-col justify-center items-center">
        <div className="w-full h-0.5 md:w-0.5 md:h-full bg-gray-200 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white">
            <ChevronRight className="hidden md:block" size={20} />
            <ChevronDown className="md:hidden" size={20} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BeforeAfterGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const galleryItems = [
    {
      before: "https://picsum.photos/id/119/600/400",
      after: "https://picsum.photos/id/129/600/400",
      description: "Ortodonti Tedavisi Sonrası"
    },
    {
      before: "https://picsum.photos/id/152/600/400",
      after: "https://picsum.photos/id/177/600/400",
      description: "Diş Beyazlatma Sonrası"
    },
    {
      before: "https://picsum.photos/id/180/600/400",
      after: "https://picsum.photos/id/184/600/400",
      description: "İmplant Uygulaması Sonrası"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Öncesi ve Sonrası
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hastalarımızın tedavi öncesi ve sonrası görüntüleri ile başarılı sonuçlarımızı görebilirsiniz.
          </p>
        </motion.div>

        <div className="space-y-10">
          {galleryItems.map((item, index) => (
            <div key={index} className="mb-12">
              <BeforeAfterItem
                before={item.before}
                after={item.after}
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-gray-800">{item.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
