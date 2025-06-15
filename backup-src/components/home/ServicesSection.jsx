import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import icons individually to avoid import issues
import { Stethoscope as Tooth } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Baby } from 'lucide-react';
import { PlusCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/assets/images/placeholder';

const services = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    description: 'Comprehensive care for your overall oral health including cleanings, fillings, and preventive treatments.',
    icon: Tooth,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our cosmetic procedures including whitening, veneers, and smile makeovers.',
    icon: Sparkles,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern orthodontic solutions including invisible aligners and braces.',
    icon: PlusCircle,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly environment that makes dental visits fun.',
    icon: Baby,
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    description: 'Replace missing teeth with natural-looking dental implants for a complete, functional smile.',
    icon: Heart,
    color: 'bg-red-100 text-red-600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ServicesSection() {
  return (
    <section className="section bg-gray-50" id="services">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Our Dental Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Comprehensive dental care for the entire family with a gentle touch
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${service.color} flex items-center justify-center mb-4`}>
                    <service.icon size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-primary-600" />
                      <span>Professional consultation</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-primary-600" />
                      <span>State-of-the-art equipment</span>
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-primary-600" />
                      <span>Personalized treatment plans</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link to={`/services#${service.id}`}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
