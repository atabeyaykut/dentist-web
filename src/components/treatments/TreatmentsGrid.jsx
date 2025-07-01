import React from 'react';
import './TreatmentsGrid.css';

const treatments = [
  {
    title: 'Estetik Diş Hekimliği',
    image: 'https://picsum.photos/id/1011/400/400',
  },
  {
    title: 'Porselen Lamina',
    image: 'https://picsum.photos/id/1012/400/400',
  },
  {
    title: 'Hollywood Smile',
    image: 'https://picsum.photos/id/1013/400/400',
  },
  {
    title: 'Ortodonti',
    image: 'https://picsum.photos/id/1014/400/400',
  },
  {
    title: 'Diş Protezi',
    image: 'https://picsum.photos/id/1015/400/400',
  },
  {
    title: 'Periodontoloji',
    image: 'https://picsum.photos/id/1016/400/400',
  },
  {
    title: 'Diş Sıkma – Diş Gıcırdatma',
    image: 'https://picsum.photos/id/1017/400/400',
  },
  {
    title: '20 Yaş Dişleri ve Gömülü Dişler',
    image: 'https://picsum.photos/id/1018/400/400',
  },
  {
    title: 'Pedodonti',
    image: 'https://picsum.photos/id/1019/400/400',
  },
];

const TreatmentsGrid = () => {
  return (
    <div className="treatments-page">
      <div className="treatments-grid">
        {treatments.map((treatment, idx) => (
          <div className="treatment-card" key={idx}>
            <img src={treatment.image} alt={treatment.title} className="treatment-card-img" />
            <div className="treatment-card-title">{treatment.title}</div>
            <a href="#" className="treatment-card-btn">ÖĞRENİN</a>
          </div>
        ))}
      </div>
      <div className="treatments-bottom-row">
        <div className="treatments-bottom-info">
          <div className="treatments-bottom-title">HIZLI RANDEVU</div>
          <div className="treatments-bottom-desc">
            RANDEVU OLUŞTURMAMIZI İSTER MİSİNİZ ?<br />
            Bilgisini Göze sağlıklı dişler için 6 ayda bir mutlaka diş hekimine görünmeniz gerekmektedir. Sizi de dişlerinizin sağlığını kontrol ettirmek ve olası tedaviler için ücretsiz bilgi almak ister misiniz? Yapmanız gereken tek şey aşağıdaki butonu tıklamak.
          </div>
          <a href="/randevu" className="treatments-bottom-btn">HEMEN RANDEVU AL!</a>
        </div>
        <div className="treatments-bottom-image">
          <img src="https://picsum.photos/id/1020/400/400" alt="Doktor" />
        </div>
      </div>
    </div>
  );
};

export default TreatmentsGrid;
