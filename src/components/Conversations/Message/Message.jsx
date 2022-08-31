import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    return (
        <div className={styles.message}>
            <p className={props.message.isOutbound ? styles.inboundMessage : styles.outboundMessage}>
                {props.message.message}
            </p>
        </div>
    )
}

export default Message;
