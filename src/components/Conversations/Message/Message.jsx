import React from 'react';
import styles from './Message.module.css';

const Message = ({message}) => {
    return (
        <div className={styles.message}>
            <p className={message.isOutbound ? styles.inboundMessage : styles.outboundMessage}>
                {message.message}
            </p>
        </div>
    )
}

export default Message;
