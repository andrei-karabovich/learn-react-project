const SET_AUTH_DATA = 'SET_AUTH_DATA';

const initialState = {
    isAuth: false,
    username: null,
    id: null,
    email: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA:
    return {
       ...action.data,
       isAuth: true
    } 
    default:
      return state;
  }
};

export const setAuthData = (id, username, email) => {
  return {
    type: SET_AUTH_DATA,
    data: {id, username, email}
  };
};

export default authReducer;
