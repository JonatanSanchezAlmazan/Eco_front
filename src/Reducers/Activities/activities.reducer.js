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
        error: false
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case 'SHOW_MESSAGE':
      return {
        ...state,
         message:action.payload
      }
    case 'GET_ACTIVITIES':
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: false
      };
    case 'GET_ACTIVITY':
      return {
        ...state,
        activity: action.payload,
        isLoading: false,
        error: false
      };
    case 'GET_ACTIVITIES_BY_AUTHOR':
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        error: false
      };

      case 'CREATE_ACTIVITY':
        return {
          ...state,
          isLoading:false,
          error:false,
          activities: [...state.activities, action.payload]
        }

    default:
      return { ...state };
  }
}
