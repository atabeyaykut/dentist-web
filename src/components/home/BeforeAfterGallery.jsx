import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import './BeforeAfterGallery.css';

const BeforeAfterItem = ({ before, after, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="before-after-item"
    >
      <div className="before-after-column">
        <div className="image-container">
          <img 
            src={before} 
            alt="Tedavi Öncesi" 
            className="before-after-image"
            loading="lazy"
          />
          <div className="before-label">
            Öncesi
          </div>
        </div>
      </div>
      
      <div className="before-after-column">
        <div className="image-container">
          <img 
            src={after} 
            alt="Tedavi Sonrası" 
            className="before-after-image"
            loading="lazy"
          />
          <div className="after-label">
            Sonrası
          </div>
        </div>
      </div>
      
      <div className="arrow-container">
        <div className="arrow-line">
          <div className="arrow-circle">
            <ChevronRight className="arrow-icon-horizontal" size={20} />
            <ChevronDown className="arrow-icon-vertical" size={20} />
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
    <section id="galeri" className="gallery-section">
      <div className="gallery-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="gallery-header"
        >
          <h2 className="gallery-title">
            Öncesi ve Sonrası
          </h2>
          <div className="gallery-divider"></div>
          <p className="gallery-description">
            Hastalarımızın tedavi öncesi ve sonrası gülüşlerindeki değişimi görün.
          </p>
        </motion.div>

        <div className="gallery-items">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item-wrapper">
              <BeforeAfterItem
                before={item.before}
                after={item.after}
              />
              <div className="gallery-item-description">
                <h3 className="gallery-item-title">{item.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
