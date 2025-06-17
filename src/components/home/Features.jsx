import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Shield, Clock, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
    >
      <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
        <Icon size={28} className="text-cyan-700" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Neden Bizi Tercih Etmelisiniz?
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
