export const initialActivitiesState = {
  activities: [],
  activity: null,
  isLoading: false
};

export function activitiesReducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'GET_ACTIVITIES':
      return {
        ...state,
        activities: action.payload,
        isLoading: false
      };
    case 'GET_ACTIVITY':
      return {
        ...state,
        activity: action.payload,
        isLoading: false
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
