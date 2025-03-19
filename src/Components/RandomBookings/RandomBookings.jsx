import Card from '../Card/Card';
import ListingCards from '../ListingCards/ListingCards';
import './RandomBookings.css';

const RandomBookings = ({ items, title, btnText }) => {
  return (
    <section className="randomBookings">
      <div>
        <ListingCards cards={items} title={title} />
      </div>
    </section>
  );
};

export default RandomBookings;
