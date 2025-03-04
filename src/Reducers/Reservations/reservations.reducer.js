export const initialReservationsState = {
    reservation: null,
    error:null,
    message:null,
    isLoading:null
}

export function reservationsReducer(state, action) {
switch (action.type) {
    case 'LOADING':
        return {
            ...state,
            isLoading: true,
            error: false,
            message:false
          };
        
    case 'ERROR':
        return {
            ...state,
            error: action.payload,
            isLoading: false,
            message:false
        };
      
    case 'SHOW_MESSAGE':
        return {
            ...state,
            message:action.payload,
        }
    case 'CREATE_RESERVATION_ACTIVITY':
        return {
            ...state,
            isLoading:false,
            message:false,
            reservation: action.payload
        }
    

    default:
        return {...state}
}
}