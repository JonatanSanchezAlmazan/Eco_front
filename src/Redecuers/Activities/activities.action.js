import { API } from '../../Api/Api';

export async function getActivities({ dispatch }) {
  dispatch({ type: 'LOADING' });
  const data = await API({ endpoint: 'activities?ubi=&capacity=' });
  if (data) {
    dispatch({ type: 'GET_ACTIVITIES', payload: data.activities });
  }
}

export async function getActivity({ dispatch, id }) {
  dispatch({ type: 'LOADING' });
  const data = await API({ endpoint: `activities/${id}` });

  if (data) {
    dispatch({ type: 'GET_ACTIVITY', payload: data.activity });
  }
}

export async function getActivitiesByAuthor({ dispatch, id }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ endpoint: `activities?idAuthor=${id}&ubi=&capacity= ` });
    dispatch({ type: 'GET_ACTIVITIES_BY_AUTHOR', payload: data.activities });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}
