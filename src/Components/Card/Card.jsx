import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Card.css';
import { getActivity } from '../../Reducers/Activities/activities.action';
import { useContext } from 'react';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import { getAccommodation } from '../../Reducers/Accommodations/accommodations.action';
import { AccommodationsContext } from '../../Providers/Accommodations/AccommodationsProvider';

const Card = ({ src, title, btnText, id, description, ubi }) => {
  const { dispatch: activitiesDispatch } = useContext(ActivitiesContext);
  const { dispatch: accommodationsDispatch } = useContext(AccommodationsContext);

  const navigate = useNavigate();
  const location = useLocation();
  let path = '';
  if (location.pathname === '/activities') {
    path = 'activities';
  } else {
    path = 'accommodations';
  }

  async function getCardDetail() {
    if (path === 'activities') {
      await getActivity({ dispatch: activitiesDispatch, id });
      navigate(`/activity/${id}`);
    } else {
      await getAccommodation({ dispatch: accommodationsDispatch, id });
      navigate(`/accommodation/${id}`);
    }
  }
  return (
    <div className="card">
      <div>
        <img src={src} alt={title} />
      </div>
      <h4>{title}</h4>
      <p className="pCard">{ubi}</p>
      <p className="pCard">{description}</p>

      <Button fnc={getCardDetail} text={btnText} />
    </div>
  );
};

export default Card;
