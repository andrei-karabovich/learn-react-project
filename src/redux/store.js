import conversationsReducer from './conversationsReducer';
import navigationReducer from './navigationReducer';
import profileReducer from './profileReducer';

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
                {chatId: '1', message: 'Hello', isOutbound: true},
                {chatId: '2', message: 'How are you today?',  isOutbound: true},
                {chatId: '3', message: 'Tell me more',  isOutbound: false}
            ],
            newMessageText : ''
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
        this.notifySubscribers = observer;
    },

    notifySubscribers() {
        console.log('Subscriber not found');
    },

    dispatch(action) {
        this._state.conversationsPage = conversationsReducer(this._state.conversationsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.navigationBar = navigationReducer(this._state.navigationBar, action);
        this.notifySubscribers();
    }
}


export default store;