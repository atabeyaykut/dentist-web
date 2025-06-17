import { motion } from 'framer-motion';
import DoctorCard from './DoctorCard';

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
    <section id="doktorlar" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Uzman Kadromuz
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-10"></div>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 text-lg">
            Alanında uzman ve deneyimli doktorlarımızla size en iyi hizmeti sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
