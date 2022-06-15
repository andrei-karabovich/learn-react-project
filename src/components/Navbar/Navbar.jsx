import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import OnlineFriends from './OnlineFriends';

const Navbar = (props) => {
    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <NavLink to='/profile' className={ navData => navData.isActive ? styles.activeLink : styles.link }>Profile</NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink to='/messages' className={ navData => navData.isActive ? styles.activeLink : styles.link }>Messages</NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink to='/news' className={ navData => navData.isActive ? styles.activeLink : styles.link }>News</NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink to='/music' className={ navData => navData.isActive ? styles.activeLink : styles.link }>Music</NavLink>
                </div>
                <div className={styles.navItem}>
                    <NavLink to='/settings' className={ navData => navData.isActive ? styles.activeLink : styles.link }>Settings</NavLink>
                </div>
                <div className={styles.onlineFriendBlock}>
                    <OnlineFriends store={props.store}/>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;