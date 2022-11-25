import React from 'react';
import Chat from './Chat';
import Message from './Message';
import styles from './Conversations.module.css';
import { useForm } from 'react-hook-form';

const Conversations = ({dialogs, messages,onSendMessage}) => {
    const { register, handleSubmit, reset } = useForm();
    let dialogElements = dialogs.map((dialog) => <Chat chatId={dialog.chatId} key={dialog.chatId} name={dialog.companyonName} isActive={dialog.isActive}/>);
    let messageElements = messages.map((messageItem) => <Message message={messageItem} key={messageItem.chatId}/>);

    const onSubmit = (data) => {
        onSendMessage(data.message);
        reset();
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
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <input {...register('message') } />
                    <input type={'submit'}/>
                </form>
            </div>
        </div>
    )
}

export default Conversations;
