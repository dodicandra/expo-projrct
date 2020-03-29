export const initialState = {
  isLoggedIn: false,
  user: null,
};

// REDUCER
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user,
      };
    case 'LOGOUT':
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default authReducer;
