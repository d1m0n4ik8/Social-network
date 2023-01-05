import React from 'react'
import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'
import {
   CustomerServiceOutlined,
   MessageOutlined,
   ReadOutlined,
   ToolOutlined,
   UsergroupAddOutlined,
   UserOutlined,
} from '@ant-design/icons'
import { Space, Typography, Badge } from 'antd'
const { Text } = Typography
const Sidebar = () => {
   return (
      <>
         <nav className={s.nav}>
            <NavLink to="/profile" className={({ isActive }) => (isActive ? s.active : s.navLink)}>
               <Space size={'middle'} align="center">
                  <UserOutlined className={s.sidebarIcon} />
                  <Text className={s.sidebarLink}>Profile</Text>
               </Space>
            </NavLink>

            <Badge count={3} size="small" offset={[10, 10]}>
               <NavLink to="/messages" className={({ isActive }) => (isActive ? s.active : s.navLink)}>
                  <Space size={'middle'} align="center">
                     <MessageOutlined className={s.sidebarIcon} />
                     <Text className={s.sidebarLink}>Messages</Text>
                  </Space>
               </NavLink>
            </Badge>

            <NavLink to="/users" className={({ isActive }) => (isActive ? s.active : s.navLink)}>
               <Space size={'middle'} align="center">
                  <UsergroupAddOutlined className={s.sidebarIcon} />
                  <Text className={s.sidebarLink}>Users</Text>
               </Space>
            </NavLink>

            <NavLink to="/news" className={({ isActive }) => (isActive ? s.active : s.navLink)}>
               <Space size={'middle'} align="center">
                  <ReadOutlined className={s.sidebarIcon} />
                  <Text className={s.sidebarLink}>News</Text>
               </Space>
            </NavLink>

            <NavLink to="/music" className={({ isActive }) => (isActive ? s.active : s.navLink)}>
               <Space size={'middle'} align="center">
                  <CustomerServiceOutlined className={s.sidebarIcon} />
                  <Text className={s.sidebarLink}>Music</Text>
               </Space>
            </NavLink>

            <NavLink to="/login" className={({ isActive }) => (isActive ? s.active : s.navLink)}>
               <Space size={'middle'} align="center">
                  <ToolOutlined className={s.sidebarIcon} />
                  <Text className={s.sidebarLink}>Settings</Text>
               </Space>
            </NavLink>
         </nav>
      </>
   )
}
export default Sidebar
