import React from 'react';
import Conversations from './Conversations';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/conversationsReducer';
import {connect} from 'react-redux';
import withAuthReducer from '../../hoc/withAuthCheck';

let mapStateToProps = (state) => {
    return {
        dialogs: state.conversationsPage.dialogs,
        messages: state.conversationsPage.messages,
        newMessageText: state.conversationsPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageInput: (text) => {
            const action = updateMessageActionCreator(text)
            dispatch(action);
        },
        onSendMessage: () => {
            const action = addMessageActionCreator();
            dispatch(action);
        }
    }
};


const ConversationsContainer = withAuthReducer(connect(mapStateToProps, mapDispatchToProps)(Conversations));

export default ConversationsContainer;
