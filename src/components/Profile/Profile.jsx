import React from 'react';
import FeedContainer from './Feed/FeedContainer';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <div>
                <ProfileInfo {... props }/>
            </div>

            <div className={styles.feedBlock}>
                <FeedContainer/>
            </div>
      </div>
    );
}

export default Profile;