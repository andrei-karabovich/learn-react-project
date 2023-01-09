import { serverAPI } from '../api/api';

const SET_AUTH_DATA = 'authReducer/SET_AUTH_DATA';
const SET_LOGIN_ERROR = 'authReducer/SET_LOGIN_ERROR';
const DELETE_AUTH_DATA = 'authReducer/DELETE_AUTH_DATA';
const DELETE_LOGIN_ERROR = 'authReducer/DELETE_LOGIN_ERROR';
const SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL';

const SUCCESS_RESPONSE_CODE = 0;
const CAPTCHA_REQUIRED_RESPONSE_CODE = 10;

const initialState = {
    isAuth: false,
    username: null,
    id: null,
    email: null,
    loginError: null,
    captchaURL: null
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
    case SET_LOGIN_ERROR:
        return {
          ...state,
          loginError: action.errorMessage
    }
    case SET_CAPTCHA_URL:
      return {
        ...state,
        captchaURL: action.captchaURL
    }
    case DELETE_LOGIN_ERROR:
      return {
        ...state,
        loginError: null
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

export const deleteAuthData = () => {
  return {
    type: DELETE_AUTH_DATA
  };
};

export const setLoginError = (errorMessage) => {
  return {
    type: SET_LOGIN_ERROR,
    errorMessage
  };
};

export const deleteLoginError = () => {
  return {
    type: DELETE_LOGIN_ERROR
  };
};

export const setCaptchaURL = (captchaURL) => {
  return {
    type: SET_CAPTCHA_URL,
    captchaURL
  };
};


export const getAuthData = () => {
  return async (dispatch) => {
    let response = await serverAPI.checkAuth();
    if (response && response.resultCode === SUCCESS_RESPONSE_CODE) {
        const {email, id, login} = {...response.data};
        dispatch(setAuthData(id, login, email));
    }
  }
}

export const getCaptchaURL = () => {
  return async (dispatch) => {
    let response = await serverAPI.getCaptchaUrl();
      const captchaURL = response.url;
      dispatch(setCaptchaURL(captchaURL));
  }
}

export const login = (loginData) => {
  return async (dispatch) => {
    let response = await serverAPI.login(loginData);
    dispatch(setCaptchaURL(null));
    if (response && response.resultCode === SUCCESS_RESPONSE_CODE) {
      dispatch(getAuthData());
    } else if(response && response.resultCode === CAPTCHA_REQUIRED_RESPONSE_CODE) {
      dispatch(getCaptchaURL());
    } else if(response && response.messages && response.messages.length > 0) {
      dispatch(setLoginError(response.messages[0]));
    } else {
      dispatch(setLoginError('Something went wrong'));
    }
  }
}

export const logout = () => {
  return async (dispatch) => {
    let response = await serverAPI.logout();
    if (response && response.resultCode === SUCCESS_RESPONSE_CODE) {
        dispatch(deleteAuthData());
    }
  }
}

export const cleanLoginError = () => {
  return async (dispatch) => {
    dispatch(deleteLoginError());
  }
};


export default authReducer;
