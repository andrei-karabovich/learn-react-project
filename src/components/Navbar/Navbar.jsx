import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import OnlineFriends from './OnlineFriends/OnlineFriends';

const Navbar = (props) => {
    debugger;
    return (
        <div>
            <nav className={styles.nav}>
                <div>
                    <NavLink to='/profile' className={ navData => navData.isActive ? styles.activeLink : styles.link }>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/messages' className={ navData => navData.isActive ? styles.activeLink : styles.link }>Messages</NavLink>
                </div>
                <div>
                    <NavLink to='/news' className={ navData => navData.isActive ? styles.activeLink : styles.link }>News</NavLink>
                </div>
                <div>
                    <NavLink to='/music' className={ navData => navData.isActive ? styles.activeLink : styles.link }>Music</NavLink>
                </div>
                <div>
                    <NavLink to='/settings' className={ navData => navData.isActive ? styles.activeLink : styles.link }>Settings</NavLink>
                </div>
                <OnlineFriends data={props.data}/>
            </nav>
        </div>
    );
}

export default Navbar;