import React from 'react';
import { motion } from 'framer-motion';
import TreatmentComparisonCard from '../ui/TreatmentComparisonCard';
import './TreatmentResults.css';

const TreatmentResults = () => {
  const treatmentExamples = [
    {
      id: 1,
      title: 'Diş Beyazlatma',
      description: 'Günlük hayatımızda dişlerimizde birçok lekelenme faktörü ile karşılaşır ve zamanla renkler solarak bir görünüm oluşur.',
      beforeImg: 'https://picsum.photos/id/366/800/600',
      afterImg: 'https://picsum.photos/id/250/800/600',
      ctaLink: '/tedaviler/dis-beyazlatma',
      category: 'SONUÇLARIMIZ | TEDAVİLERİMİZ'
    },
    {
      id: 2,
      title: 'Gülüş Tasarımı',
      description: 'Estetik ve sağlıklı bir gülüş, kişisel imajınızı en önemli parçalarından biridir ve kendimize olan güvenimizi artır.',
      beforeImg: 'https://picsum.photos/id/342/800/600',
      afterImg: 'https://picsum.photos/id/349/800/600',
      ctaLink: '/tedaviler/gulus-tasarimi',
      category: 'SONUÇLARIMIZ | TEDAVİLERİMİZ'
    },
    {
      id: 3,
      title: 'Estetik Dolgu',
      description: 'Güzel bir gülüş, hayatımızın her alanında önemli bir yeri olan güvenimizi artırır ve kendimizi daha iyi hissetmemizi sağlar.',
      beforeImg: 'https://picsum.photos/id/26/800/600',
      afterImg: 'https://picsum.photos/id/96/800/600',
      ctaLink: '/tedaviler/estetik-dolgu',
      category: 'SONUÇLARIMIZ | TEDAVİLERİMİZ'
    }
  ];

  return (
    <section id="tedavi-sonuclari" className="treatment-results-section">
      <div className="treatment-results-container">
        <motion.div 
          className="treatment-results-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="treatment-results-title">Tedavi Sonuçlarımız</h2>
          <p className="treatment-results-subtitle">
            Kliniğimizde gerçekleştirilen tedavilerin öncesi ve sonrası görüntüleri
          </p>
        </motion.div>

        <div className="treatment-cards">
          {treatmentExamples.map((treatment, index) => (
            <TreatmentComparisonCard
              key={treatment.id}
              title={treatment.title}
              description={treatment.description}
              beforeImg={treatment.beforeImg}
              afterImg={treatment.afterImg}
              ctaLink={treatment.ctaLink}
              category={treatment.category}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentResults;
