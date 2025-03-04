import { API } from '../../Api/Api';

export async function login({ dispatch, body, navigate }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ method: 'POST', isJson: true, body, endpoint: 'users/login' });
    dispatch({ type: 'LOGIN', payload: data.user });
    localStorage.setItem('user', JSON.stringify(data.user));
    navigate('/');
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function logout({ dispatch }) {
  dispatch({ type: 'LOADING' });
  localStorage.removeItem('user');
  const response = await API({ method: 'POST', endpoint: 'users/logout' });
  dispatch({ type: 'LOGOUT' });
  dispatch({ type: 'SHOW_MESSAGE', payload: response.message });
}

export async function registerUser({ dispatch, data, navigate }) {
  try {
    dispatch({ type: 'LOADING' });

    if (data.rol === 'Usuario') {
      data.rol = 'user';
    } else if (data.rol === 'Propietario') {
      data.rol = 'owner';
    }
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    if (data.image) {
      formData.append('image', data.image);
    }
    formData.append('rol', data.rol);

    const response = await API({ method: 'POST', body: formData, endpoint: 'users/register' });
    if (response) {
      const { email } = response.userSaved;
      const body = {
        email,
        password: data.password
      };
      await login({ dispatch, body, navigate });
    }
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function getUser({ dispatch, id }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ endpoint: `users/${id}`, isJson: true });

    dispatch({ type: 'GET_USER', payload: data.user });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function updateUser({ dispatch, id, data }) {
  try {
    dispatch({ type: 'LOADING' });

    const formData = new FormData();
    if (data.name) {
      formData.append('name', data.name);
    }
    if (data.email) {
      formData.append('email', data.email);
    }
    if (data.image) {
      formData.append('image', data.image);
    }

    const response = await API({ method: 'PUT', body: formData, endpoint: `users/updateUser/${id}` });
    dispatch({ type: 'UPDATE_USER', payload: response.user });
    localStorage.setItem('user', JSON.stringify(response.user));
    dispatch({ type: 'SHOW_MESSAGE', payload: response.message });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function deleteUser({ dispatch, id }) {
  try {
    dispatch({ type: 'LOADING' });
    const response = await API({ method: 'DELETE', endpoint: `users/deleteUser/${id}` });
    dispatch({ type: 'DELETE_USER' });
    dispatch({ type: 'SHOW_MESSAGE', payload: response.message });
    dispatch({ type: 'LOGOUT' });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}
