import * as axios from "axios";
import React from "react";
import styles from './Users.module.css';

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( (response) => {
            this.props.onSetUsers(response.data.items);
        });
    }

    onSubscribeButtonClick = (evt) => {
        const value = evt.currentTarget.id;
        this.props.onFollowButtonClick(parseInt(value));
    }

    render () {
        return <div> {
            this.props.users?.map(u => <div key={u.id} className={styles.userElement}>
                <img src={u.photos.small != null ? u.photos.small : 'https://bit.ly/3zu5DNw'} className={styles.userAvatar}/>
                {u.name}
                <button id={u.id} onClick={this.onSubscribeButtonClick}>{u.followed ? 'Unfollow' : 'Follow'}</button>
            </div>
            )}
        </div>
    }
}

export default Users;