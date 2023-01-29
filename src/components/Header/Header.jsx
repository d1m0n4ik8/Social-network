import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

import HeaderDropdown from './HeaderDropdown/HeaderDropdown'
import { Divider } from 'antd'

const Header = (props) => {
   return (
      <header className={s.header}>
         <div className={s.logo}>
            <NavLink to="/">
               <div>Social network</div>
            </NavLink>
            {props.isAuth ? (
               <HeaderDropdown
                  theme={props.theme}
                  setTheme={props.setTheme}
                  login={props.login}
                  logout={props.logout}
                  saveProfileInfo={props.saveProfileInfo}
                  profile={props.profile}
               />
            ) : (
               <NavLink to="/login">
                  <div className={s.auth}>Вхід</div>
               </NavLink>
            )}
         </div>
         <Divider className="divider" type="horizontal" />
      </header>
   )
}
export default Header
