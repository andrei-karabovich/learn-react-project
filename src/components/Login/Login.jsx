import React from 'react';
import { useForm } from "react-hook-form";
import styles from './Login.module.css';


const Login = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={styles.loginBlock}>
            <h2> Login </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputBlock}>
                    <input placeholder="login" {...register("login")} />
                </div>
                <div className={styles.inputBlock}>
                    <input placeholder="password" type={"password"} {...register("password")} />
                </div>
                <div className={styles.inputBlock}>
                    <span className={styles.label}>Remember Me</span>
                    <input type={"Checkbox"} {...register("rememberMe")} />
                </div>
                <button className={styles.submitButton}>Login</button>
            </form>
        </div>
    );
}

export default Login;