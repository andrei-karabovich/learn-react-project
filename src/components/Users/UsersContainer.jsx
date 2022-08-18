import Users from "./Users";
import React, { useEffect } from "react";
import * as axios from "axios";
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

const UsersContainer = (props) => {
    useEffect(() => {
        const endPoint = `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${props.currentPage}`;
        axios.get(endPoint).then( (response) => {
            props.onSetUsers(response.data.items);
            props.onSetTotalCount(90);
        });
    }, []);


    const onSubscribeButtonClick = (evt) => {
        const value = evt.currentTarget.id;
        props.onFollowButtonClick(parseInt(value));
    }

    const onPageNumberClick = (pageNumber) => {
        props.onSetCurrentPage(pageNumber);
        const endPoint = `https://social-network.samuraijs.com/api/1.0/users?count=${props.pageSize}&page=${pageNumber}`;
        axios.get(endPoint).then( (response) => {
            props.onSetUsers(response.data.items);
        });
    }

    return <Users users={props.users} currentPage={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageNumberClick={onPageNumberClick} onSubscribeButtonClick={onSubscribeButtonClick}/>
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)