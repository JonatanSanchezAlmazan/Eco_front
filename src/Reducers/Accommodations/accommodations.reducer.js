export const initialAccommodationsState = {
  accommodations: [],
  accommodation: null,
  isLoading: false,
  error: false,
  message:false
};

export function accommodationReducer(state, action) {
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
        isLoading: false,
        error: action.payload,
        message:false
      };
    case 'GET_ACCOMMODATIONS':
      return {
        ...state,
        accommodations: action.payload,
        isLoading: false,
        error: false,
        message:false
      };
    case 'GET_ACCOMMODATION':
      return {
        ...state,
        accommodation: action.payload,
        isLoading: false,
        error: false,
        message:false
      };
    case 'GET_ACCOMMODATIONS_BY_AUTHOR':
      return {
        ...state,
        accommodations: action.payload,
        isLoading: false,
        error: null,
        message:false
      };
    case 'CREATE_ACCOMMODATION':
      return {
        ...state,
        isLoading: false,
        error: null,
        message:false,
        accommodations: [...state.accommodations, action.payload]
      };
    case 'UPDATE_ACCOMMODATION':
      return {
        ...state,
        isLoading:false,
        error:null,
        message:false,
        accommodations: [...state.accommodations, action.payload]
      }
    case 'DELETE_ACCOMMODATION':
      return{
        ...state,
        error:null,
        isLoading:false,
        message:false,
        accommodations: state.accommodations.filter(accommodation => accommodation._id !== action.payload._id)
      }
    case 'SHOW_MESSAGE':
      return{
        ...state,
        message: action.payload
      }
    default:
      return { ...state };
  }
}
