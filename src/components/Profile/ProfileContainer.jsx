import React, { useEffect } from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import { getProfile } from '../../redux/profileReducer';
import { useLocation, useNavigate, useParams } from 'react-router-dom';


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


const ProfileContainer = (props) => { 
    useEffect(() => {
        let userId = props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        props.getProfile(userId);
    }, [props.getProfile]);

    return <Profile {...props}/>
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }


export default connect(mapStateToProps, {getProfile}) (withRouter(ProfileContainer));