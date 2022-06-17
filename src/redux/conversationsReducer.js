const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const initialState = {
  dialogs: [
    { chatId: '1', companyonName: 'Paulina', isActive: true },
    { chatId: '2', companyonName: 'Matthijs', isActive: false },
    { chatId: '3', companyonName: 'Sam', isActive: false },
    { chatId: '4', companyonName: 'Rutger', isActive: false },
  ],
  messages: [
    { chatId: '1', message: 'Hello', isOutbound: true },
    { chatId: '2', message: 'How are you today?', isOutbound: true },
    { chatId: '3', message: 'Tell me more', isOutbound: false },
  ],
  newMessageText: '',
};

const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { chatId: '1', message: state.newMessageText, isOutbound: true },
        ],
        newMessageText: '',
      };
    case UPDATE_NEW_MESSAGE:
        return {
          ...state,
          newMessageText: action.message
        }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateMessageActionCreator = (message) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    message: message,
  };
};

export default conversationsReducer;
