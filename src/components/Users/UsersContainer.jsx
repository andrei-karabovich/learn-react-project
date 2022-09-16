import Users from './Users';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {setCurrentPage, followUser, unfollowUser, getUsers} from '../../redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress,
    }
};

let mapDispatchToPropsObject = {
    setCurrentPage,
    followUser,
    unfollowUser,
    getUsers
};

const UsersContainer = (props) => {
    useEffect(() => {
        props.getUsers(props.pageSize, props.currentPage);
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
        props.getUsers(props.pageSize, pageNumber);
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