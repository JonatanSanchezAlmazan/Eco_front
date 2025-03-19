import { API } from '../../Api/Api';

import { formatDate } from '../../utils/formatDate';
import { isEntryDateValid } from '../../utils/isEntryDateValid';
import { isExitDateAfterEntry } from '../../utils/isExitDateAfterEntry';

export async function newReservation({ dispatch, data }) {
  try {
    const showMessage = (message) => {
      dispatch({ type: 'SHOW_MESSAGE', payload: message });
      setTimeout(() => dispatch({ type: 'CLEAR_MESSAGE' }), 3000);
    };

    if (!isEntryDateValid({ date: data.entryDate })) {
      showMessage('La fecha no puede ser anterior al día de hoy');
      return;
    }

    if (data.exitDate && !isExitDateAfterEntry({ entryDate: data.entryDate, exitDate: data.exitDate })) {
      showMessage('La fecha de salida no puede ser anterior a la de entrada');
      return;
    }

    dispatch({ type: 'LOADING' });

    data.entryDate = formatDate({ date: data.entryDate });
    if (data.exitDate) {
      data.exitDate = formatDate({ date: data.exitDate });
    }

    const response = await API({ method: 'POST', isJson: true, body: data, endpoint: 'reservations/newReservation' });

    dispatch({ type: 'CREATE_RESERVATION_ACTIVITY', payload: response.reservation });
    showMessage(response.message);
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function getReservations({ dispatch, id }) {
  try {
    dispatch({ type: 'LOADING' });
    const response = await API({ endpoint: `reservations/${id}` });
    dispatch({ type: 'GET_RESERVATIONS', payload: response.reservations });
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}

export async function removeReservation({ dispatch, id }) {
  try {
    const showMessage = (message) => {
      dispatch({ type: 'SHOW_MESSAGE', payload: message });
      setTimeout(() => dispatch({ type: 'CLEAR_MESSAGE' }), 3000);
    };
    dispatch({ type: 'LOADING' });
    const response = await API({ method: 'DELETE', endpoint: `reservations/deleteReservation/${id}` });

    showMessage(response.message);
  } catch (error) {
    dispatch({ type: 'ERROR', payload: error });
  }
}
