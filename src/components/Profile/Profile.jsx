import React from 'react';
import Feed from "./Feed/Feed";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={styles.content}>
            <img src='https://media.istockphoto.com/photos/extra-wide-evening-panorama-of-business-miami-skyline-picture-id1058108750?b=1&k=20&m=1058108750&s=170667a&w=0&h=YzDzPZd4CXZe1-G_cjL2WIylKsvK2JjgS9MGdQ2uy-Q='></img>
            <div>Description</div>
            <Feed/>
      </div>
    );
}

export default Profile;