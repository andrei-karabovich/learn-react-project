const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';

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