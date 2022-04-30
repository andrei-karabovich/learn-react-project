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

            <Post message='Test message 1' likes='7'/>
            <Post message='Hello this is props test' likes='22'/>
            <Post message='This is the first post' likes='90'/>
        </div>
    );
}

export default Feed;



