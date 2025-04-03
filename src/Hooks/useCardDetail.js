import { useNavigate } from 'react-router-dom';

export function useCardDetail({ getActivity, getAccommodation, activitiesDispatch, accommodationsDispatch, type }) {
  const navigate = useNavigate();

  const getCardDetail = async ({ id, name }) => {
    if (type === 'activities') {
      await getActivity({ dispatch: activitiesDispatch, id });
      navigate(`/activity/${name}/${id}`);
    } else {
      await getAccommodation({ dispatch: accommodationsDispatch, id });
      navigate(`/accommodation/${name}/${id}`);
    }
  };

  return { getCardDetail };
}
