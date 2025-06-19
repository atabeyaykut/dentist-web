import React from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';
import './TreatmentComparisonCard.css';

const TreatmentComparisonCard = ({ 
  title, 
  description, 
  beforeImg, 
  afterImg, 
  ctaLink, 
  category = "SONUÇLARIMIZ | TEDAVİLERİMİZ",
  reverse = false 
}) => {
  return (
    <motion.div 
      className={`treatment-card ${reverse ? 'reverse' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="treatment-card-content">
        <span className="treatment-card-category">{category}</span>
        <h2 className="treatment-card-title">{title}</h2>
        <p className="treatment-card-description">{description}</p>
        <a href={ctaLink} className="treatment-card-button">TEDAVİYİ İNCELE</a>
      </div>
      
      <div className="treatment-card-slider">
        <BeforeAfterSlider
          beforeImage={beforeImg}
          afterImage={afterImg}
          beforeAlt={`${title} öncesi`}
          afterAlt={`${title} sonrası`}
        />
      </div>
    </motion.div>
  );
};

export default TreatmentComparisonCard;
