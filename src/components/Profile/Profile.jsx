import React from 'react';
import Feed from "./Feed/Feed";
import styles from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <Feed posts={props.posts}/>
      </div>
    );
}

export default Profile;