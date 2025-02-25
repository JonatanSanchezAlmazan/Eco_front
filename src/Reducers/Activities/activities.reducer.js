export const initialActivitiesState = {
  activities: [],
  activity: null,
  isLoading: false,
  error: false,
  message:false
};

export function activitiesReducer(state, action) {
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
    case 'GET_ACTIVITIES':
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: false,
        message:false
      };
    case 'GET_ACTIVITY':
      return {
        ...state,
        activity: action.payload,
        isLoading: false,
        error: false,
        message:false
      };
    case 'GET_ACTIVITIES_BY_AUTHOR':
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: false,
        message:false
      };

      case 'CREATE_ACTIVITY':
        return {
          ...state,
          isLoading:false,
          error:false,
          activities: [...state.activities, action.payload],
          message:false
        }
      case 'UPDATE_ACTIVITY':
        return{
          ...state,
          isLoading:false,
          error:false,
          activities:[...state.activities, action.payload],
          message:false
        }
      case 'DELETE_ACTIVITY':
        return{
          ...state,
          isLoading:false,
          error:false,
          activities: state.activities.filter(activity => activity._id !== action.payload._id),
          message:false
        }

    default:
      return { ...state };
  }
}
