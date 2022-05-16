import React from 'react';
import styles from './OnlineFriend.module.css';

const OnlineFriend = (props) => {
    return (
        <div className={styles.onlineFriendItem}>
            <img className={styles.avatar} src='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'></img>
            <span>{props.data.Name}</span>
        </div>
    );
}

export default OnlineFriend;