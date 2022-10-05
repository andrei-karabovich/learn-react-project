import React, { useEffect } from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { getProfile } from '../../redux/profileReducer';
import { compose } from 'redux';
import withRouter from '../../hoc/withRouter';
const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

const ProfileContainer = (props) => { 

    useEffect(() => {
        let userId = props.router.params.userId;
        if (!userId) {
            userId = 25743;
        }
        props.getProfile(userId);
    }, [props.getProfile]);

    return <Profile {...props }/>
}


export default compose (
  withRouter,
  connect(mapStateToProps, {getProfile})
)(ProfileContainer);

