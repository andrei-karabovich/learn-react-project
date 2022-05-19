import React from 'react';
import Feed from './Feed/Feed';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <Feed data={props.data} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
      </div>
    );
}

export default Profile;