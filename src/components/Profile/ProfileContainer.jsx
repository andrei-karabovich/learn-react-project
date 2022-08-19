import React, { useEffect } from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import { setProfile } from "../../redux/profileReducer";


const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


const ProfileContainer = (props) => {
    useEffect(() => {
        const endPoint = `https://social-network.samuraijs.com/api/1.0/profile/5`;
        axios.get(endPoint).then( (response) => {
            props.setProfile(response.data);
        });
    }, []);

    return <Profile {... props}/>
}

export default connect(mapStateToProps, {setProfile}) (ProfileContainer);