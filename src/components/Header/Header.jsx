import logo from '../../assets/logout-svgrepo-com.svg';
import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, username, logout}) => {
    return (
        <header className={styles.header}>
            <span className={styles.headerText}>Learn React</span>
            <img src='https://www.svgrepo.com/show/327388/logo-react.svg'/>

            <div className={styles.authBlock}>
                <span>
                   { isAuth ?
                        <div className={styles.userNameBlock}>
                            <span>{username}</span>
                            <img className={styles.logoutIcon} src={logo} onClick={logout}/> 
                        </div>
                        :
                        <NavLink to={'/login/'}>Login</NavLink>
                    }
                </span>
            </div>
        </header>
    );
}

export default Header;