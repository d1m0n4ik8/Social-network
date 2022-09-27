import React from 'react'
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
   return (
      <nav className={s.nav}>
         <ul className={s.nav_links}>
            <li>
               <NavLink to="/Profile" className={({ isActive }) => (isActive ? s.active : '')}>
                  Profile
               </NavLink>
            </li>
            <li>
               <NavLink to="/Messages" className={({ isActive }) => (isActive ? s.active : '')}>
                  Messages
               </NavLink>
            </li>
            <li>
               <NavLink to="/Users" className={({ isActive }) => (isActive ? s.active : '')}>
                  Users
               </NavLink>
            </li>
            <li>
               <NavLink to="/News" className={({ isActive }) => (isActive ? s.active : '')}>
                  News
               </NavLink>
            </li>
            <li>
               <NavLink to="/Music" className={({ isActive }) => (isActive ? s.active : '')}>
                  Music
               </NavLink>
            </li>
            <li>
               <NavLink to="/Settings" className={({ isActive }) => (isActive ? s.active : '')}>
                  Settings
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}
export default Sidebar
