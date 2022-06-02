const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initialState = {
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
    ],
    newMessageText : ''
};

const conversationsReducer = (state = initialState, action) => {
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