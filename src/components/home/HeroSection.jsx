import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Background Image */}
      <div className="hero-background">
        <img
          src="https://picsum.photos/id/1048/1920/1080"
          alt="Dental Office"
          className="hero-image"
        />
      </div>

      {/* Content */}
      <div className="hero-content-wrapper">
        <div className="hero-container">
          <div className="hero-text-container">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Gülüşünüzü<br />Gösterin!
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Porselen Lamina ve Zirkonyum tedavileriyle,<br />
              Hollywood Gülüşüne sahip olmak için hemen<br />
              randevu alın!
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <button className="hero-button hero-button-outline">
                ŞİMDİ ARAYIN
              </button>
              <button className="hero-button hero-button-filled">
                FİYAT SORGULAYIN
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
