import React from 'react';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import styles from "./Conversations.module.css";

const Conversations = (props) => {
    let dialogElements = props.conversations.dialogs.map((dialog) => <Chat chatId ={dialog.chatId} name={dialog.companyonName} isActive={dialog.isActive}/>);
    let messageElements = props.conversations.messages.map((messageItem) => <Message message={messageItem}/>);

    return (
        <div className={styles.dialogs}>
            <div className={styles.chats}>
                { dialogElements }
            </div>
            <div className={styles.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Conversations;
