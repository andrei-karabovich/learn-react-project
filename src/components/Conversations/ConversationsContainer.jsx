import React from 'react';
import Conversations from './Conversations';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/conversationsReducer';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.conversationsPage.dialogs,
        messages: state.conversationsPage.messages,
        newMessageText: state.conversationsPage.newMessageText,
        isAuth: state.auth.isAuth
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


const ConversationsContainer = connect(mapStateToProps, mapDispatchToProps)(Conversations);

export default ConversationsContainer;
