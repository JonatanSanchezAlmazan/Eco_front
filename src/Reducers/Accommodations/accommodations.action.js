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

export async function createAccommodation({ dispatch, data }) {
  try {
    dispatch({ type: 'LOADING' });
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('type', data.type);
    formData.append('ubi', data.ubi);
    formData.append('price', data.price);
    formData.append('capacity', data.capacity);
    data.services.map((service) => {
      formData.append('services', service);
    });
    if (data?.images && data.images.length > 0) {
      data.images.forEach((file) => {
        formData.append('images', file);
      });
    } else {
      throw new Error('No se han seleccionado imágenes');
    }
    data.rules.split(',').map((item) => {
      formData.append('rules', item);
    });

    formData.append('paymentType', data.paymentType);
    formData.append('contactDetails[email]', data.email);
    formData.append('contactDetails[phone]', data.phone);

    const response = await API({ method: 'POST', body: formData, endpoint: 'accommodations/createAccommodation' });
    dispatch({ type: 'CREATE_ACCOMMODATION', payload: response.accommodation });
    dispatch({ type: 'SHOW_MESSAGE', payload: response.message });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}
