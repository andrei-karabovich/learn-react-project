import Header from './Header';
import React, { useEffect } from "react";
import axios from 'axios';
import {connect} from "react-redux";
import { setAuthData } from '../../redux/authReducer';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    username: state.auth.username
});

const HeaderContainer = (props) => {
    debugger;
    useEffect(() => {
        const endPoint = 'https://social-network.samuraijs.com/api/1.0/auth/me';
        axios.get(endPoint, {withCredentials: true}).then( (response) => {
            if (response && response.data.resultCode === 0) {
                const {email, id, login} = {...response.data.data};
                props.setAuthData(id, login, email);
            }
        });
    }, []);

    return <Header {...props}/>;
}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);