import logo from '../../logo.svg';

import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <span className={styles.headerText}>Learn React</span>
            <img src='https://www.svgrepo.com/show/327388/logo-react.svg'/>
        </header>
    );
}

export default Header;