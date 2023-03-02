import React, { useState } from "react";
import detailCSS from "../assets/style/detail.module.css";
import person1 from "../assets/images/persons/person-1.avif";
import photo2 from "../assets/images/persons/person-2.avif";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


function Detail() {
 
  return (
    <>
      <div className={detailCSS.container}>
        <div className={detailCSS.layer}>
          <div className={detailCSS.header}>
            <div className={detailCSS.authorInfo}>
              <div className={detailCSS.person}>
                <img src={person1} />
              </div>
              <span className={detailCSS.authorName}>Efimiya Abramova</span>
            </div>
            <div className={detailCSS.likediv}>
              <button className={detailCSS.likeButton}>
                <FavoriteIcon color="action"/>
                18
              </button>
            </div>
          </div>
          <div className={detailCSS.box}>
            <div className={detailCSS.mainphoto}>
              <img src={photo2} />
            </div>
            <div className={detailCSS.aboutPhoto}>
            <p>
              <DescriptionOutlinedIcon color="action"/>
              Description text
            </p>
            <span>
              <CalendarMonthOutlinedIcon color="action"/>
              Published on February 18, 2023
            </span>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
