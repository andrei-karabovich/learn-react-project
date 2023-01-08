import React, { useState } from 'react';
import Spinner from '../../common/Spinner/Spinner';
import ProfileData from './ProfileData/ProfileData';
import ProfileDataForm from './ProfileData/ProfileDataForm';
import styles from './ProfileInfo.module.css';
import ProfileStatusContainer from './Status/ProfileStatusContainer';

const ProfileInfo = ({ profile, isOwner, updatePhoto, updateProfile}) => {
    const [file, setFile] = useState(null);
    const [editMode, setEditMode] = useState(false);

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

    const handleProfileUpdate = (data) => {
        updateProfile(data).then(() => {
            setEditMode(false);
        })
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

                    
                    { isOwner && !editMode &&
                        <div>
                            <button onClick={() => {setEditMode(true)}}>Edit</button>
                        </div>
                    }

                    { editMode ? <ProfileDataForm profile={profile} handleProfileUpdate={handleProfileUpdate}/> :
                                <ProfileData profile={profile}/> 
                    }
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;