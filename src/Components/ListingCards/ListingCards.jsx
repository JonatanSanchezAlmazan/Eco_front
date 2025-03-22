import { useLocation } from 'react-router-dom';
import Card from '../Card/Card';
import './ListingCards.css';

const ListingCards = ({ title, cards, type, btnText }) => {
  return (
    <section className="listingCards">
      <h2>{title}</h2>
      <div>
        {cards.length === 0 && <h3>{title === 'Alojamientos Ecoturísticos' ? 'No se han encontrado alojamientos' : 'No se han encontrado actividades'}</h3>}
        {cards.map((card) => (
          <Card key={card._id} src={card.images[0]} title={card.name} btnText={btnText} id={card._id} description={card.description} ubi={card.ubi} type={type} />
        ))}
      </div>
    </section>
  );
};

export default ListingCards;
