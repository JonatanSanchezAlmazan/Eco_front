export const initialActivitiesState = {
  activities: [],
  activity: null,
  isLoading: false,
  error: false
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

    default:
      return { ...state };
  }
}
