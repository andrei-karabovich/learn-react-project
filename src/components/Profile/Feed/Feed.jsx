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
        <div className={styles.feed}>
            <div>New Post</div>
            <textarea ref={postInput} value={props.newPostText} onChange={updateText}/>
            <button onClick={createPost}>Add Post</button>
            Posts
            {postElements}
        </div>
    );
}

export default Feed;



