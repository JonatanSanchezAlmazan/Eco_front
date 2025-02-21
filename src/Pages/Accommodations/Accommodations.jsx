import { useContext, useEffect } from 'react';
import './Accommodations.css';
import { AccommodationsContext } from '../../Providers/Accommodations/AccommodationsProvider';
import { getAccommodations } from '../../Reducers/Accommodations/accommodations.action';
import ListingCards from '../../Components/ListingCards/ListingCards';
import Loading from '../../Components/Loading/Loading';

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
      {state.isLoading && <Loading />}
      <ListingCards cards={state.accommodations} title="Alojamientos Ecoturísticos" />
    </main>
  );
};

export default Accommodations;
