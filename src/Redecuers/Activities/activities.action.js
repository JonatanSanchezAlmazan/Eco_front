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

export async function createActiviy({ dispatch, data, navigate }) {
  try {
    const token = localStorage.getItem('token');
    dispatch({ type: 'LOADING' });
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('duration', `${data.duration} Horas`);
    formData.append('capacity', Number(data.capacity));
    formData.append('price', Number(data.price));
    formData.append(
      'includes',
      data?.includes.split(',').map((item) => item.trim())
    );
    formData.append(
      'requirements',
      data?.requirements.split(',').map((item) => item.trim())
    );
    formData.append('type', data.type);
    formData.append('ubi', data.ubi);
    formData.append('difficulty', data.difficulty);
    formData.append('startTime', data.startTime);
    formData.append('schedule', data.schedule);

    if (data?.images && data.images.length > 0) {
      data.images.forEach((file) => {
        formData.append('images', file);
      });
    } else {
      throw new Error('No se han seleccionado imágenes');
    }

    const response = await API({ endpoint: 'activities/createActivity', method: 'POST', token, body: formData });

    console.log(response);
  } catch (error) {
    console.log(error);

    dispatch({ type: 'ERROR', payload: error });
  }
}
