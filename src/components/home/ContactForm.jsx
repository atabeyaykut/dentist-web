import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {

  return (
    <section id="iletisim" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">UniqDent İletişim</h2>
        
        <div className="contact-cards">
          <div className="contact-card">
            <h3 className="contact-card-title">Telefon</h3>
            <a href="tel:+902122240000" className="contact-card-value">+90 212 224 0000</a>
          </div>
          
          <div className="contact-card">
            <h3 className="contact-card-title">E-posta</h3>
            <a href="mailto:info@uniqdent.com" className="contact-card-value">info@uniqdent.com</a>
          </div>
          
          <div className="contact-card">
            <h3 className="contact-card-title">Adres</h3>
            <p className="contact-card-value">
              Harbiye, Abdi İpekçi Cd.<br />
              no:58/8, 34367 Şişli/İstanbul
            </p>
          </div>
        </div>
        
        <div className="contact-whatsapp">
          <h3 className="contact-card-title">WhatsApp</h3>
          <a href="https://wa.me/905368994030" className="contact-card-value">+90 536 899 4030</a>
        </div>
        
        <div className="contact-map-button">
          <button className="konuma-git-btn">
            <MapPin size={16} />
            Konuma Git!
          </button>
        </div>
        
        <div className="contact-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.8953810225766!2d28.98719731541928!3d41.04676497929723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab71e41efe0b7%3A0x5f10f6315ce9e6dc!2sAbdi%20%C4%B0pek%C3%A7i%20Cd.%2C%20%C5%9Ei%C5%9Fli%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1625124512345!5m2!1str!2str" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
