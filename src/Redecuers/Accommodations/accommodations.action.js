import { API } from '../../Api/Api';

export async function getAccommodations({ dispatch }) {
  dispatch({ type: 'LOADING' });
  const data = await API({ endpoint: 'accommodations?author=&ubi=&capacity=' });
  console.log(data);

  if (data) {
    dispatch({ type: 'GET_ACCOMMODATIONS', payload: data.accommodations });
  }
}
export async function getAccommodation({ dispatch, id }) {
  dispatch({ type: 'LOADING' });
  const data = await API({ endpoint: `accommodations/${id}` });

  if (data) {
    dispatch({ type: 'GET_ACCOMMODATION', payload: data.accommodation });
  }
}

export async function getAccommodationsByAuthor({ dispatch, id }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ endpoint: `accommodations?idAuthor=${id}&ubi=&capacity= ` });
    dispatch({ type: 'GET_ACCOMMODATIONS_BY_AUTHOR', payload: data.accommodations });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}
