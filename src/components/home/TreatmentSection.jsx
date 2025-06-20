import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import TreatmentComparisonCard from './TreatmentComparisonCard';
import './TreatmentSection.css';

const TreatmentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const treatments = [
    {
      id: 1,
      title: "Diş Beyazlatma",
      description: "Profesyonel diş beyazlatma işlemi ile dişlerinizin doğal renginden 5-6 ton daha beyaz bir görünüm elde edebilirsiniz. Kliniğimizde uygulanan beyazlatma işlemi, diş minesine zarar vermeden güvenli bir şekilde gerçekleştirilir.",
      beforeImg: "https://picsum.photos/id/1025/600/400",
      afterImg: "https://picsum.photos/id/1062/600/400",
      ctaLink: "/tedaviler/dis-beyazlatma"
    },
    {
      id: 2,
      title: "Gülüş Tasarımı",
      description: "Gülüş tasarımı, dişlerinizin şekli, boyutu, rengi ve dizilimini yüz hatlarınızla uyumlu hale getirerek mükemmel bir gülümseme elde etmenizi sağlar. Kişiye özel planlanan bu tedavi süreci sonunda doğal ve estetik bir gülüşe kavuşursunuz.",
      beforeImg: "https://picsum.photos/id/1027/600/400",
      afterImg: "https://picsum.photos/id/1066/600/400",
      ctaLink: "/tedaviler/gulus-tasarimi"
    },
    {
      id: 3,
      title: "Estetik Dolgu",
      description: "Estetik dolgular, çürük veya kırık dişlerin onarımında kullanılan, diş renginde olan ve doğal görünüm sağlayan modern malzemelerdir. Tek seansta uygulanabilen bu işlem, dişinizin doğal yapısını korurken estetik bir görünüm sağlar.",
      beforeImg: "https://picsum.photos/id/1030/600/400",
      afterImg: "https://picsum.photos/id/1069/600/400",
      ctaLink: "/tedaviler/estetik-dolgu"
    }
  ];

  return (
    <section id="tedaviler" className="treatment-section">
      <div className="treatment-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="treatment-header"
        >
          <h2 className="treatment-title">
            Uzman Kadromuz
          </h2>
          <div className="treatment-divider"></div>
        </motion.div>
        
        <div className="treatment-cards">
          {treatments.map((treatment, index) => (
            <TreatmentComparisonCard
              key={treatment.id}
              title={treatment.title}
              description={treatment.description}
              beforeImg={treatment.beforeImg}
              afterImg={treatment.afterImg}
              ctaLink={treatment.ctaLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
