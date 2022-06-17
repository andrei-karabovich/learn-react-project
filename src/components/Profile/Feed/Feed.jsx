import React from 'react';
import styles from './Feed.module.css';
import Post from './Post';

const Feed = (props) => {
    let postElements = props.posts.map((post) => <Post message={post.text} likes={post.likesCount} key={post.postId}/>);
    let postInput = React.useRef();

    const createPost = () => {
        props.onPostCreate();
    }

    const updateText = () => {
        props.onNewPostTextUpdate(postInput.current.value);
    }

    return (
        <div className={styles.feedBlock}>
            <div className={styles.createPostBlock}>
                <textarea ref={postInput} value={props.newPostText} onChange={updateText} placeholder='New post' className={styles.newPostInput}/>
                <p className={styles.buttonBlock}>
                    <button onClick={createPost} className={styles.submitButton}>Add Post</button>
                </p>
            </div>
            <div className={styles.feed}>
                {postElements}
            </div>
        </div>
    );
}

export default Feed;



