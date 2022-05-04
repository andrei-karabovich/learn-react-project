import React from 'react';
import Chat from './Chat/Chat';
import Message from './Message/Message';
import styles from "./Conversations.module.css";

const Conversations = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.chats}>
                <Chat chatId ="1" name="Paulina" isActive="true"/>
                <Chat chatId ="2" name="Matthijs" isActive="false"/>
                <Chat chatId ="3" name="Sam" isActive="false"/>
                <Chat chatId ="4" name="Rutger" isActive="false"/>
            </div>
            <div className={styles.messages}>
                <Message message="Hello!"/>
                <Message message="How are you today?"/>
                <Message message="Tell me more"/>
            </div>
        </div>
    )
}

export default Conversations;
