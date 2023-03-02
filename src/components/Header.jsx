import React, { useState } from 'react'
import header from '../assets/style/header.module.css'
import logo from '../assets/images/logo/Logo_of_Unsplash.svg'
import SearchIcon from '@mui/icons-material/Search';
import Profile from './Profile';


function Header() {

  const [scroll, setscroll] = useState(false)

  function scrolled(){
    setscroll(true)
  }
  return (<>
  <div  className={header.container} onScroll={scrolled} style= {{position:'fixed' }}>
    <div className={header.logo}><img src={logo} alt=''/></div>
   
    <div className={header.input}><button className={header.search_button}><SearchIcon color="action" fontSize='medium'/></button><input className={header.search_input} placeholder='Search'/></div>
    <button className={header.login}>Login</button>
    
    </div>
    <Profile/>
  </>
    
  )
}

export default Header
