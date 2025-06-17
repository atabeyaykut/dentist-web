import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Shield, Clock, Award } from 'lucide-react';
import './Features.css';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="feature-card"
    >
      <div className="feature-icon-container">
        <Icon size={28} className="feature-icon" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const featuresData = [
    {
      icon: Shield,
      title: "Güvenli Tedavi",
      description: "En yüksek hijyen standartları ve sterilizasyon protokolleri ile güvenli tedavi ortamı sağlıyoruz."
    },
    {
      icon: Clock,
      title: "Hızlı Randevu",
      description: "Online randevu sistemi ile beklemeden, size uygun zamanda hizmet alabilirsiniz."
    },
    {
      icon: Award,
      title: "Uzman Kadro",
      description: "Alanında uzman, sürekli kendini geliştiren hekim kadromuzla kaliteli hizmet sunuyoruz."
    }
  ];

  return (
    <section className="features-section">
      <div className="features-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="features-header"
        >
          <h2 className="features-title">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="features-divider"></div>
        </motion.div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
