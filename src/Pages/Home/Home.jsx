import { useEffect } from 'react';
import Hero from '../../Components/Hero/Hero';
import useActivitiesState from '../../Hooks/useActivitiesState';
import './Home.css';
import RandomBookings from '../../Components/RandomBookings/RandomBookings';
import { getRandomActivities } from '../../Reducers/Activities/activities.action';

const Home = () => {
  const { state: activitiesState, dispatch } = useActivitiesState();
  useEffect(() => {
    async function randomActivities() {
      await getRandomActivities({ dispatch });
    }

    randomActivities();
  }, []);

  return (
    <main>
      <Hero />
      <RandomBookings type="activities" items={activitiesState.activities} title="Actividades Ecólogicas" btnText="Ver Actividad" />
    </main>
  );
};

export default Home;
