import React from 'react';
import Feed from './Feed/Feed';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <div>
                <ProfileInfo/>
            </div>

            <div className={styles.feedBlock}>
                <Feed data={props.data} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            </div>
      </div>
    );
}

export default Profile;