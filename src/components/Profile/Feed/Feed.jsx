import React from 'react';
import styles from './Feed.module.css';
import Post from './Post';
import { useForm } from 'react-hook-form';
import { InputText } from '../../common/InputControls/InputControls';

const Feed = ({posts, onPostCreate}) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    let postElements = posts.map((post) => <Post message={post.text} likes={post.likesCount} key={post.postId}/>);

    const onSubmit = (data) => {
        onPostCreate(data.postText);
        reset();
    }

    return (
        <div className={styles.feedBlock}>
            <div className={styles.createPostBlock}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText type={'textarea'} placeholder={'New post'} className={styles.newPostInput} register={register} name={'postText'} validationSchema={{ required: true, maxLength: 20 }} errors={errors.postText} />
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



