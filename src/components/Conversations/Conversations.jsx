import React from 'react';
import Chat from './Chat';
import Message from './Message';
import styles from './Conversations.module.css';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/conversationsReducer';

const Conversations = (props) => {
    const messageInput = React.createRef();
    let dialogElements = props.data.dialogs.map((dialog) => <Chat chatId ={dialog.chatId} name={dialog.companyonName} isActive={dialog.isActive}/>);
    let messageElements = props.data.messages.map((messageItem) => <Message message={messageItem}/>);

    const onMessageInput = () => {
        const action = updateMessageActionCreator(messageInput.current.value)
        props.dispatch(action);
    };

    const sendMessage = () => {
        const action = addMessageActionCreator();
        props.dispatch(action);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.chats}>
                { dialogElements }
            </div>
            <div className={styles.messages}>
                { messageElements }
            </div>

            <div>
                <textarea ref={messageInput} value={props.data.newMessageText} onChange={onMessageInput}/>
                <button onClick={ sendMessage }> Send </button>
            </div>
        </div>
    )
}

export default Conversations;
