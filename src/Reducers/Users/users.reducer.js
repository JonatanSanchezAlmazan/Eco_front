export const initialUsersState = {
  user: JSON.parse(localStorage.getItem('user')) || {},
  token: localStorage.getItem('token') || null,
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
        error: false
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
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false,
        isLogin: true,
        error: false
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {},
        isLogin: false,
        error: false,
        token: null
      };
    case 'GET_USER':
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: false
      };
    case 'UPDATE_USER':
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: false
      };
    case 'DELETE_USER':
      return {
        ...state,
        isLoading: false,
        user: {},
        error: false
      };

    default:
      return { ...state };
  }
}
