const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const conversationsReducer = (action, state) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                chatId: '1',
                message: state.newMessageText,
                isInbound: false
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.message;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
};

export const updateMessageActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        message: message
    }
};

export default conversationsReducer;