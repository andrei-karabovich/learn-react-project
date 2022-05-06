import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./Chat.module.css";

const Chat = (props) => {
    return (
        <div className={props.isActive ? styles.chatItem + ' ' + styles.active : styles.chatItem}>
        <NavLink to={'/messages/' + props.chatId}>{props.name}</NavLink>
    </div>
    )
}

export default Chat;