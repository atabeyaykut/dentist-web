import { useEffect } from 'react';
import Header from '../layout/Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import Features from './Features';
import Doctors from './Doctors';
import TreatmentSection from './TreatmentSection';
import Services from './Services';
import BeforeAfterSection from './BeforeAfterSection';
import Testimonials from './Testimonials';
import BlogSection from './BlogSection';
import ContactForm from './ContactForm';
import Footer from '../layout/Footer';
import './LandingPage.css';

const LandingPage = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-page">
      <Header />
      <main className="landing-page-main">
        <HeroSection />
        <AboutSection />
        <Features />
        <Services />
        <Doctors />
        <TreatmentSection />
        <BeforeAfterSection />
        <Testimonials />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
