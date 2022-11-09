import { serverAPI } from '../api/api';
import { setIsInitialized} from './appReducer';

const SET_AUTH_DATA = 'SET_AUTH_DATA';
const DELETE_AUTH_DATA = 'DELETE_AUTH_DATA';

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
    case DELETE_AUTH_DATA:
      return initialState
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

export const deleteAuthData = () => {
  return {
    type: DELETE_AUTH_DATA
  };
};


export const getAuthData = () => {
  return (dispatch) => {
    serverAPI.checkAuth().then( (response) => {
        if (response && response.resultCode === SUCCESS_RESPONSE_CODE) {
            const {email, id, login} = {...response.data};
            dispatch(setAuthData(id, login, email));
        }
        dispatch(setIsInitialized(true));
    });
  }
}

export const login = (loginData, setError, navigate) => {
  return (dispatch) => {
    serverAPI.login(loginData).then( (response) => {
      if (response && response.resultCode === SUCCESS_RESPONSE_CODE) {
          dispatch(getAuthData());
          navigate('/profile');
      } else if(response && response.resultCode !== SUCCESS_RESPONSE_CODE) {
        setError('commonErrors', { type: 'server', message: response.messages[0] });
      } else {
        setError('commonErrors', { type: 'server', message: 'Something went wrong' });
      }
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    serverAPI.logout().then( (response) => {
      if (response && response.resultCode === SUCCESS_RESPONSE_CODE) {
          dispatch(deleteAuthData());
      }
    });
  }
}


export default authReducer;
