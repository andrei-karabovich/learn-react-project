import React from 'react';
import styles from './Feed.module.css';
import Post from './Post';
import { addPostActionCreator, updateTextActionCreator } from '../../../redux/profileReducer';

const Feed = (props) => {
    let postElements = props.data.posts.map((post) => <Post message={post.text} likes={post.likesCount}/>);
    let postInput = React.useRef();

    const createPost = () => {
        const action = addPostActionCreator();
        props.dispatch(action);
    }

    const onPostInput = () => {
        const action = updateTextActionCreator(postInput.current.value);
        props.dispatch(action);
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



