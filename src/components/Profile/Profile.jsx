import React from 'react';
import Feed from './Feed';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <div>
                <ProfileInfo/>
            </div>

            <div className={styles.feedBlock}>
                <Feed data={props.data} dispatch={props.dispatch}/>
            </div>
      </div>
    );
}

export default Profile;