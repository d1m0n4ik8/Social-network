import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
   return (
      <header className={s.header}>
         <NavLink to="/">
            <div className={s.logo}>
               <div>Dimality</div>
            </div>
         </NavLink>
      </header>
   )
}
export default Header
