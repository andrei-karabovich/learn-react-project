import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/f/f7/Vandebron_logo.png'></img>
        </header>
    );
}

export default Header;