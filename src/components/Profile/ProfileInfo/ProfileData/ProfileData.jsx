import React from 'react';
import styles from './ProfileData.module.css';

const ProfileData = ({profile}) => {
    return (
        <div>
            <div>
                About me: {profile.aboutMe}
            </div>
            <div>
                Looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            { profile.lookingForAJob && 
                <div>
                    Job description: {profile.lookingForAJobDescription}
                </div>
            }
            {
             Object.keys(profile.contacts).map((item) => {
                let value = profile.contacts[item];
                return <ProfileDataContact prop={item} value={value}/>
             })   
            } 
        </div>
    );
}

const ProfileDataContact = ({prop, value}) => {
    return (
        <div className={styles.contactItem}>
            <span>{prop}: {value}</span> 
        </div>
    );
}

export default ProfileData;