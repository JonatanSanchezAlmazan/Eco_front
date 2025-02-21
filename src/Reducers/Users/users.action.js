import { API } from '../../Api/Api';

export async function login({ dispatch, body, navigate }) {
  try {
    dispatch({ type: 'LOADING' });
    const data = await API({ method: 'POST', isJson: true, body, endpoint: 'users/login' });
    dispatch({ type: 'LOGIN', payload: { user: data.user, token: data.token } });
    localStorage.setItem('user', JSON.stringify(data.user));
    navigate('/');
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export function logout({ dispatch }) {
  localStorage.removeItem('user');
  dispatch({ type: 'LOGOUT' });
}

export async function register({ dispatch, data, navigate }) {
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
    if (data.file && data.file[0]) {
      formData.append('image', data?.file[0]);
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

    if (data) {
      dispatch({ type: 'GET_USER', payload: data.user });
    }
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function updateUser({ dispatch, id, token, data, navigate }) {
  try {
    dispatch({ type: 'LOADING' });

    const formData = new FormData();
    if (data.name) {
      formData.append('name', data.name);
    }
    if (data.email) {
      formData.append('email', data.email);
    }
    if (data.file && data.file[0]) {
      formData.append('image', data?.file[0]);
    }

    const response = await API({ method: 'PUT', body: formData, endpoint: `users/updateUser/${id}`, token });

    dispatch({ type: 'UPDATE_USER', payload: response.user });
    localStorage.setItem('user', JSON.stringify(response.user));
    navigate('/');
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function deleteUser({ dispatch, id, navigate, token }) {
  try {
    dispatch({ type: 'LOADING' });
    const response = await API({ method: 'DELETE', endpoint: `users/deleteUser/${id}`, token });

    dispatch({ type: 'DELETE_USER' });
    logout({ dispatch });
    navigate('/');
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}
