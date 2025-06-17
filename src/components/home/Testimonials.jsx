import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, rating, comment, date }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
          <span className="text-gray-500 font-medium">{name.charAt(0)}</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-500 text-xs">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      
      <p className="text-gray-600 text-sm">{comment}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmet Yılmaz",
      rating: 5,
      comment: "Çok profesyonel bir ekip. İmplant tedavim ağrısız ve sorunsuz geçti. Tüm ekibe teşekkür ederim.",
      date: "2 hafta önce"
    },
    {
      name: "Ayşe Kaya",
      rating: 5,
      comment: "Diş fobim vardı ama Dr. Zeynep sayesinde artık diş hekimine gitmekten korkmuyorum. Çok teşekkürler!",
      date: "1 ay önce"
    },
    {
      name: "Mehmet Demir",
      rating: 4,
      comment: "Ortodonti tedavim için tercih ettim ve sonuçtan çok memnunum. Gülümsememe kavuştum.",
      date: "3 hafta önce"
    },
    {
      name: "Zehra Şahin",
      rating: 5,
      comment: "Çocuğum için gittiğimiz ilk diş hekimi deneyimi harikaydı. Çok sabırlı ve ilgili davrandılar.",
      date: "1 hafta önce"
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
            Hasta Yorumları
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hastalarımızın deneyimleri ve memnuniyetleri bizim için çok değerli
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              rating={testimonial.rating}
              comment={testimonial.comment}
              date={testimonial.date}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-8">Bizi sosyal medyada takip edin ve değerlendirin</p>
          <div className="flex justify-center items-center space-x-8">
            {socialLogos.map((logo, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-10 md:h-12"
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
