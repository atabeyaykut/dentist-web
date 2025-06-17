import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    console.log('Form data submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="iletisim" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2 className="contact-title">
            Bize Ulaşın
          </h2>
          <div className="contact-divider"></div>
          <p className="contact-description">
            Sorularınız için bize ulaşın veya randevu talebinde bulunun.
          </p>
        </motion.div>

        <div className="contact-layout">
          <div className="contact-form-container">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="contact-form-card"
            >
              <h3 className="contact-form-title">Bize Ulaşın</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName" className="form-label">
                      Ad
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Adınız"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName" className="form-label">
                      Soyad
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Soyadınız"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input"
                      placeholder="Telefon Numaranız"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="E-posta Adresiniz"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                    placeholder="Mesajınız..."
                  ></textarea>
                </div>
                
                <div className="form-submit-container">
                  <Button 
                    type="submit" 
                    variant="cyan" 
                    size="lg"
                    disabled={isSubmitting}
                    className="form-submit-button"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                    {!isSubmitting && <Send size={16} className="form-submit-icon" />}
                  </Button>
                  
                  {submitSuccess && (
                    <span className="form-submit-success">
                      Mesajınız başarıyla gönderildi!
                    </span>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
          
          <div className="contact-info-container">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="contact-info-card"
            >
              <h3 className="contact-info-title">İletişim Bilgileri</h3>
              
              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-info-icon-container">
                    <Phone size={20} className="contact-info-icon" />
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">Telefon</h4>
                    <p className="contact-info-text">+90 (212) 123 45 67</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon-container">
                    <Mail size={20} className="contact-info-icon" />
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">E-posta</h4>
                    <p className="contact-info-text">info@uniqdent.com</p>
                  </div>
                </div>
                
                <div className="contact-info-item">
                  <div className="contact-info-icon-container">
                    <MapPin size={20} className="contact-info-icon" />
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">Adres</h4>
                    <p className="contact-info-text">
                      Bağdat Caddesi No:123<br />
                      Kadıköy, İstanbul
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="working-hours">
                <h4 className="working-hours-title">Çalışma Saatleri</h4>
                <div className="working-hours-list">
                  <p className="working-hours-item">Pazartesi - Cuma: 09:00 - 19:00</p>
                  <p className="working-hours-item">Cumartesi: 10:00 - 16:00</p>
                  <p className="working-hours-item">Pazar: Kapalı</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
