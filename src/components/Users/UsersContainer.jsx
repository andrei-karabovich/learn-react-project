import Users from "./UsersF";
import {connect} from "react-redux";
import {inverseIsFollow, setUsers} from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onFollowButtonClick: (userId) => {
            dispatch(inverseIsFollow(userId))
        },
        onSetUsers: (users) => {
            dispatch(setUsers(users))
        } 
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;