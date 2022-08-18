import * as axios from "axios";
import React, { useEffect } from "react";
import styles from './Users.module.css';

const Users = (props) => {
    useEffect(() => {
        const endPoint = `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`;
        axios.get(endPoint).then( (response) => {
            props.onSetUsers(response.data.items);
            props.onSetTotalCount(90);
        });
    }, []);


    const onSubscribeButtonClick = (evt) => {
        const value = evt.currentTarget.id;
        props.onFollowButtonClick(parseInt(value));
    }

    const onPageNumberClick = (pageNumber) => {
        props.onSetCurrentPage(pageNumber);
        const endPoint = `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${pageNumber}`;
        axios.get(endPoint).then( (response) => {
            props.onSetUsers(response.data.items);
        });
    }

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    
    for (let i = 1; i<= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => <span className={p != props.currentPage ? styles.pageNumber : styles.pageNumberSelected} 
                             onClick={ (e) => {onPageNumberClick(p)} }> {p}</span>)}
        </div>
        <div> {
            props.users?.map(u => <div key={u.id} className={styles.userElement}>
                <img src={u.photos.small != null ? u.photos.small : 'https://bit.ly/3zu5DNw'} className={styles.userAvatar}/>
                {u.name}
                <button id={u.id} onClick={onSubscribeButtonClick}>{u.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            )}
        </div>
    </div>
}

export default Users;