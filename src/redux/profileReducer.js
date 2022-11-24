import { serverAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';

const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

const initialState = {
  posts: [
    { postId: '1', text: 'Hello', likesCount: 11 },
    { postId: '2', text: 'How are you today?', likesCount: 23 },
    { postId: '3', text: 'Tell me more. This must be a long post to check how the layout works.', likesCount: 14 },
  ],
  profile: null, 
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
        { postId: '4', text: action.text, likesCount: 0 },
          ...state.posts,
        ]
      };
    case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter((post) => post.postId != action.postId)
        };
    case SET_PROFILE: 
      return {
        ...state,
        profile: action.profile,
      };
    case SET_STATUS: 
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = (text) => {
  return {
    type: ADD_POST,
    text
  };
};

export const deletePostActionCreator = (postId) => {
  return {
    type: DELETE_POST,
    postId
  };
};

export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  };
};


export const getProfile = (userId) => {
  return (dispatch) => {
    serverAPI.getProfile(userId).then( (response) => {
      dispatch(setProfile(response));
    });
  }
};

export const getStatus = (userId) => {
  return (dispatch) => {
    serverAPI.getStatus(userId).then( (response) => {
      dispatch(setStatus(response));
    });
  }
};

export const updateStatus = (statusMessage) => {
  return (dispatch) => {
    serverAPI.updateStatus(statusMessage).then( (response) => {
      dispatch(setStatus(statusMessage));
    });
  }
}

export default profileReducer;
