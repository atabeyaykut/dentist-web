import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const TestimonialCard = ({ name, rating, comment, date, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="testimonial-card"
    >
      <div className="testimonial-quote-icon">
        <Quote size={24} />
      </div>
      
      <p className="testimonial-comment">{comment}</p>
      
      <div className="testimonial-rating">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "star-filled" : "star-empty"}
          />
        ))}
      </div>
      
      <div className="testimonial-footer">
        <div className="testimonial-avatar">
          {image ? (
            <img src={image} alt={name} className="testimonial-image" />
          ) : (
            <span className="testimonial-initial">{name.charAt(0)}</span>
          )}
        </div>
        <div className="testimonial-user-info">
          <h4 className="testimonial-user-name">{name}</h4>
          <p className="testimonial-date">{date}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      rating: 5,
      comment: "Çok profesyonel bir ekip. İmplant tedavim ağrısız ve sorunsuz geçti. Tüm ekibe teşekkür ederim.",
      date: "2 hafta önce",
      image: "https://picsum.photos/id/1025/300/300"
    },
    {
      name: "Ayşe Kaya",
      rating: 5,
      comment: "Diş fobim vardı ama Dr. Zeynep sayesinde artık diş hekimine gitmekten korkmuyorum. Çok teşekkürler!",
      date: "1 ay önce",
      image: "https://picsum.photos/id/1027/300/300"
    },
    {
      name: "Mehmet Demir",
      rating: 4,
      comment: "Ortodonti tedavim için tercih ettim ve sonuçtan çok memnunum. Gülümsememe kavuştum.",
      date: "3 hafta önce",
      image: "https://picsum.photos/id/1012/300/300"
    },
    {
      name: "Zehra Şahin",
      rating: 5,
      comment: "Çocuğum için gittiğimiz ilk diş hekimi deneyimi harikaydi. Çok sabırlı ve ilgili davrandılar.",
      date: "1 hafta önce",
      image: "https://picsum.photos/id/1014/300/300"
    },
    {
      name: "Emre Yıldız",
      rating: 5,
      comment: "Diş beyazlatma işlemi sonrası gülüşüm tamamen değişti. Profesyonel ekip ve kaliteli hizmet.",
      date: "2 ay önce",
      image: "https://picsum.photos/id/1006/300/300"
    },
    {
      name: "Selin Öztürk",
      rating: 5,
      comment: "Laminate veneer uygulaması için tercih ettim ve sonuçtan çok memnunum. Doğal ve estetik bir gülüş.",
      date: "3 ay önce",
      image: "https://picsum.photos/id/1000/300/300"
    }
  ];

  const socialLogos = [
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
    },
    {
      name: "Facebook",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/600px-Facebook_Logo_%282019%29.png"
    },
    {
      name: "Instagram",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
    }
  ];

  return (
    <section id="yorumlar" className="testimonials-section">
      <div className="testimonials-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="testimonials-header"
        >
          <h2 className="testimonials-title">
            Hasta Yorumları
          </h2>
          <div className="testimonials-divider"></div>
          <p className="testimonials-description">
            Hastalarımızın bizimle ilgili değerli düşünceleri ve deneyimleri
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              comment={testimonial.comment}
              date={testimonial.date}
              image={testimonial.image}
            />
          ))}
        </div>

        <div className="testimonials-cta">
          <motion.button 
            className="testimonials-cta-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Tüm Yorumlar
          </motion.button>
        </div>

        <div className="social-media-section">
          <p className="social-media-text">Bizi sosyal medyada takip edin ve değerlendirin</p>
          <div className="social-media-logos">
            {socialLogos.map((logo, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="social-media-link"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="social-media-logo"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
