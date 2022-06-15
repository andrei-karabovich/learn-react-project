import React from 'react';
import Feed from './Feed';
import { addPostActionCreator, updateTextActionCreator } from '../../../redux/profileReducer';

const FeedContainer = (props) => {
    const state = props.store.getState().profilePage;

    const createPost = () => {
        const action = addPostActionCreator();
        props.store.dispatch(action);
    }

    const updatePostText = (text) => {
        const action = updateTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Feed posts={state.posts} newPostText={state.newPostText} onPostCreate={createPost} onNewPostTextUpdate={updatePostText}/>
    );
}

export default FeedContainer;



