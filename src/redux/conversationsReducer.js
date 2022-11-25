const ADD_MESSAGE = 'conversationReducer/ADD-MESSAGE';

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
  ]
};

const conversationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { chatId: '222', message: action.message, isOutbound: true },
        ]
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = (message) => {
  return {
    type: ADD_MESSAGE,
    message: message
  };
};

export default conversationsReducer;
