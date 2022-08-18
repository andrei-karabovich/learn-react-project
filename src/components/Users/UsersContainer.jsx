import Users from "./UsersF";
import {connect} from "react-redux";
import {inverseIsFollow, setUsers, setUsersTotalCount, setCurrentPage} from "../../redux/usersReducer";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onFollowButtonClick: (userId) => {
            dispatch(inverseIsFollow(userId))
        },
        onSetUsers: (users) => {
            dispatch(setUsers(users))
        }, 
        onSetTotalCount: (count) => {
            dispatch(setUsersTotalCount(count))
        },
        onSetCurrentPage: (pageNumber) => {
            dispatch(setCurrentPage(pageNumber));
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;