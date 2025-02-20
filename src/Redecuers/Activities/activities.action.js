import { API } from '../../Api/Api';

export async function getActivities({ dispatch }) {
 try {
  dispatch({ type: 'LOADING' });
  const data = await API({ endpoint: 'activities?ubi=&capacity=' });
  dispatch({ type: 'GET_ACTIVITIES', payload: data.activities });
 } catch (error) {
  dispatch({type:'ERROR', payload:error});
 }
}

export async function getActivity({ dispatch, id }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ endpoint: `activities/${id}` });
    dispatch({ type: 'GET_ACTIVITY', payload: data.activity });
  
  } catch (error) {
    dispatch({type:'ERROR', payload:error});
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
