import React from 'react';
import styles from './OnlineFriends.module.css';
import OnlineFriend from './OnlineFriend/OnlineFriend';

const OnlineFriends = (props) => {
    let onlineFriendsElements = props.data.friends.map((friendData) => <OnlineFriend data={friendData}/>);

    return (
        <div className={styles.friendsWidget}>
            <span>Online friends</span>
            <div className={styles.friendList}>
                {onlineFriendsElements}
            </div>
        </div>
    );
}

export default OnlineFriends;