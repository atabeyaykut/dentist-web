import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/1048/1920/1080" 
          alt="Dental Office" 
          className="w-full h-full object-cover brightness-75"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl text-white">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Gülüşünüzü<br />Gösterin!
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Porselen Lamina ve Zirkonyum tedavileriyle,<br />
              Hollywood Gülüşüne sahip olmak için hemen<br />
              randevu alın!
            </motion.p>
            
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 px-6 py-3"
              >
                ŞİMDİ ARAYIN
              </Button>
              <Button 
                className="bg-teal-500 hover:bg-teal-600 text-white transition-all duration-300 px-6 py-3"
              >
                FİYAT SORGULAYIN
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
