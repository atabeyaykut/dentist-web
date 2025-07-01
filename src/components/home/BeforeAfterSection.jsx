import React from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import './BeforeAfterSection.css';

const BeforeAfterSection = () => {
  const treatmentExamples = [
    {
      id: 1,
      title: 'Diş Beyazlatma',
      description: 'hayatımızda dişlerimizde birçok lekelenme faktörü ile karşılaşır ve zamanla renkler solarak bir görünüm oluşur.',
      beforeImage: 'https://picsum.photos/id/366/800/600',
      afterImage: 'https://picsum.photos/id/250/800/600',
      category: 'KOZMETIÇ DIŞ HEKIMLIĞI',
      buttonText: 'TEDAVI HAKKINDA'
    },
    {
      id: 2,
      title: 'Gülüş Tasarımı',
      description: 'Estetik ve sağlıklı bir gülüş, kişisel imajınızı en önemli parçalarından biridir ve kendimize olan güvenimizi artır.',
      beforeImage: 'https://picsum.photos/id/342/800/600',
      afterImage: 'https://picsum.photos/id/349/800/600',
      category: 'KOZMETIÇ DIŞ HEKIMLIĞI',
      buttonText: 'TEDAVI HAKKINDA'
    },
    {
      id: 3,
      title: 'Estetik Dolgu',
      description: 'Güzel bir gülüş, hayatımızın her alanında önemli bir yeri olan güvenimizi artırır ve kendimizi daha iyi hissetmemizi sağlar.',
      beforeImage: 'https://picsum.photos/id/26/800/600',
      afterImage: 'https://picsum.photos/id/96/800/600',
      category: 'KOZMETIÇ DIŞ HEKIMLIĞI',
      buttonText: 'TEDAVI HAKKINDA'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="before-after-section">
      <div className="before-after-container">

        {treatmentExamples.map((treatment, index) => (
          <div key={treatment.id} className={`treatment-row ${index % 2 === 1 ? 'reverse' : ''}`}>
            <motion.div 
              className="treatment-content"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="treatment-category">{treatment.category}</span>
              <h2 className="treatment-title">{treatment.title}</h2>
              <p className="treatment-description">{treatment.description}</p>
              <button className="treatment-button">{treatment.buttonText}</button>
            </motion.div>
            
            <motion.div 
              className="treatment-slider"
              initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <BeforeAfterSlider
                beforeImage={treatment.beforeImage}
                afterImage={treatment.afterImage}
                beforeAlt={`${treatment.title} öncesi`}
                afterAlt={`${treatment.title} sonrası`}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterSection;
