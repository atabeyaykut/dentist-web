import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ReactCompareImage from 'react-compare-image';
import { ArrowLeftRight } from 'lucide-react';
import './TreatmentComparisonCard.css';

const TreatmentComparisonCard = ({ title, description, beforeImg, afterImg, ctaLink }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });
  const [sliderHovered, setSliderHovered] = useState(false);

  return (
    <motion.div 
      ref={ref}
      className="treatment-card"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
    >
      <div className="treatment-content">
        <div className="treatment-info">
          <span className="treatment-category">SONUÇLARIMIZ | TEDAVİLERİMİZ</span>
          <h3 className="treatment-title">{title}</h3>
          <p className="treatment-description">{description}</p>
          <a href={ctaLink} className="treatment-cta-button">
            TEDAVİYİ İNCELE
          </a>
        </div>
        
        <div className="treatment-comparison-container">
          <div 
            className="treatment-comparison-wrapper"
            onMouseEnter={() => setSliderHovered(true)}
            onMouseLeave={() => setSliderHovered(false)}
          >
            <div className="treatment-label before-label">ÖNCE</div>
            <div className="treatment-label after-label">SONRA</div>
            
            <ReactCompareImage
              leftImage={beforeImg}
              rightImage={afterImg}
              sliderLineWidth={2}
              sliderLineColor="#14b8a6"
              handle={
                <div className={`slider-handle ${sliderHovered ? 'hovered' : ''}`}>
                  <ArrowLeftRight size={16} />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TreatmentComparisonCard;
