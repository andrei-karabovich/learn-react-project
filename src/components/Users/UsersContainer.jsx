import Users from './Users';
import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {inverseIsFollow, setUsers, setUsersTotalCount, setCurrentPage, setIsLoading} from '../../redux/usersReducer';
import Spinner from '../common/Spinner/Spinner';
import { serverAPI } from '../../api/api'

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isLoading: state.usersPage.isLoading
    }
};

let mapDispatchToPropsObject = {
    inverseIsFollow,
    setUsers,
    setUsersTotalCount,
    setCurrentPage,
    setIsLoading
};

const UsersContainer = (props) => {
    useEffect(() => {
        props.setIsLoading(true);
        serverAPI.getUsers(props.pageSize, props.currentPage).then( (response) => {
            props.setUsers(response.items);
            props.setUsersTotalCount(90);
            props.setIsLoading(false);
        });
    }, []);


    const onSubscribeButtonClick = (evt) => {
        const value = evt.currentTarget.id;
        props.setIsLoading(true);
        if (checkIsFollowed(props.users, parseInt(value))) {
            serverAPI.unfollowUser(value).then( (response) => {
                if(response && response.resultCode === 0) {
                    props.inverseIsFollow(parseInt(value));
                }
                props.setIsLoading(false);
            });
        } else {
            serverAPI.followUser(value).then( (response) => {
                if(response && response.resultCode === 0) {
                    props.inverseIsFollow(parseInt(value));
                }
                props.setIsLoading(false);
            });
        }
    };

    const checkIsFollowed = (users, userId) => {
        return users.find(user => user.id === userId).followed;
    };

    const onPageNumberClick = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.setIsLoading(true);
        serverAPI.getUsers(props.pageSize, pageNumber).then( (response) => {
            props.setUsers(response.items);
            props.setIsLoading(false);
        }); 
    }

    return <>
        {props.isLoading && <Spinner/>}
        <Users users={props.users}
               currentPage={props.currentPage}
               totalUsersCount={props.totalUsersCount}
               pageSize={props.pageSize}
               onPageNumberClick={onPageNumberClick}
               onSubscribeButtonClick={onSubscribeButtonClick}/>
    </>
}

export default connect(mapStateToProps, mapDispatchToPropsObject)(UsersContainer)