import { useNavigate, useLocation } from 'react-router-dom';

export function useCardDetail({ getActivity, getAccommodation, activitiesDispatch, accommodationsDispatch }) {
  const navigate = useNavigate();
  const location = useLocation();

  const path = location.pathname === '/activities' ? 'activities' : 'accommodations';

  const getCardDetail = async (id) => {
    if (path === 'activities') {
      await getActivity({ dispatch: activitiesDispatch, id });
      navigate(`/activity/${id}`);
    } else {
      await getAccommodation({ dispatch: accommodationsDispatch, id });
      navigate(`/accommodation/${id}`);
    }
  };

  return { getCardDetail };
}
