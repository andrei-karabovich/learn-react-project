import Feed from './Feed';
import { addPostActionCreator, updateTextActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostCreate: () => {
            const action = addPostActionCreator();
            dispatch(action);
        }, 
        onNewPostTextUpdate: (text) => { 
            const action = updateTextActionCreator(text);
            dispatch(action);
        }
    }
}

const FeedContainer = connect(mapStateToProps,mapDispatchToProps)(Feed);

export default FeedContainer;



