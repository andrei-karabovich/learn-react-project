import Header from './Header';
import React from 'react';
import {logout } from '../../redux/authReducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        username: state.auth.username
     };
};
const HeaderContainer = (props) => {

    const headerProps = {
        isAuth: props.isAuth,
        username: props.username,
        logout: props.logout
    }

    return <Header {...headerProps }/>;
}

export default connect(mapStateToProps, { logout})(HeaderContainer);