import { motion } from 'framer-motion';
import DoctorCard from './DoctorCard';
import './Doctors.css';

const Doctors = () => {
  const doctors = [
    {
      name: "Ataben Efe Çelik",
      title: "Başhekim",
      specialty: "Estetik Diş Hekimi",
      imgSrc: "https://picsum.photos/id/1009/300/400",
      badge: "Başhekim"
    },
    {
      name: "Zeynep Yılmaz",
      title: "Ortodontist",
      specialty: "Ortodonti Uzmanı",
      imgSrc: "https://picsum.photos/id/1011/300/400",
      badge: "Uzman Ortodonti"
    },
    {
      name: "Mehmet Kaya",
      title: "Ağız, Diş ve Çene Cerrahisi",
      specialty: "Implant ve Cerrahi Operasyonlar",
      imgSrc: "https://picsum.photos/id/1015/300/400",
      badge: "Cerrahi"
    },
    {
      name: "Ayşe Demir",
      title: "Endodontist",
      specialty: "Kanal Tedavisi",
      imgSrc: "https://picsum.photos/id/1001/300/400",
      badge: "Uzman"
    }
  ];

  return (
    <section id="doktorlar" className="doctors-section">
      <div className="doctors-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="doctors-header"
        >
          <h2 className="doctors-title">
            Uzman Kadromuz
          </h2>
          <div className="doctors-divider"></div>
          <p className="doctors-description">
            Alanında uzman ve deneyimli doktorlarımızla size en iyi hizmeti sunuyoruz.
          </p>
        </motion.div>

        <div className="doctors-grid">
          {doctors.map((doctor, index) => (
            <DoctorCard
              key={index}
              name={doctor.name}
              title={doctor.title}
              specialty={doctor.specialty}
              imgSrc={doctor.imgSrc}
              badge={doctor.badge}
            />
          ))}
        </div>
        
        <div className="doctors-cta">
          <motion.button 
            className="doctors-cta-button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Tüm Doktorlarımız
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
