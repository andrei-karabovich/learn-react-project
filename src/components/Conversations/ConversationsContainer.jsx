import React from 'react';
import Conversations from './Conversations';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/conversationsReducer';

const ConversationsContainer = (props) => {
    const state = props.store.getState().conversationsPage;

    const updateNewMessageText = (text) => {
        const action = updateMessageActionCreator(text)
        props.store.dispatch(action);
    };

    const sendMessage = () => {
        const action = addMessageActionCreator();
        props.store.dispatch(action);
    };

    return (
        <Conversations dialogs={state.dialogs} messages={state.messages} onMessageInput={updateNewMessageText} onSendMessage={sendMessage} newMessageText={state.newMessageText}/>
    )
}

export default ConversationsContainer;
