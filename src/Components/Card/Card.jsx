import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import './Card.css';
import { getActivity } from '../../Reducers/Activities/activities.action';
import { useContext } from 'react';
import { ActivitiesContext } from '../../Providers/Activities/ActivitiesProvider';
import { getAccommodation } from '../../Reducers/Accommodations/accommodations.action';
import { AccommodationsContext } from '../../Providers/Accommodations/AccommodationsProvider';
import { useCardDetail } from '../../Hooks/useCardDetail';

const Card = ({ src, title, btnText, id, description, ubi, type, name }) => {
  const { dispatch: activitiesDispatch } = useContext(ActivitiesContext);
  const { dispatch: accommodationsDispatch } = useContext(AccommodationsContext);
  const { getCardDetail } = useCardDetail({ getActivity, getAccommodation, activitiesDispatch, accommodationsDispatch, type });
  return (
    <div className="card">
      <div>
        <img src={src} alt={title} width={100} height={100} loading="lazy" />
      </div>
      <h4>{title}</h4>
      <p className="pCard">{ubi}</p>
      <p className="pCard">{description}</p>

      <Button fnc={() => getCardDetail({ id, name: name })} text={btnText} />
    </div>
  );
};

export default Card;
