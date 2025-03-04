import { API } from "../../Api/Api";

export async function newActivityReservation({dispatch, data}) {
    try {       
        dispatch({type:'LOADING'});
        const response = await API({method:'POST', isJson:true, body:data, endpoint:'reservations/newReservation'});    
        dispatch({type:'CREATE_RESERVATION_ACTIVITY', payload: response.reservation});
        dispatch({type:'SHOW_MESSAGE', payload: response.message});        
    } catch (error) {
        dispatch({type:'ERROR', payload:error})
    }
  
}