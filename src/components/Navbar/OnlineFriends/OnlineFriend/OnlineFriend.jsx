import React from 'react';
import styles from './OnlineFriend.module.css';

const OnlineFriend = ({data}) => {
    return (
        <div className={styles.onlineFriendItem}>
            <img className={styles.avatar} src='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'></img>
            <span>{data.Name}</span>
        </div>
    );
}

export default OnlineFriend;