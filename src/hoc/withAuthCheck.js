import React,  { useEffect }  from 'react';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthReducer = (Component) => {
    const ContainerComponent = (props) => {
        let navigate = useNavigate();

        useEffect(() => {
            if (!props.isAuth){
                return navigate("/login")
            }
        },[]);

        return <Component {...props}/>
    }

    return connect(mapStateToProps, ()=>{} )(ContainerComponent);
}

export default withAuthReducer;