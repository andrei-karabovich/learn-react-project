import { serverAPI } from '../api/api';

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const SUCCESS_RESPONSE_CODE = 0;


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

export const getAuthData = () => {
  return (dispatch) => {
    serverAPI.checkAuth().then( (response) => {
      if (response && response.resultCode === SUCCESS_RESPONSE_CODE) {
          const {email, id, login} = {...response.data};
          dispatch(setAuthData(id, login, email));
      }
    });
  }
}

export const login = (loginData) => {
  return (dispatch) => {
    serverAPI.login(loginData).then( (response) => {
      if (response && response.resultCode === SUCCESS_RESPONSE_CODE) {
          dispatch(setAuthData(response.data.userId, 'temp_login', loginData.email));
      }
    });
  }
}


export default authReducer;
