import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Users.module.css';

const Users = (props) => {
    return <div>
        <div> {
            props.users?.map(u => <div key={u.id} className={styles.userElement}>
                <img src={u.photos.small != null ? u.photos.small : 'https://bit.ly/3zu5DNw'} className={styles.userAvatar}/>
                <NavLink to={`/profile/${u.id}`}>
                    {u.name}
                </NavLink>
                <button disabled={props.followingInProgress.some( (item) => item === u.id)} id={u.id} onClick={props.onSubscribeButtonClick}>{u.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            )}
        </div>
    </div>
}

export default Users;