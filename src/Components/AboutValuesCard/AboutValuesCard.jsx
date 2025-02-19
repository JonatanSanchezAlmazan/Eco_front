import './AboutValuesCard.css';

const AboutValuesCard = ({ src, title, text }) => {
  return (
    <div className="about__values--card">
      <img src={src} alt={`icono ${title}`} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default AboutValuesCard;
