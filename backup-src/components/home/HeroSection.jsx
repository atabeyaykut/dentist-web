import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/assets/images/placeholder';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary-950 to-primary-800 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${placeholderImages.heroPattern})`, backgroundRepeat: 'repeat' }}></div>
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <span className="inline-block bg-primary-700 text-primary-100 px-4 py-1 rounded-full text-sm font-medium">
              Modern Dental Care
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Smile, Our <span className="text-primary-300">Passion</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-lg">
              Experience exceptional dental care with our team of experts. We provide comprehensive services to keep your smile healthy and beautiful.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-6">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">10+</span>
                <span className="text-primary-200 text-sm">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">5000+</span>
                <span className="text-primary-200 text-sm">Happy Patients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">15+</span>
                <span className="text-primary-200 text-sm">Dental Experts</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-lg blur opacity-75"></div>
              <img 
                src={placeholderImages.heroDentist} 
                alt="Professional dentist with patient" 
                className="relative rounded-lg shadow-xl w-full object-cover z-10"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/600x800?text=Dentist+With+Patient';
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
