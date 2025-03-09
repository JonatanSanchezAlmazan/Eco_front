import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import './ListingCards.css';

const ListingCards = ({ title, cards }) => {
  const location = useLocation();

  let textBtn = '';
  if (location.pathname === '/accommodations') {
    textBtn = 'Ver alojamiento';
  } else {
    textBtn = 'Ver actividad';
  }
  return (
    <section className="listingCards">
      <h2>{title}</h2>
      <div>
        {cards.length === 0 && <h3>{title === 'Alojamientos Ecoturísticos' ? 'No hay alojamientos todavía' : 'No hay actividades todavía'}</h3>}
        {cards.map((card) => (
          <Card key={card._id} src={card.images[0]} title={card.name} btnText={textBtn} id={card._id} description={card.description} ubi={card.ubi} />
        ))}
      </div>
    </section>
  );
};

export default ListingCards;
