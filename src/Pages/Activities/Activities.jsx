import { useContext, useEffect } from 'react';
import ListingCards from '../../Components/ListingCards/ListingCards';
import './Activities.css';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import { getActivities } from '../../Reducers/Activities/activities.action';

const Activities = () => {
  const { state, dispatch } = useContext(ActivitiesContext);
  console.log(state.activities);
  

  useEffect(() => {
    async function activities() {
      getActivities({ dispatch });
    }
    activities();
  }, []);

  return (
    <main>
      <ListingCards cards={state.activities} title="Actividades Ecológicas" />
    </main>
  );
};

export default Activities;
