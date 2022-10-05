import React,{ useEffect } from 'react';
import ProfileStatus from './ProfileStatus';
import {connect} from 'react-redux';
import { getStatus, updateStatus } from '../../../../redux/profileReducer';
import { compose } from 'redux';
import withRouter from '../../../../hoc/withRouter';


const mapStateToProps = (state) => ({
    status: state.profilePage.status
});

const ProfileStatusContainer = (props) => {
    useEffect(() => {
        let userId = props.router.params.userId;
        if (!userId) {
            userId = 25743;
        }
        props.getStatus(userId);
    }, [props.getStatus]);

    return <ProfileStatus {...props}/>
}

export default compose(
    withRouter,
    connect(mapStateToProps, {getStatus, updateStatus})
)(ProfileStatusContainer);