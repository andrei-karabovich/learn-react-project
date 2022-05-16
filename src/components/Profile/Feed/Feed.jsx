import React from 'react';
import styles from './Feed.module.css';
import Post from './Post/Post';

const Feed = (props) => {
    let postElements = props.posts.map((post) => <Post message={post.text} likes={post.likesCount}/>);
    let postInput = React.createRef();

    const createPost = () => {
        const value = postInput.current.value;
        alert(value);
    }

    return (
        <div className={styles.feed}>
            <div>New Post</div>
            <textarea ref={postInput}/>
            <button onClick={createPost}>Add Post</button>
            Posts
            {postElements}
        </div>
    );
}

export default Feed;



