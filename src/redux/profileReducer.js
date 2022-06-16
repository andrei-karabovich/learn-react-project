const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const initialState = {
  posts: [
    { postId: '1', text: 'Hello', likesCount: 11 },
    { postId: '2', text: 'How are you today?', likesCount: 23 },
    { postId: '3', text: 'Tell me more. This must be a long post to check how the layout works.', likesCount: 14 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
        { postId: '4', text: state.newPostText, likesCount: 0 },
          ...state.posts,
        ],
        newPostText: '',
      };
    case UPDATE_NEW_POST:
      return {
        ...state,
        newPostText: action.text,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST,
    text: text,
  };
};

export default profileReducer;
