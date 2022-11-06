import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import {login} from '../../redux/authReducer'
import {connect} from 'react-redux';



const Login = (props) => {
    let navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        props.login(data);
        reset();
        return navigate('/profile');
    }
    return (
        <div className={styles.loginBlock}>
            <h2> Login </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputBlock}>
                    <input placeholder='email' {...register('email')} />
                </div>
                <div className={styles.inputBlock}>
                    <input placeholder='password' type={'password'} {...register('password')} />
                </div>
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