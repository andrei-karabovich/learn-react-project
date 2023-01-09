import Feed from './Feed';
import { addPostActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostCreate: (text) => {
            const action = addPostActionCreator(text);
            dispatch(action);
        }
    }
}

const FeedContainer = connect(mapStateToProps,mapDispatchToProps)(Feed);

export default FeedContainer;



