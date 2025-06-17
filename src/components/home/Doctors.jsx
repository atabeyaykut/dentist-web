import { motion } from 'framer-motion';
import DoctorCard from './DoctorCard';
import './Doctors.css';

const Doctors = () => {
  const doctors = [
    {
      name: "Ayşe Yılmaz",
      title: "Ortodonti Uzmanı",
      imgSrc: "https://picsum.photos/id/64/400/500",
      badge: "Ortodonti"
    },
    {
      name: "Mehmet Kaya",
      title: "Ağız, Diş ve Çene Cerrahisi",
      imgSrc: "https://picsum.photos/id/91/400/500",
      badge: "Cerrahi"
    },
    {
      name: "Zeynep Demir",
      title: "Estetik Diş Hekimi",
      imgSrc: "https://picsum.photos/id/65/400/500",
      badge: "Estetik"
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
              imgSrc={doctor.imgSrc}
              badge={doctor.badge}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
