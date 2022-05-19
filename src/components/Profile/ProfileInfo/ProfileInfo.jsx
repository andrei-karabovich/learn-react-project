import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={styles.profileBlock}>
            <div>
                <p className={styles.userName}>Andrei Karabovich</p>
                <img src='https://www.w3schools.com/howto/img_avatar.png' className={styles.avatar}></img>
            </div>
            <div>
                <div className={styles.descriptionBlock}>This is my test page! Apparantely here will be some user details</div>
            </div>
        </div>
    );
}

export default ProfileInfo;