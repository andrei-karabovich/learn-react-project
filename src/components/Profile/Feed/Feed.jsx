import React from 'react';
import styles from './Feed.module.css';
import Post from './Post';

const Feed = (props) => {
    let postElements = props.data.posts.map((post) => <Post message={post.text} likes={post.likesCount}/>);
    let postInput = React.createRef();

    const createPost = () => {
        props.addPost(props.data.newPostText);
    }

    const onPostInput = () => {
        const value = postInput.current.value;
        props.updateNewPostText(value);
    }

    return (
        <div className={styles.feed}>
            <div>New Post</div>
            <textarea ref={postInput} value={props.data.newPostText} onChange={onPostInput}/>
            <button onClick={createPost}>Add Post</button>
            Posts
            {postElements}
        </div>
    );
}

export default Feed;



