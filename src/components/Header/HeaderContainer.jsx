import Header from './Header';
import React, { useEffect } from 'react';
import { getAuthData } from '../../redux/authReducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        username: state.auth.username
     };
};
const HeaderContainer = (props) => {

    useEffect(() => {   
        props.getAuthData();
    }, []);

    const headerProps = {
        isAuth: props.isAuth,
        username: props.username
    }

    return <Header {...headerProps }/>;
}

export default connect(mapStateToProps, {getAuthData})(HeaderContainer);