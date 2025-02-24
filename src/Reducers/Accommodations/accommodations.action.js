import { API } from '../../Api/Api';

export async function getAccommodations({ dispatch }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ endpoint: 'accommodations?author=&ubi=&capacity=' });
    console.log(data);
    dispatch({ type: 'GET_ACCOMMODATIONS', payload: data.accommodations });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}
export async function getAccommodation({ dispatch, id }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ endpoint: `accommodations/${id}` });
    dispatch({ type: 'GET_ACCOMMODATION', payload: data.accommodation });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
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

export async function createAccommodation({ dispatch, data, token }) {
  try {
    dispatch({ type: 'LOADING' });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}
