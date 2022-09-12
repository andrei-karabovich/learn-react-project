import Header from './Header';
import React, { useEffect } from "react";
import { useSelector , useDispatch } from 'react-redux'
import { setAuthData } from '../../redux/authReducer';
import { serverAPI } from '../../api/api';

// const mapStateToProps = (state) => ({
//     isAuth: state.auth.isAuth,
//     username: state.auth.username
// });

const HeaderContainer = (props) => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const username = useSelector((state) => state.auth.username);
    const dispatch = useDispatch();

    useEffect(() => {
        serverAPI.checkAuth().then( (response) => {
            if (response && response.resultCode === 0) {
                const {email, id, login} = {...response.data};
                dispatch(setAuthData(id, login, email));
            }
        });
    }, []);

    const headerProps = {
        isAuth, username
    }

    return <Header {...headerProps }/>;
}

export default HeaderContainer;