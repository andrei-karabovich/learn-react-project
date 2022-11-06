import React from 'react';
import styles from './Feed.module.css';
import Post from './Post';
import { useForm } from 'react-hook-form';

const Feed = (props) => {
    const { register, handleSubmit, reset } = useForm();
    let postElements = props.posts.map((post) => <Post message={post.text} likes={post.likesCount} key={post.postId}/>);

    const onSubmit = (data) => {
        props.onPostCreate(data.postText);
        reset();
    }

    return (
        <div className={styles.feedBlock}>
            <div className={styles.createPostBlock}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type={'textarea'} placeholder={'New post'} className={styles.newPostInput}  {...register('postText', { required: true, maxLength: 20 })}/>
                    <p className={styles.buttonBlock}>
                        <input type={'submit'} value={'Add post'} className={styles.submitButton}></input>
                    </p>
                </form>
            </div>
            <div className={styles.feed}>
                {postElements}
            </div>
        </div>
    );
}

export default Feed;



