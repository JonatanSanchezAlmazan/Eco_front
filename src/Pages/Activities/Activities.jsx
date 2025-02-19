import { useContext, useEffect } from 'react';
import ListingCards from '../../Components/ListingCards/ListingCards';

import './Activities.css';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import { getActivities } from '../../Redecuers/Activities/activities.action';
import Loading from '../../Components/Loading/Loading';

const Activities = () => {
  const { state, dispatch } = useContext(ActivitiesContext);

  useEffect(() => {
    async function activities(params) {
      getActivities({ dispatch });
    }
    activities();
  }, []);

  return (
    <main>
      {state.isLoading && <Loading />}
      <ListingCards cards={state.activities} title="Actividades Ecológicas" />
    </main>
  );
};

export default Activities;
