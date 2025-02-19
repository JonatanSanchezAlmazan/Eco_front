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
        {cards.map((card) => (
          <Card key={card._id} src={card.images[0]} title={card.name} btnText={textBtn} id={card._id} description={card.description} ubi={card.ubi} />
        ))}
      </div>
    </section>
  );
};

export default ListingCards;
