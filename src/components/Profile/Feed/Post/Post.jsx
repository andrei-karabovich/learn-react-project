import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.postAuthorblock}>
                <img className={styles.avatar} src='https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png'></img>
                <span>Post Author</span>
            </div>

            <div className={styles.postDetailsBlock}>
                <div>{props.message}</div>
                <div className={styles.likes}>
                    {props.likes} &#x2665;
                </div>
            </div>
        </div>
    );
}

export default Post;