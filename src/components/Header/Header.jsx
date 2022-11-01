import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
const Header = (props) => {
   return (
      <header className={s.header}>
         <div className={s.logo}>
            <NavLink to="/">
               <div>Dimality</div>
            </NavLink>
            {props.isAuth ? (
               props.login
            ) : (
               <NavLink to="/login">
                  <div className={s.auth}>Вхід</div>
               </NavLink>
            )}
         </div>
      </header>
   )
}
export default Header
