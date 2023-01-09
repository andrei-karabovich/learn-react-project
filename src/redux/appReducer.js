import { getAuthData } from './authReducer';

const SET_IS_INITIALIZED = 'appReducer/SET_IS_INITIALIZED';

const initialState = {
    isInitialized: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_INITIALIZED:
      return {
        isInitialized: action.isInitialized
      } 
    default:
      return state;
  }
};

export const setIsInitialized = (isInitialized) => {
  return {
    type: SET_IS_INITIALIZED,
    isInitialized
  };
};


export const initialize = () => {
  return (dispatch) => {
    const getAuthDataPromise = dispatch(getAuthData());
    Promise.all([getAuthDataPromise]).then(() => {
      dispatch(setIsInitialized(true));
    });
  }
}