import React from 'react';
import Conversations from './Conversations';
import { addMessageActionCreator } from '../../redux/conversationsReducer';
import {connect} from 'react-redux';
import withAuthReducer from '../../hoc/withAuthCheck';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.conversationsPage.dialogs,
        messages: state.conversationsPage.messages,
        newMessageText: state.conversationsPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: (text) => {
            const action = addMessageActionCreator(text);
            dispatch(action);
        }
    }
};


export default compose( withAuthReducer,
                        connect(mapStateToProps, mapDispatchToProps)
)(Conversations);
