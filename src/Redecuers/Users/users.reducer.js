export const initialUsersState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  isLoading: false,
  isLogin: localStorage.getItem('user') !== null,
  error: false
};

export function usersReducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLogin: true
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {},
        isLogin: false,
        userById: null
      };
    case 'GET_USER':
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    case 'UPDATE_USER':
      return {
        ...state,
        isLoading: false,
        user: action.payload
      };
    case 'DELETE_USER':
      return {
        ...state,
        isLoading: false,
        user: {}
      };

    default:
      return { ...state };
  }
}
