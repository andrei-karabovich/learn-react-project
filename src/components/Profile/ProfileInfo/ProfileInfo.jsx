import React from 'react';
import Spinner from '../../common/Spinner/Spinner';
import styles from './ProfileInfo.module.css';
import ProfileStatusContainer from './Status/ProfileStatusContainer';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Spinner/>
    }

    return (
        <div className={styles.profileBlock}>
            <div>
                <p className={styles.userName}>{props.profile.fullName}</p>
                <img alt='avatar' src={props.profile.photos.large ? props.profile.photos.large : 'https://www.w3schools.com/howto/img_avatar.png' } className={styles.avatar}></img>
            </div>
            <div>
                <div className={styles.descriptionBlock}>
                    <ProfileStatusContainer/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;