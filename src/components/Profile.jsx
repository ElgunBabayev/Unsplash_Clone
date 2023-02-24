import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import profileCSS from "../assets/style/profile.module.css";
import photo1 from "../assets/images/gallery/photo-1.jpg";
import photo2 from "../assets/images/gallery/photo-2.jpg";
import photo3 from "../assets/images/gallery/photo-3.jpg";
import photo4 from "../assets/images/gallery/photo-4.jpg";
import photo5 from "../assets/images/gallery/photo-5.jpg";
import photo6 from "../assets/images/gallery/photo-6.jpg";
import photo7 from "../assets/images/gallery/photo-7.jpg";
import photo8 from "../assets/images/gallery/photo-8.jpg";
import photo9 from "../assets/images/gallery/photo-9.jpg";

function Profile() {
  const itemData = [
    {
      img: photo1,
      title: "salam",
    },
    {
      img: photo2,
      title: "salam",
    },
    {
      img: photo3,
      title: "salam",
    },
    {
      img: photo4,
      title: "salam",
    },
    {
      img: photo5,
      title: "salam",
    },
    {
      img: photo6,
      title: "salam",
    },
    {
      img: photo7,
      title: "salam",
    },
    {
      img: photo8,
      title: "salam",
    },
    {
      img: photo9,
      title: "salam",
    },
  ];
  return (
    <div className={profileCSS.container}>
        <div className={profileCSS.salam}>
        <ImageList variant="masonry" cols={3} gap={12}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
            //   loading="lazy"
            />
            <div className={profileCSS.absolute}><p>Salam</p></div>
          </ImageListItem>
        ))}
      </ImageList>
        </div>
      
    </div>
  );
}

export default Profile;
