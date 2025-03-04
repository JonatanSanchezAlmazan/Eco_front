import { useEffect } from 'react';
import ListingCards from '../../Components/ListingCards/ListingCards';
import { getActivities } from '../../Reducers/Activities/activities.action';
import useActivitiesState from '../../Hooks/useActivitiesState';

const Activities = () => {
  const { state, dispatch } = useActivitiesState();
  console.log(state);
  

  useEffect(() => {
    async function activities() {
      getActivities({ dispatch });
    }
    activities();
  }, []);

  return (
    <main>
      <section className="content">
        <ListingCards cards={state.activities} title="Actividades Ecológicas" />
      </section>
    </main>
  );
};

export default Activities;
