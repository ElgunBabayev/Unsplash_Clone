import React, { useState } from 'react'
import header from '../assets/style/header.module.css'
import logo from '../assets/images/logo/Logo_of_Unsplash.svg'
import SearchIcon from '@mui/icons-material/Search';
import loginPerson from '../assets/images/persons/person-3.avif'
import { Link } from 'react-router-dom';


function Header() {
   const [open, setOpen] = useState(false)

  return (<>
  <div className={header.container}>
   <Link to='/'><div className={header.logo}><img src={logo} alt=''/></div></Link> 
    <div className={header.input}><button className={header.search_button}><SearchIcon color="action" fontSize='medium'/></button><input className={header.search_input} placeholder='Search'/></div>
     <div className={header.loggedpers} onClick ={() =>setOpen(!open)}>
      <span>Babayev Elgun</span>
      <img src={loginPerson} alt='' className={header.logPerson}/>
      {open && <div className={header.options}>
       <Link to='/profile' style={{textDecoration: 'none'}}><span className={header.myProfile}>My profile</span></Link>
        <Link to='/login' style={{textDecoration: 'none'}}><span className={header.logout}>Log out</span></Link>
      </div>}
    </div>
    {/* <Link to='/login'><button className={header.login}>Login</button></Link> */}
    </div>
  </>
    
  )
}

export default Header
