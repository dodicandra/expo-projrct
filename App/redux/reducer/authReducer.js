const initialState = {
  userToken: null,
  isLoading: false,
  error: null,
};

export const autReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'STOP_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'SET_USER':
      return {
        ...state,
        userToken: action.payload,
        isLoading: false,
      };
    case 'REMOVE_USER':
      return {
        ...state,
        userToken: null,
      };
    default:
      return state;
  }
};
