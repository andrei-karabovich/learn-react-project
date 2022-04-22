import React from 'react';
import styles from "./Feed.module.css";
import Post from './Post/Post';

const Feed = () => {
    return (
        <div className={styles.feed}>
            <div>New Post</div>
            <textarea id="postInput"/>
            <button>Add Post</button>
            Posts

            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default Feed;



