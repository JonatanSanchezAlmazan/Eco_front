import ActivityAcommodationCard from '../../Components/ActivityAcommodationCard/ActivityAcommodationCard';
import './Owner.css';
import useActivitiesState from '../../Hooks/useActivitiesState';
import useAccommodationState from '../../Hooks/useAccommodationsState';

const Owner = () => {
  const { state: activitiesState } = useActivitiesState();
  const { state: accommodationState } = useAccommodationState();

  return (
    <main>
      <h2 className="owner__heading">Panel de Control</h2>
      <section className="owner__section">
        <ActivityAcommodationCard src="/icons/casa-ecologica.webp" title="Actividades" item={activitiesState.activities} btnText="Crear Actividad" />
        <ActivityAcommodationCard src="/icons/montana.webp" title="Alojamientos" item={accommodationState.accommodations} btnText="Crear Alojamiento" />
      </section>
    </main>
  );
};

export default Owner;
