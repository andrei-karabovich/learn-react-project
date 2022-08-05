const INVERSE_FOLLOW = 'INVERSE_FOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVERSE_FOLLOW:
    return {
        users: state.users.map( u => {
            if (u.id === action.userId) {
                u.followed = !u.followed;
            }
            return u;
        })
    }
    case SET_USERS:
      return {users: action.users}
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

export default usersReducer;
