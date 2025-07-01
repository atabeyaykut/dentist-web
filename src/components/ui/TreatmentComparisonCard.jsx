import './TreatmentComparisonCard.css';

const TreatmentComparisonCard = ({ 
  title, 
  description, 
  beforeImg, 
  afterImg, 
  ctaLink, 
  category = "SONUÇLARIMIZ | TEDAVİLERİMİZ",
  reverse = false 
}) => {
  return (
    <div className={`treatment-card ${reverse ? 'reverse' : ''}`}>
      <div className="treatment-card-content">
        <span className="treatment-card-category">{category}</span>
        <h2 className="treatment-card-title">{title}</h2>
        <p className="treatment-card-description">{description}</p>
        <a href={ctaLink} className="treatment-card-button">TEDAVİYİ İNCELE</a>
      </div>
      <div className="treatment-card-slider">
        <img src={beforeImg} alt={`${title} öncesi`} className="treatment-card-image" />
        <img src={afterImg} alt={`${title} sonrası`} className="treatment-card-image" />
      </div>
    </div>
  );
};

export default TreatmentComparisonCard;
