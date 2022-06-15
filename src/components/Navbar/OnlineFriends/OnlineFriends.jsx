import React from 'react';
import styles from './OnlineFriends.module.css';
import OnlineFriend from './OnlineFriend';

const OnlineFriends = (props) => {
    let onlineFriendsElements = props.friends.map((friendData) => <OnlineFriend data={friendData}/>);

    return (
        <div>
            <span className={styles.title}>Online friends:</span>
            <div className={styles.friendsWidget}>
                <div className={styles.friendList}>
                    {onlineFriendsElements}
                </div>
            </div>
        </div>
    );
}

export default OnlineFriends;