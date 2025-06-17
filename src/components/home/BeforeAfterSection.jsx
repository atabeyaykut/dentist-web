import React from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '../ui/BeforeAfterSlider';
import './BeforeAfterSection.css';

const BeforeAfterSection = () => {
  const treatmentExamples = [
    {
      id: 1,
      title: 'Diş Beyazlatma',
      description: 'Profesyonel diş beyazlatma tedavisi ile daha parlak ve beyaz bir gülümseme.',
      beforeImage: 'https://picsum.photos/id/64/800/600',
      afterImage: 'https://picsum.photos/id/65/800/600',
    },
    {
      id: 2,
      title: 'Diş İmplantı',
      description: 'Eksik dişlerin yerine doğal görünümlü ve fonksiyonel implant tedavisi.',
      beforeImage: 'https://picsum.photos/id/177/800/600',
      afterImage: 'https://picsum.photos/id/180/800/600',
    },
    {
      id: 3,
      title: 'Ortodonti',
      description: 'Modern ortodontik tedaviler ile düzgün ve estetik bir diş dizilimi.',
      beforeImage: 'https://picsum.photos/id/237/800/600',
      afterImage: 'https://picsum.photos/id/240/800/600',
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
        <motion.div 
          className="before-after-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="before-after-title">Tedavi Sonuçlarımız</h2>
          <p className="before-after-subtitle">
            Kliniğimizde gerçekleştirilen tedavilerin öncesi ve sonrası görüntüleri
          </p>
        </motion.div>

        <motion.div 
          className="before-after-examples"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {treatmentExamples.map((treatment) => (
            <motion.div 
              key={treatment.id} 
              className="before-after-example"
              variants={itemVariants}
            >
              <div className="example-content">
                <h3 className="example-title">{treatment.title}</h3>
                <p className="example-description">{treatment.description}</p>
              </div>
              <BeforeAfterSlider
                beforeImage={treatment.beforeImage}
                afterImage={treatment.afterImage}
                beforeAlt={`${treatment.title} öncesi`}
                afterAlt={`${treatment.title} sonrası`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
