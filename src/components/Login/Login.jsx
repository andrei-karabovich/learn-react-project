import React from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import {login} from '../../redux/authReducer'
import {connect} from 'react-redux';
import { requiredField } from '../../validators/validators';
import { InputText } from '../common/InputControls/InputControls';



const Login = (props) => {
    let navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({mode: 'all'});

    const onSubmit = (data) => {
        props.login(data);
        reset();
        return navigate('/profile');
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
                <InputText placeholder='email' name='email' type={'text'} register={register} validationSchema={{required: true}} errors={errors.email}/>
                <InputText placeholder='password' name='password' type={'password'} register = {register} validationSchema={{required: true}} errors={errors.password}/>
                <div className={styles.inputBlock}>
                    <span className={styles.label}>Remember Me</span>
                    <input type={'Checkbox'} {...register('rememberMe')} />
                </div>
                <button className={styles.submitButton}>Login</button>
            </form>
        </div>
    );
}

export default connect(() => {return {}}, {login})(Login);