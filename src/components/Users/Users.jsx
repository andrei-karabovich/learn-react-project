import React from "react";
import styles from './Users.module.css';

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    
    for (let i = 1; i<= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => <span key={p} className={p != props.currentPage ? styles.pageNumber : styles.pageNumberSelected} 
                             onClick={ (e) => {props.onPageNumberClick(p)} }> {p}</span>)}
        </div>
        <div> {
            props.users?.map(u => <div key={u.id} className={styles.userElement}>
                <img src={u.photos.small != null ? u.photos.small : 'https://bit.ly/3zu5DNw'} className={styles.userAvatar}/>
                {u.name}
                <button id={u.id} onClick={props.onSubscribeButtonClick}>{u.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            )}
        </div>
    </div>
}

export default Users;