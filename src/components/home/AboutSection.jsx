import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="hakkimizda" className="about-section">
      <div className="about-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="about-header"
        >
          <h2 className="about-title">
            Hakkımızda
          </h2>
          <div className="about-divider"></div>
        </motion.div>
        
        <div className="about-content">
          <div className="about-image-container">
            <motion.img 
              src="/images/about/doctor.jpg" 
              alt="Dr. Ataben Efe Çelik" 
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            />
          </div>
          
          <motion.div 
            className="about-text-container"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="about-subtitle">Dt. Ataben Efe Çelik</h3>
            <p className="about-description">
              Modern diş hekimliği yaklaşımı ile hastalarımıza en kaliteli hizmeti sunmayı amaçlıyoruz. Uzman kadromuz ve son teknoloji ekipmanlarımızla, her yaştan hastamızın ihtiyaçlarına özel çözümler üretiyoruz.
            </p>
            
            <p className="about-description">
              Misyonumuz, koruyucu diş hekimliği anlayışıyla hastalarımızın ağız ve diş sağlığını korumak, estetik beklentilerini karşılamak ve onlara özgüvenle gülümseyebilecekleri bir deneyim sunmaktır.
            </p>
            
            <ul className="about-features-list">
              <li>
                <span className="about-feature-icon">
                  <Check size={18} />
                </span>
                <span>Uzman ve deneyimli kadro</span>
              </li>
              <li>
                <span className="about-feature-icon">
                  <Check size={18} />
                </span>
                <span>Modern teknoloji ve ekipmanlar</span>
              </li>
              <li>
                <span className="about-feature-icon">
                  <Check size={18} />
                </span>
                <span>Kişiye özel tedavi planları</span>
              </li>
              <li>
                <span className="about-feature-icon">
                  <Check size={18} />
                </span>
                <span>Konforlu ve steril ortam</span>
              </li>
            </ul>
            
            <button className="about-button">Daha Fazla Bilgi</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
