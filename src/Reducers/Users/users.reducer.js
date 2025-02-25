export const initialUsersState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  isLoading: false,
  isLogin: localStorage.getItem('user') !== null,
  error: false,
  message: false
};

export function usersReducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true,
        error: false,
        message: false
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        message: false
      };
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLogin: true,
        error: false,
        message: false
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {},
        isLogin: false,
        error: false,
        isLoading: false
      };
    case 'GET_USER':
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: false,
        message: false
      };
    case 'UPDATE_USER':
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: false,
        message: false
      };
    case 'DELETE_USER':
      return {
        ...state,
        isLoading: false,
        user: {},
        error: false
      };

    case 'SHOW_MESSAGE':
      return {
        ...state,
        message: action.payload
      };

    default:
      return { ...state };
  }
}
