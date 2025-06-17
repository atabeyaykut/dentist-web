import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooth, Smile, HeartPulse, Stethoscope, Scissors } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start">
        <div className="bg-cyan-100 p-3 rounded-lg mr-4">
          <Icon size={24} className="text-cyan-700" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'aesthetic', name: 'Estetik' },
    { id: 'surgical', name: 'Cerrahi' },
    { id: 'general', name: 'Genel' },
    { id: 'children', name: 'Çocuk' }
  ];
  
  const services = [
    {
      id: 1,
      category: 'aesthetic',
      icon: Smile,
      title: 'Diş Beyazlatma',
      description: 'Profesyonel diş beyazlatma işlemi ile daha parlak ve beyaz dişlere kavuşun.'
    },
    {
      id: 2,
      category: 'aesthetic',
      icon: Tooth,
      title: 'Laminate Veneer',
      description: 'İnce porselen kaplamalar ile dişlerinizin şeklini ve rengini değiştirin.'
    },
    {
      id: 3,
      category: 'surgical',
      icon: Scissors,
      title: 'İmplant Uygulamaları',
      description: 'Eksik dişlerinizi tamamlamak için kalıcı ve doğal görünümlü implant çözümleri.'
    },
    {
      id: 4,
      category: 'general',
      icon: HeartPulse,
      title: 'Kanal Tedavisi',
      description: 'Ağrılı dişlerinizi çekim yapmadan kurtarmanın en etkili yolu.'
    },
    {
      id: 5,
      category: 'general',
      icon: Tooth,
      title: 'Dolgu Tedavisi',
      description: 'Çürük dişlerinizi estetik ve dayanıklı dolgular ile onarıyoruz.'
    },
    {
      id: 6,
      category: 'children',
      icon: Stethoscope,
      title: 'Çocuk Diş Hekimliği',
      description: 'Çocukların diş sağlığını korumak için özel yaklaşım ve tedavi yöntemleri.'
    }
  ];
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Tüm Hizmetler
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Modern diş hekimliği teknikleri ile sunduğumuz kapsamlı tedavi seçeneklerimiz
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-cyan-100 text-cyan-800 hover:bg-cyan-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
