import React, { useEffect, useRef } from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { getProfile, updatePhoto, updateProfile } from '../../redux/profileReducer';
import { compose } from 'redux';
import withRouter from '../../hoc/withRouter';

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    authorizedUserId: state.auth.id,
    isOwner: state?.profilePage?.profile?.userId === state?.auth?.id
});

  const usePrevious = function(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }


const ProfileContainer = (props) => { 
    const prevProfile = usePrevious(props.profile);

    useEffect(() => {
        let userId = props.router.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
        }
        if (!props.profile || prevProfile?.photos?.large !== props?.profile?.photos?.large) {
            props.getProfile(userId);
        }
    }, [props.getProfile, props.profile]);

    return <Profile {...props }/>
}



export default compose (
  withRouter,
  connect(mapStateToProps, {getProfile, updatePhoto, updateProfile})
)(ProfileContainer);

