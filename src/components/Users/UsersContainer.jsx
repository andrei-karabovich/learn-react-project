import Users from './Users';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {setCurrentPage, followUser, unfollowUser, requestUsers} from '../../redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';
import { getCurrentPage, getFollowingInProgress, getIsLoading, getPageSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state)
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
        const value = parseInt(evt.currentTarget.id);
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

    return <>
        {props.isLoading && <Spinner/>}
        <Users users={props.users}
               currentPage={props.currentPage}
               totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               onPageNumberClick={onPageNumberClick}
               onSubscribeButtonClick={onSubscribeButtonClick}
               followingInProgress={props.followingInProgress}/>
    </>
}

export default connect(mapStateToProps, mapDispatchToPropsObject)(UsersContainer)