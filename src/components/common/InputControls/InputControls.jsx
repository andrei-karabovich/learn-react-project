import React from 'react';
import styles from './InputControls.module.css'

export const InputText = ({ label, name, placeholder, register, errors, required, type, validationSchema, onChange, value }) => {
    return (
        <div className={styles.inputBlock}>
            <label htmlFor={name}>
                {label}
                {required && '*'}
            </label>
            <input {...register(name, validationSchema)} value={value} name={name} required={required} type={type} placeholder={placeholder} className={errors ? styles.errorInput : styles.input} onChange={onChange}/>
            { errors?.type === 'required' && <p className={styles.errorMessage} role='alert'>{name} is required</p>}
            { errors?.type === 'maxLength' && <p className={styles.errorMessage} role='alert'>The {name} is too long</p>}

        </div>
    )
}
