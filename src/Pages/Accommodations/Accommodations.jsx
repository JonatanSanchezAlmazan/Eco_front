import { useContext, useEffect } from 'react';
import { AccommodationsContext } from '../../Providers/Accommodations/AccommodationsProvider';
import { getAccommodations } from '../../Reducers/Accommodations/accommodations.action';
import ListingCards from '../../Components/ListingCards/ListingCards';

const Accommodations = () => {
  const { state, dispatch } = useContext(AccommodationsContext);

  useEffect(() => {
    async function accommodations() {
      getAccommodations({ dispatch });
    }
    accommodations();
  }, []);

  return (
    <main>
      <section className="content">
        <ListingCards type="acommodations" cards={state.accommodations} title="Alojamientos Ecoturísticos" />
      </section>
    </main>
  );
};

export default Accommodations;
