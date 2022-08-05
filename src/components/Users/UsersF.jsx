import * as axios from "axios";
import React, { useEffect } from "react";
import styles from './Users.module.css';

const Users = (props) => {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( (response) => {
            props.onSetUsers(response.data.items);
        });
    });


    const onSubscribeButtonClick = (evt) => {
        const value = evt.currentTarget.id;
        props.onFollowButtonClick(parseInt(value));
    }

    return <div> {
        props.users?.map(u => <div key={u.id} className={styles.userElement}>
            <img src={u.photos.small != null ? u.photos.small : 'https://bit.ly/3zu5DNw'} className={styles.userAvatar}/>
            {u.name}
            <button id={u.id} onClick={onSubscribeButtonClick}>{u.followed ? 'Unfollow' : 'Follow'}</button>
        </div>
        )}
    </div>
}

export default Users;