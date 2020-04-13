const initialState = {
  data: [],
  isLoading: false,
  error: '',
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        isLoading: true,
      };
    case 'SET_DATA':
      return {
        ...state,
        data: { ...action.payload },
        isLoading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
