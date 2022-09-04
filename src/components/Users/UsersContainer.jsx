import Users from "./Users";
import React, { useEffect } from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import {inverseIsFollow, setUsers, setUsersTotalCount, setCurrentPage, toggleIsLoading} from "../../redux/usersReducer";
import Spinner from "../common/Spinner/Spinner";

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
        const endPoint = `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`;
        axios.get(endPoint, {withCredentials: true}).then( (response) => {
            props.setUsers(response.data.items);
            props.setUsersTotalCount(90);
            props.toggleIsLoading(false);
        });
    }, []);


    const onSubscribeButtonClick = (evt) => {
        const value = evt.currentTarget.id;
        props.toggleIsLoading(true);
        const endPoint = `https://social-network.samuraijs.com/api/1.0/follow/${value}`;
        if (checkIsFollowed(props.users, parseInt(value))) {
            axios.delete(endPoint, {withCredentials: true, headers: {'API-KEY': 'ba9b1dee-b3f7-496b-b2e2-9c9d07e8dd6a'}}).then( (response) => {
                if(response && response.data.resultCode === 0) {
                    props.inverseIsFollow(parseInt(value));
                } else {
                    alert('Something went wrong');
                }
                props.toggleIsLoading(false);
            });
        } else {
            axios.post(endPoint, {}, {withCredentials: true, headers: {'API-KEY': 'ba9b1dee-b3f7-496b-b2e2-9c9d07e8dd6a'}}).then( (response) => {
                if(response && response.data.resultCode === 0) {
                    props.inverseIsFollow(parseInt(value));
                } else {
                    alert('Something went wrong');
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
        const endPoint = `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${pageNumber}`;
        axios.get(endPoint, {withCredentials: true}).then( (response) => {
            props.setUsers(response.data.items);
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