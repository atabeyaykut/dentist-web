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
          
          <p className="about-description about-main-description">
            Dt. Ataben Efe Çelik olarak, modern diş hekimliği yaklaşımı ile hastalarımıza en kaliteli hizmeti sunmayı amaçlıyoruz. Uzman kadromuz ve son teknoloji ekipmanlarımızla, her yaştan hastamızın ihtiyaçlarına özel çözümler üretiyoruz. Kliniğimizde, estetik diş hekimliğinden, implant uygulamalarına, çocuk diş hekimliğinden, ortodontik tedavilere kadar geniş bir yelpazede hizmet veriyoruz.
          </p>
          
          <p className="about-description">
            Misyonumuz, koruyucu diş hekimliği anlayışıyla hastalarımızın ağız ve diş sağlığını korumak, 
            estetik beklentilerini karşılamak ve onlara özgüvenle gülümseyebilecekleri bir deneyim sunmaktır. 
            Sürekli eğitim ve gelişim ilkesiyle, alanında uzman hekimlerimiz en güncel tedavi yöntemlerini uygulamaktadır.
          </p>
        </motion.div>
        
        <div className="about-cards">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="about-card"
          >
            <h3 className="about-card-title">Vizyonumuz</h3>
            <p className="about-card-text">
              Diş hekimliğinde mükemmelliği hedefleyen, yenilikçi yaklaşımlarla sektöre öncülük eden, 
              hasta memnuniyetini her şeyin üstünde tutan bir klinik olmak ve uluslararası standartlarda 
              hizmet kalitesini sürdürülebilir kılmak.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="about-card"
          >
            <h3 className="about-card-title">Değerlerimiz</h3>
            <ul className="about-values-list">
              <li>• Hasta odaklı yaklaşım</li>
              <li>• Etik değerlere bağlılık</li>
              <li>• Sürekli eğitim ve gelişim</li>
              <li>• Teknolojik yenilikçilik</li>
              <li>• Şeffaflık ve güven</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
