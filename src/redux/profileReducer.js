const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (action, state) => {
    debugger;
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                postId: '4',
                text: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
};

export const updateTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST,
        text: text
    }
};

export default profileReducer;