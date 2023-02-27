import React from "react";
import Header from "./Header";
import { ImageList, ImageListItem } from "@mui/material";
import homeCSS from "../assets/style/home.module.css";
import photo1 from "../assets/images/gallery/photo-1.jpg";
import photo2 from "../assets/images/gallery/photo-2.jpg";
import photo3 from "../assets/images/gallery/photo-3.jpg";
import photo4 from "../assets/images/gallery/photo-4.jpg";
import photo5 from "../assets/images/gallery/photo-5.jpg";
import photo6 from "../assets/images/gallery/photo-6.jpg";
import photo7 from "../assets/images/gallery/photo-7.jpg";
import photo8 from "../assets/images/gallery/photo-8.jpg";
import photo9 from "../assets/images/gallery/photo-9.jpg";

function Home() {
  const itemData = [
    {
      img: photo1,
      title: "sagol",
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
    <>
      <Header />
      <div className={homeCSS.container}>
        <ImageList className={homeCSS.cardlist} variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem
              className={homeCSS.card}
              key={item.img}
            >
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt=""
              />
              <div
              key={item.img}
                className={homeCSS.blur}
              > 
                <div className={homeCSS.buttondiv}>
                  <button className={homeCSS.button}>Delete</button>
                </div>
                <div className={homeCSS.label}>Loreen ipsum sit dolor amet</div>
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}

export default Home;
