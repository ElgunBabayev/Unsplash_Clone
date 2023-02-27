import React from 'react'
import detailCSS from '../assets/style/detail.module.css'
import like from '../assets/icons/like.svg'
import description from '../assets/icons/description.svg'
import date from '../assets/icons/date.svg'


function Detail() {
  return (
    <>
        <div className={detailCSS.container}>
          <div className={detailCSS.header}>
            <div className={detailCSS.authorInfo}>
              <img/>
              <span>Author</span>
            </div>
            <div><button><img src={like}/></button></div>
          </div>
          <div className={detailCSS.box}>
            <img/>
            <p><img src= {description}/>Description text</p>
            <span> <img src={date}/>Added date</span>
            

          </div>

        </div>
    </>
  )
}

export default Detail
