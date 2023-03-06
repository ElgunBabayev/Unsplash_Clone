import React from "react";
import profileCSS from '../assets/style/profile.module.css'
import profilPhoto from '../assets/images/persons/person-1.avif'
import Home from './Home'


function Profile() {
  
  return (
    <div className={profileCSS.container}>
      <div className={profileCSS.top}>
        <div className={profileCSS.profilePhoto}>
          <img src={profilPhoto} alt="" />
        </div>
        <div className={profileCSS.aboutAuth}>
          <span className={profileCSS.username}>User Name</span>
          <p className={profileCSS.userdescript}>Download free, beautiful high-quality photos curated by User Name</p>
        </div>
      </div>
      <div className={profileCSS.down}>
        <Home/>
      </div>
       
    </div>
  );
}

export default Profile;
