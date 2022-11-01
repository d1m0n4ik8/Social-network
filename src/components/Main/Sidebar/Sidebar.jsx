import React from 'react'
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
   return (
      <nav className={s.nav}>
         <ul className={s.nav_links}>
            <li>
               <NavLink to="/profile/" className={({ isActive }) => (isActive ? s.active : '')}>
                  Profile
               </NavLink>
            </li>
            <li>
               <NavLink to="/messages" className={({ isActive }) => (isActive ? s.active : '')}>
                  Messages
               </NavLink>
            </li>
            <li>
               <NavLink to="/users" className={({ isActive }) => (isActive ? s.active : '')}>
                  Users
               </NavLink>
            </li>
            <li>
               <NavLink to="/news" className={({ isActive }) => (isActive ? s.active : '')}>
                  News
               </NavLink>
            </li>
            <li>
               <NavLink to="/music" className={({ isActive }) => (isActive ? s.active : '')}>
                  Music
               </NavLink>
            </li>
            <li>
               <NavLink to="/settings" className={({ isActive }) => (isActive ? s.active : '')}>
                  Settings
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}
export default Sidebar
