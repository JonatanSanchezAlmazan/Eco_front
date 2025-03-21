import Card from '../Card/Card';
import ListingCards from '../ListingCards/ListingCards';
import './RandomBookings.css';

const RandomBookings = ({ items, title, type, btnTetx }) => {
  return (
    <section className="randomBookings">
      <div>
        <ListingCards type={type} cards={items} title={title} btnText={btnTetx} />
      </div>
    </section>
  );
};

export default RandomBookings;
