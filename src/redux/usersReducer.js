const INVERSE_FOLLOW = 'INVERSE_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 5,
  totalUsersCount: 0,
  isLoading: false
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVERSE_FOLLOW:
    return {
        ...state,
        users: state.users.map( u => {
            if (u.id === action.userId) {
                u.followed = !u.followed;
            }
            return u;
        })
    }
    case SET_USERS:
      return { ...state, users: action.users}
    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalUsersCount: action.count}
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber}    
    case TOGGLE_IS_LOADING:
      return { ...state, isLoading: action.isLoading}    
    default:
      return state;
  }
};

export const inverseIsFollow = (userId) => {
  return {
    type: INVERSE_FOLLOW,
    userId
  };
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users
  };
};

export const setUsersTotalCount = (count) => {
  return {
    type: SET_USERS_TOTAL_COUNT,
    count
  };
};


export const setCurrentPage = (pageNumber) => {
  return {
    type: SET_CURRENT_PAGE,
    pageNumber
  };
};


export const toggleIsLoading = (isLoading) => {
  return {
    type: TOGGLE_IS_LOADING,
    isLoading
  };
};

export default usersReducer;
