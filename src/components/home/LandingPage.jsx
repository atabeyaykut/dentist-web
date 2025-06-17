import { useEffect } from 'react';
import Header from '../layout/Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Features from './Features';
import Doctors from './Doctors';
import Services from './Services';
import BeforeAfterGallery from './BeforeAfterGallery';
import Testimonials from './Testimonials';
import BlogSection from './BlogSection';
import ContactForm from './ContactForm';
import Footer from '../layout/Footer';

const LandingPage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <Features />
        <Services />
        <Doctors />
        <BeforeAfterGallery />
        <Testimonials />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
