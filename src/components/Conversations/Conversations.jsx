import React, { useEffect } from 'react';
import Chat from './Chat';
import Message from './Message';
import styles from './Conversations.module.css';
import { useNavigate } from 'react-router-dom';

const Conversations = (props) => {
    let navigate = useNavigate();

    const messageInput = React.createRef();
    let dialogElements = props.dialogs.map((dialog) => <Chat chatId={dialog.chatId} key={dialog.chatId} name={dialog.companyonName} isActive={dialog.isActive}/>);
    let messageElements = props.messages.map((messageItem) => <Message message={messageItem} key={messageItem.chatId}/>);

    const updateNewMessageText = () => {
        props.onMessageInput(messageInput.current.value);
    };

    const sendMessage = () => {
        props.onSendMessage();
    };

    useEffect(() => {
        if (!props.isAuth){
            return navigate("/login")
        }
    },[]);

    return (
        <div className={styles.dialogs}>
            <div className={styles.chats}>
                { dialogElements }
            </div>
            <div className={styles.messages}>
                { messageElements }
            </div>

            <div>
                <textarea ref={messageInput} value={props.newMessageText} onChange={updateNewMessageText}/>
                <button onClick={ sendMessage }> Send </button>
            </div>
        </div>
    )
}

export default Conversations;
