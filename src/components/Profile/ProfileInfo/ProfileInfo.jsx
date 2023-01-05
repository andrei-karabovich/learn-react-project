import React, { useState } from 'react';
import Spinner from '../../common/Spinner/Spinner';
import styles from './ProfileInfo.module.css';
import ProfileStatusContainer from './Status/ProfileStatusContainer';

const ProfileInfo = ({ profile, isOwner, updatePhoto }) => {
    const [file, setFile] = useState(null);

    if (!profile) {
        return <Spinner />
    }

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    const handleUploadClick = () => {
        if (!file) {
          return;
        }
        updatePhoto(file);
    }

    return (
        <div className={styles.profileBlock}>
            <div>
                <p className={styles.userName}>{profile.fullName}</p>
                <img alt='avatar' src={profile.photos.large ? profile.photos.large : 'https://www.w3schools.com/howto/img_avatar.png'} className={styles.avatar}></img>
                {isOwner &&
                    <div>
                        <input type='file' onChange={handleFileChange}></input>
                        <button onClick={handleUploadClick}>Upload</button>
                    </div>
                }
            </div>
            <div>
                <div className={styles.descriptionBlock}>
                    <ProfileStatusContainer />
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;