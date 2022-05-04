import React from 'react';
import styles from "./Message.module.css";

const Message = (props) => {
    console.log(props.message);
    return (
        <div className={styles.message}>
            {props.message.message}
        </div>
    )
}

export default Message;
