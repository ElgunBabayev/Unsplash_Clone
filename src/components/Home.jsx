import React from "react";
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
import FavoriteIcon from "@mui/icons-material/Favorite";

function Home() {
  const itemData = [
    {
      id: 1,
      img: photo1,
      title: "sagol",
    },
    {
      id: 2,
      img: photo2,
      title: "salam",
    },
    {
      id: 3,
      img: photo3,
      title: "salam",
    },
    {
      id: 4,
      img: photo4,
      title: "salam",
    },
    {
      id: 5,
      img: photo5,
      title: "salam",
    },
    {
      id: 6,
      img: photo6,
      title: "salam",
    },
    {
      id: 7,
      img: photo7,
      title: "salam",
    },
    {
      id: 8,
      img: photo8,
      title: "salam",
    },
    {
      id: 9,
      img: photo9,
      title: "salam",
    },
  ];
  // const [like, setlike] = useState(false)

  // const handleClick = () => {
  //   setlike(!like);
  // };

  return (
    <>
      <div className={homeCSS.container}>
        <ImageList
          className={homeCSS.cardlist}
          variant="masonry"
          cols={3}
          gap={8}
        >
          {itemData.map((item,i) => (
            <ImageListItem className={homeCSS.card} key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt=""
              />
              <div key={item.img} className={homeCSS.blur}>
                <div className={homeCSS.buttondiv}>
                  <button className={homeCSS.likebtn} >
                      <FavoriteIcon color="error" />
                      {/* <FavoriteIcon color="action" /> */}
                  </button>
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
