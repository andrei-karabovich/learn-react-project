import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import formStyles from './../common/InputControls/InputControls.module.css';

import {login} from '../../redux/authReducer'
import {connect} from 'react-redux';
import { requiredField } from '../../validators/validators';
import { InputText } from '../common/InputControls/InputControls';




const Login = (props) => {
    let navigate = useNavigate();
    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm({mode: 'all'});

    const onSubmit = (data) => {
        props.login(data, setError, navigate);   
    }

    const clearCommonErrors = () => {
        clearErrors('commonErrors');
    } 
    const validationRules = {
        email : {
            requiredField
        }
    }

    return (
        <div className={styles.loginBlock}>
            <h2> Login </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputText placeholder='email' name='email' type={'text'} register={register} validationSchema={{required: true}} errors={errors.email} onChange={clearCommonErrors}/>
                <InputText placeholder='password' name='password' type={'password'} register = {register} validationSchema={{required: true}} errors={errors.password} onChange={clearCommonErrors}/>
                <div className={styles.inputBlock}>
                    <span className={styles.label}>Remember Me</span>
                    <input type={'Checkbox'} {...register('rememberMe')} />
                </div>

                {errors.commonErrors && 
                    <div className={formStyles.errorMessage}>
                        <span>{errors.commonErrors.message}</span>
                    </div>
                }
                <input label="Login" type="submit" className={styles.submitButton}></input>
            </form>
        </div>
    );
}

export default connect(() => {return {}}, {login})(Login);