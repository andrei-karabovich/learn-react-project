import React from 'react';
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <img className={styles.avatar} src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"></img>
            <div>{props.message}</div>
            <div>{props.likes}</div>
        </div>
    );
}

export default Post;