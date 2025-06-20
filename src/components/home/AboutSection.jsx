import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="hakkimizda" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-container">
            <motion.img 
              src="https://picsum.photos/600/800" 
              alt="Doktorlarımız" 
              className="about-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7 }}
            />
            <div className="about-logo-overlay">
              <img 
                src="https://picsum.photos/100/100?blur" 
                alt="Clinic Logo" 
              />
            </div>
          </div>
          
          <motion.div 
            className="about-text-container"
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-clinic-name">UNICIDENT DIŞ KLİNİĞİ</div>
            <h2 className="about-title">Doktorlarımızdan Tavsiyeler</h2>
            
            <p className="about-description">
              Mevcut ağız ve diş sağlığı probleminiz ne olursa olsun ertelemeden, sadece size özel yaklaşımlarla tanışın. Profesyonel diş hekimi kadromuzun yönlendirmeleri her bir alternatif tedavi yöntemi değerlendirildikten sonra sizin için en doğru ve en iyi olan tedavi yöntemine erişin. Unicident ile hayalinizdeki gülümsemeye kavuşun.
            </p>
            
            <button className="about-button">HIZLI VE KOLAY RANDEVU</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
