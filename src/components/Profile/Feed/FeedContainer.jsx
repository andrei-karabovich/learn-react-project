import React from 'react';
import Feed from './Feed';
import { addPostActionCreator, updateTextActionCreator } from '../../../redux/profileReducer';
import StoreContext from '../../../storeContext';

const FeedContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().profilePage;

                    const createPost = () => {
                        const action = addPostActionCreator();
                        store.dispatch(action);
                    }

                    const updatePostText = (text) => {
                        const action = updateTextActionCreator(text);
                        store.dispatch(action);
                    }

                    return (
                        <Feed posts={state.posts} newPostText={state.newPostText} onPostCreate={createPost} onNewPostTextUpdate={updatePostText} />
                    );
                }
            }

        </StoreContext.Consumer>
    );
}

export default FeedContainer;



