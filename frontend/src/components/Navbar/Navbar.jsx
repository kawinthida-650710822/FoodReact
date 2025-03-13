import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {

    const [menu,setMenu] = useState('menu');

  return (
    <div className='navbar'>
      <img src = {assets.logo} alt = ' ' className = 'logo'  />
      <ul className = 'navbar-menu'>
        <li onClick = {()=>setMenu('home')} className = {menu==='home'?'active':''}>home</li>
        <li onClick = {()=>setMenu('menu')} className = {menu==='menu'?'active':''}>menu</li>
      </ul>
      <div className = 'navbar-right'>
        <div className = 'navbar-basket' >
            <img src = {assets.basket} alt = ' ' className = 'basket' />
            <div className = 'dot'></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
