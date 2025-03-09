import { API } from '../../Api/Api';

export async function getActivities({ dispatch }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ endpoint: 'activities?ubi=&capacity=' });
    dispatch({ type: 'GET_ACTIVITIES', payload: data.activities });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function getActivity({ dispatch, id }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ endpoint: `activities/${id}` });
    dispatch({ type: 'GET_ACTIVITY', payload: data.activity });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
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

export async function createActiviy({ dispatch, data }) {
  try {
    dispatch({ type: 'LOADING' });

    let parsedStarTime = '';
    if (data.startTime.split(':')[0] >= 0 && data.startTime.split(':')[0] <= 11) {
      parsedStarTime = `${data.startTime} AM`;
    } else {
      parsedStarTime = `${data.startTime} PM`;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('duration', `${data.duration} Horas`);
    formData.append('capacity', Number(data.capacity));
    formData.append('price', Number(data.price));
    data.includes.split(',').forEach((item) => {
      formData.append('includes', item.trim());
    });
    data.requirements.split(',').forEach((item) => {
      formData.append('requirements', item.trim());
    });
    formData.append('type', data.type);
    formData.append('ubi', data.ubi);
    formData.append('difficulty', data.difficulty);
    formData.append('startTime', parsedStarTime);
    formData.append('schedule', data.schedule);
    formData.append('contactDetails[email]', data.email);
    formData.append('contactDetails[phone]', data.phone);

    if (data?.images && data.images.length > 0) {
      data.images.forEach((file) => {
        formData.append('images', file);
      });
    } else {
      throw new Error('No se han seleccionado imágenes');
    }
    const response = await API({ endpoint: 'activities/createActivity', method: 'POST', body: formData });

    dispatch({ type: 'CREATE_ACTIVITY', payload: response.activity });
    dispatch({ type: 'SHOW_MESSAGE', payload: response.message });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function updateActivity({ dispatch, id, data }) {
  try {
    dispatch({ type: 'LOADING' });
    const formData = new FormData();
    if (data.name) formData.append('name', data.name);
    if (data.description) formData.append('description', data.description);
    if (data.type) formData.append('type', data.type);
    if (data.startTime) formData.append('startTime', data.startTime);
    if (data.schedule) formData.append('schedule', data.schedule);
    if (data.duration) formData.append('duration', data.duration);
    if (data.price) formData.append('price', data.price);
    if (data.ubi) formData.append('ubi', data.ubi);
    if (data.capacity) formData.append('capacity', data.capacity);
    if (data.difficulty) formData.append('difficulty', data.difficulty);

    if (data.images?.length) {
      data.images.forEach((file) => formData.append('images', file));
    } else {
      console.warn('No se han seleccionado imágenes');
    }

    data.requirements?.split(',').forEach((item) => formData.append('requirements', item.trim()));

    data.includes?.split(',').forEach((item) => formData.append('includes', item.trim()));

    const response = await API({ method: 'PUT', endpoint: `activities/updateActivity/${id}`, body: formData });
    console.log(response);

    dispatch({ type: 'UPDATE_ACTIVITY', payload: response.activity });
    dispatch({ type: 'SHOW_MESSAGE', payload: response.message });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function deleteActivity({ dispatch, id }) {
  try {
    dispatch({ type: 'LOADING' });
    const response = await API({ method: 'DELETE', endpoint: `activities/deleteActivity/${id}` });
    dispatch({ type: 'DELETE_ACTIVITY', payload: response.activity });
    dispatch({ type: 'SHOW_MESSAGE', payload: response.message });
    console.log(response);
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}
