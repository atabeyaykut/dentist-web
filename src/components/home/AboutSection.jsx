import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section id="hakkimizda" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Hakkımızda
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-10"></div>
          
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed text-lg">
            Dt. Ataben Efe Çelik olarak, modern diş hekimliği yaklaşımı ile hastalarımıza en kaliteli hizmeti sunmayı amaçlıyoruz. Uzman kadromuz ve son teknoloji ekipmanlarımızla, her yaştan hastamızın ihtiyaçlarına özel çözümler üretiyoruz. Kliniğimizde, estetik diş hekimliğinden, implant uygulamalarına, çocuk diş hekimliğinden, ortodontik tedavilere kadar geniş bir yelpazede hizmet veriyoruz.
          </p>
          
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Misyonumuz, koruyucu diş hekimliği anlayışıyla hastalarımızın ağız ve diş sağlığını korumak, 
            estetik beklentilerini karşılamak ve onlara özgüvenle gülümseyebilecekleri bir deneyim sunmaktır. 
            Sürekli eğitim ve gelişim ilkesiyle, alanında uzman hekimlerimiz en güncel tedavi yöntemlerini uygulamaktadır.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-gray-50 rounded-xl p-8 shadow-md"
          >
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Vizyonumuz</h3>
            <p className="text-gray-600">
              Diş hekimliğinde mükemmelliği hedefleyen, yenilikçi yaklaşımlarla sektöre öncülük eden, 
              hasta memnuniyetini her şeyin üstünde tutan bir klinik olmak ve uluslararası standartlarda 
              hizmet kalitesini sürdürülebilir kılmak.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-gray-50 rounded-xl p-8 shadow-md"
          >
            <h3 className="text-xl font-semibold text-cyan-700 mb-4">Değerlerimiz</h3>
            <ul className="text-gray-600 space-y-2">
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
