import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Chat.module.css';

const Chat = ({chatId, isActive, name}) => {
    return (
        <div className={isActive ? styles.chatItem + ' ' + styles.active : styles.chatItem}>
        <NavLink to={'/messages/' + chatId}>{name}</NavLink>
    </div>
    )
}

export default Chat;