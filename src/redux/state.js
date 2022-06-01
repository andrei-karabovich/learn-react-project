const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';


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

export const addMessageActionCreator = () => {

};


const store = {
    _state: {
        conversationsPage: {
            dialogs : [
                {chatId: '1', companyonName: 'Paulina', isActive: true},
                {chatId: '2', companyonName: 'Matthijs', isActive: false},
                {chatId: '3', companyonName: 'Sam', isActive: false},
                {chatId: '4', companyonName: 'Rutger', isActive: false}
            ], 
            messages : [
                {chatId: '1', message: 'Hello', isInbound: true},
                {chatId: '2', message: 'How are you today?',  isInbound: true},
                {chatId: '3', message: 'Tell me more',  isInbound: false}
            ]
        },
        profilePage: {
            posts : [
                {postId: '1', text: 'Hello', likesCount: 11},
                {postId: '2', text: 'How are you today?', likesCount: 23},
                {postId: '3', text: 'Tell me more', likesCount: 14}
            ],
            newPostText : ''
        },
        navigationBar: {
            friends: [
                {'Name': 'Nick'},
                {'Name': 'Rasim'},
                {'Name': 'Anna'}
            ]
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this.renderTheWholeThree = observer;
    },

    renderTheWholeThree() {
        console.log('Rerender');
    },

    dispatch(action) {
        switch(action.type) {
            case ADD_POST:
               this._addPost();
              break;
            case UPDATE_NEW_POST:
                this._updateNewPostText(action.text);
                break;
            default:
                console.log('Action not found');
          }
    },

    _addPost() {
        const newPost = {
            postId: '4',
            text: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this.renderTheWholeThree(this._state);
    },

    _updateNewPostText(postText) {
        this._state.profilePage.newPostText = postText;
        this.renderTheWholeThree(this._state);
    },


}


export default store;