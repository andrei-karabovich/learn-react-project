import React from 'react';
import Conversations from './Conversations';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/conversationsReducer';
import StoreContext from '../../storeContext';

const ConversationsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().conversationsPage;

                    const updateNewMessageText = (text) => {
                        const action = updateMessageActionCreator(text)
                        store.dispatch(action);
                    };
                
                    const sendMessage = () => {
                        const action = addMessageActionCreator();
                        store.dispatch(action);
                    };

                    return <Conversations dialogs={state.dialogs} messages={state.messages} onMessageInput={updateNewMessageText} onSendMessage={sendMessage} newMessageText={state.newMessageText} />
                }
            }

        </StoreContext.Consumer>
    )
}

export default ConversationsContainer;
