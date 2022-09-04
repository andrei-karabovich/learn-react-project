import Header from './Header';
import React, { useEffect } from "react";
import {connect} from "react-redux";
import { setAuthData } from '../../redux/authReducer';
import { serverAPI } from '../../api/api';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    username: state.auth.username
});

const HeaderContainer = (props) => {
    useEffect(() => {
        serverAPI.checkAuth().then( (response) => {
            if (response && response.resultCode === 0) {
                const {email, id, login} = {...response.data};
                props.setAuthData(id, login, email);
            }
        });
    }, []);

    return <Header {...props}/>;
}

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);