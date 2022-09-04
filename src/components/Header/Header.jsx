import logo from '../../logo.svg';

import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, username}) => {
    return (
        <header className={styles.header}>
            <span className={styles.headerText}>Learn React</span>
            <img src='https://www.svgrepo.com/show/327388/logo-react.svg'/>

            <div className={styles.authBlock}>
                <span>
                   { isAuth ? username :  <NavLink to={'/login/'}>Login</NavLink>
 }
                </span>
            </div>
        </header>
    );
}

export default Header;