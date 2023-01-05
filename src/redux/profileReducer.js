import { serverAPI } from '../api/api';

const ADD_POST = 'profileReducer/ADD-POST';
const DELETE_POST = 'profileReducer/DELETE_POST';
const SET_PROFILE = 'profileReducer/SET_PROFILE';
const SET_STATUS = 'profileReducer/SET_STATUS';
const SET_PHOTOS = 'profileReducer/SET_PHOTOS';

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
    case SET_PHOTOS: 
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photoUrls
        }
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

export const setPhotos = (photoUrls) => {
  return {
    type: SET_PHOTOS,
    photoUrls
  };
};


export const getProfile = (userId) => {
  return async (dispatch) => {
    let response = await serverAPI.getProfile(userId);
    dispatch(setProfile(response));
  }
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    let response = await serverAPI.getStatus(userId);
    dispatch(setStatus(response));
  }
};

export const updateStatus = (statusMessage) => {
  return async (dispatch) => {
    await serverAPI.updateStatus(statusMessage);
    dispatch(setStatus(statusMessage));
  }
}

export const updatePhoto = (photo) => {
  return async (dispatch) => {
    let photos = await serverAPI.updatePhoto(photo);
    dispatch(setPhotos(photos));
  }
}

export default profileReducer;
