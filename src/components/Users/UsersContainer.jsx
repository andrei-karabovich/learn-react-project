import Users from "./Users";
import React, { useEffect } from "react";
import {connect} from "react-redux";
import {inverseIsFollow, setUsers, setUsersTotalCount, setCurrentPage, toggleIsLoading} from "../../redux/usersReducer";
import Spinner from "../common/Spinner/Spinner";
import { serverAPI } from "../../api/api"

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
    toggleIsLoading
};

const UsersContainer = (props) => {
    useEffect(() => {
        props.toggleIsLoading(true);
        serverAPI.getUsers(props.pageSize, props.currentPage).then( (response) => {
            props.setUsers(response.items);
            props.setUsersTotalCount(90);
            props.toggleIsLoading(false);
        });
    }, []);


    const onSubscribeButtonClick = (evt) => {
        const value = evt.currentTarget.id;
        props.toggleIsLoading(true);
        if (checkIsFollowed(props.users, parseInt(value))) {
            serverAPI.followUser(value).then( (response) => {
                if(response && response.data.resultCode === 0) {
                    props.inverseIsFollow(parseInt(value));
                }
                props.toggleIsLoading(false);
            });
        } else {
            serverAPI.unfollowUser(value).then( (response) => {
                if(response && response.data.resultCode === 0) {
                    props.inverseIsFollow(parseInt(value));
                }
                props.toggleIsLoading(false);
            });
        }
    };

    const checkIsFollowed = (users, userId) => {
        return users.find(user => user.id === userId).followed;
    };

    const onPageNumberClick = (pageNumber) => {
        props.setCurrentPage(pageNumber);
        props.toggleIsLoading(true);
        serverAPI.getUsers(props.pageSize, pageNumber).then( (response) => {
            props.setUsers(response.items);
            props.toggleIsLoading(false);
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