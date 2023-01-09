import Users from './Users';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {setCurrentPage, followUser, unfollowUser, requestUsers} from '../../redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';
import { selectCurrentPage, selectFollowingInProgress, selectIsLoading, selectPageSize, selectTotalUsersCount, selectUsers } from '../../redux/users-selectors';
import Paginator from '../common/Paginator/Paginator';

let mapStateToProps = (state) => {
    return {
        users: selectUsers(state),
        currentPage: selectCurrentPage(state),
        pageSize: selectPageSize(state),
        totalUsersCount: selectTotalUsersCount(state),
        isLoading: selectIsLoading(state),
        followingInProgress: selectFollowingInProgress(state)
    }
};

let mapDispatchToPropsObject = {
    setCurrentPage,
    followUser,
    unfollowUser,
    requestUsers
};

const UsersContainer = (props) => {
    useEffect(() => {
        props.requestUsers(props.pageSize, props.currentPage);
    }, []);


    const onSubscribeButtonClick = (evt) => {
        const value = parseInt(evt.currentTarselect.id);
        if (checkIsFollowed(props.users, value)) {
            props.unfollowUser(value);
        } else {
            props.followUser(value);
        }   
    };

    const checkIsFollowed = (users, userId) => {
        return users.find(user => user.id === userId).followed;
    };

    const onPageNumberClick = (pageNumber) => {
        props.requestUsers(props.pageSize, pageNumber);
    }

    return (<>
        {props.isLoading && <Spinner/>}
        <Paginator totalAmount={props.totalUsersCount} pageSize={props.pageSize} onPageNumberClick={onPageNumberClick} currentPage={props.currentPage}/>
        <Users users={props.users}
               onSubscribeButtonClick={onSubscribeButtonClick}
               followingInProgress={props.followingInProgress}/>
    </>)
}

export default connect(mapStateToProps, mapDispatchToPropsObject)(UsersContainer)