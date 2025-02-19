export const initialAccommodationsState = {
  accommodations: [],
  accommodation: null,
  isLoading: false,
  error: false
};

export function accommodationReducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case 'GET_ACCOMMODATIONS':
      return {
        ...state,
        accommodations: action.payload,
        isLoading: false
      };
    case 'GET_ACCOMMODATION':
      return {
        ...state,
        accommodation: action.payload,
        isLoading: false
      };
    case 'GET_ACCOMMODATIONS_BY_AUTHOR':
      return {
        ...state,
        accommodations: action.payload,
        isLoading: false,
        error: false
      };
    default:
      return { ...state };
  }
}
