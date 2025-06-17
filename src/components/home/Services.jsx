import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Smile, Heart, Stethoscope, Scissors } from 'lucide-react';
import './Services.css';

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="service-card"
    >
      <div className="service-card-content">
        <div className="service-icon-container">
          <Icon size={24} className="service-icon" />
        </div>
        <div className="service-text-container">
          <h3 className="service-title">{title}</h3>
          <p className="service-description">{description}</p>
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
      icon: Sparkles,
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
      icon: Heart,
      title: 'Kanal Tedavisi',
      description: 'Ağrılı dişlerinizi çekim yapmadan kurtarmanın en etkili yolu.'
    },
    {
      id: 5,
      category: 'general',
      icon: Sparkles,
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
    <section id="hizmetler" className="services-section">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="services-header"
        >
          <h2 className="services-title">
            Tüm Hizmetler
          </h2>
          <div className="services-divider"></div>
          <p className="services-description">
            Kliniğimizde sunduğumuz kapsamlı diş sağlığı hizmetleri ile gülüşünüzü yeniden tasarlıyoruz.
          </p>
          
          <div className="services-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`service-category-button ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="services-grid">
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
