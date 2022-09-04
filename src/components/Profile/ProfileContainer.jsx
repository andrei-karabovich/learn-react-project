import React, { useEffect } from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import { setProfile } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


const ProfileContainer = (props) => { 
    debugger;
    useEffect(() => {
        let userId = props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        const endPoint = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`;
        axios.get(endPoint).then( (response) => {
            props.setProfile(response.data);
        });
    }, [props.setProfile]);

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


export default connect(mapStateToProps, {setProfile}) (withRouter(ProfileContainer));