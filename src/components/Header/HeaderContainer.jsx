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
    return <Header {...props }/>;
}

export default connect(mapStateToProps, { logout })(HeaderContainer);