import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from '../../../common/InputControls/InputControls';
import styles from './ProfileData.module.css';

const ProfileDataForm = ({ profile, handleProfileUpdate }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all' });
    const [localProfile, setLocalProfile] = useState(profile);


    const onSubmit = (data) => {
        handleProfileUpdate(data);
    }
    
    const updateCheckbox = (e) => {
        setLocalProfile({...profile, lookingForAJob: e.target.checked});
    }

    const updatedValue = (e) => {
        let updatedProfile = {...profile};
        profile[e.target.name] = e.target.value;
        setLocalProfile(updatedProfile);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('userId')} type='hidden' name='userId' value={profile.userId} />
            <input {...register('fullName')} type='hidden' name='fullName' value={profile.fullName} />
            <InputText label='About me: ' name='aboutMe' type={'text'} register={register} value={profile.aboutMe} onChange={updatedValue}/>
            <label for="lookingForAJob">Looking for a job: </label>
            <input name='lookingForAJob' {...register('lookingForAJob')} type='checkbox' checked={localProfile.lookingForAJob} onChange={updateCheckbox}/>
            <InputText label='Job Description: ' name='lookingForAJobDescription' type={'text'} register={register} value={profile.lookingForAJobDescription} onChange={updatedValue}/>
            {
                Object.keys(profile.contacts).map((item) => {
                    let value = profile.contacts[item];
                    return <ProfileDataFormContact prop={item} value={value} register={register} />
                })
            }
            <button type='sumbit'>Save</button>
        </form>
    );
}

const ProfileDataFormContact = ({ prop, value, register }) => {
    const [localValue, setLocalValue] = useState(value);

    const updatedValue = (e) => {
        setLocalValue(e.target.value);
    }

    return (
        <div className={styles.contactItem}>
            <InputText label={prop + ': '} name={'contacts.' + prop} type={'text'} register={register} value={localValue} onChange={updatedValue}/>
        </div>
    );
}

export default ProfileDataForm;