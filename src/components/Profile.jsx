import React from "react";
import profileCSS from '../assets/style/profile.module.css'
import profilPhoto from '../assets/images/persons/person-1.avif'
import Favorite from "@mui/icons-material/Favorite";
import PhotoIcon from '@mui/icons-material/Photo';
import { useState } from "react";
import Home from './Home'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


function Profile() {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

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
      <div className={profileCSS.tabscontainer}>
        <div className={profileCSS.tabs}>
        <button onClick={() => handleTabClick(1)} className={profileCSS.activeTab}><PhotoIcon fontSize="small"/>Posts<span>10</span> </button>
        <button onClick={() => handleTabClick(2)} className={profileCSS.activeTab}><Favorite fontSize="small"/>Likes<span>3</span> </button>
        </div>
        <button className={profileCSS.addphoto}><AddPhotoAlternateIcon fontSize="small"/>Add photo</button>
      </div>
      
      <hr className={profileCSS.line}/>
      <div className={profileCSS.tab}>
        {activeTab === 1 && <div><Home/></div>}
        {activeTab === 2 && <div>Sagol</div> }
      </div>
      
       
    </div>
  );
}

export default Profile;
