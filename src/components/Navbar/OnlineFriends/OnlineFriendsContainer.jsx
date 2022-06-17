import { connect } from 'react-redux';
import OnlineFriends from './OnlineFriends';

const mapStateToProps = (state) => {
    return { 
        friends: state.navigationBar.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {};
} 

const OnlineFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(OnlineFriends);

export default OnlineFriendsContainer;