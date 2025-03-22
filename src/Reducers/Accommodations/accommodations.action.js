import { API } from '../../Api/Api';

export async function getAccommodations({ dispatch }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ endpoint: 'accommodations?author=&ubi=&capacity=' });
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
    data.services.forEach((service) => {
      formData.append('services', service);
    });
    if (data?.images && data.images.length > 0) {
      data.images.forEach((file) => {
        formData.append('images', file);
      });
    } else {
      throw new Error('No se han seleccionado imágenes');
    }
    data.rules.split(',').forEach((rule) => {
      formData.append('rules', rule);
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

export async function updateAccommodation({ dispatch, id, data }) {
  try {
    dispatch({ type: 'LOADING' });
    const formData = new FormData();
    if (data.name) formData.append('name', data.name);
    if (data.description) formData.append('description', data.description);
    if (data.type) formData.append('type', data.type);
    if (data.ubi) formData.append('ubi', data.ubi);
    if (data.price) formData.append('price', data.price);
    if (data.capacity) formData.append('capacity', data.capacity);
    if (data.services) data.services.forEach((service) => formData.append('services', service));
    if (data.images?.length) {
      data.images.forEach((file) => formData.append('images', file));
    }
    if (data.rules) data.rules.split(',').forEach((rule) => formData.append('rules', rule));
    if (data.paymentType) formData.append('paymentType', data.paymentType);
    if (data.contactDetails?.email) formData.append('contactDetails[email]', data.contactDetails['email']);
    if (data.contactDetails?.phone) formData.append('contactDetails[phone]', data.contactDetails['phone']);

    const response = await API({ method: 'PUT', body: formData, endpoint: `accommodations/updateAccommodation/${id}` });
    console.log(response);

    dispatch({ type: 'UPDATE_ACCOMMODATION', payload: response.accommodation });
    dispatch({ type: 'SHOW_MESSAGE', payload: response.message });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function deleteAccommodation({ dispatch, id }) {
  try {
    dispatch({ type: 'LOADING' });
    const response = await API({ method: 'DELETE', endpoint: `accommodations/deleteAccommodation/${id}` });
    dispatch({ type: 'DELETE_ACCOMMODATION', payload: response.accommodation });
    dispatch({ type: 'SHOW_MESSAGE', payload: response.message });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function getRandomAccommodations({ dispatch }) {
  try {
    dispatch({ type: 'LOADING' });
    const response = await API({ endpoint: `accommodations/random/accommodations` });
    dispatch({ type: 'GET_ACCOMMODATIONS', payload: response });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function filterAccommodations({ dispatch, data, navigate }) {
  try {
    dispatch({ type: 'LOADING' });
    const response = await API({ endpoint: `accommodations?idAuthor=&ubi=${data.ubi}&capacity=${data?.maxPeople} ` });
    dispatch({ type: 'FILTER_ACCOMMODATIONS', payload: response.accommodations });
    navigate('/filterAccommodations');
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}
