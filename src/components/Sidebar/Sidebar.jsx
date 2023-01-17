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
import { useMediaQuery } from '../../common/Hooks/useMediaQuery'
const { Text } = Typography
const Sidebar = () => {
   const offset = useMediaQuery('(min-width: 992px)')
   return (
      <nav className={s.nav}>
         <NavLink to="/profile" className={({ isActive }) => (isActive ? s.active : s.navLink)}>
            <Space size={'middle'} align="center">
               <UserOutlined className={s.sidebarIcon} />
               <Text className={s.sidebarLink}>Profile</Text>
            </Space>
         </NavLink>

         <NavLink to="/messages" className={({ isActive }) => (isActive ? s.active : s.navLink)}>
            <Badge count={3} size="small" offset={[offset ? 10 : 0, offset ? 10 : 0]}>
               <Space className="messages" size="middle" align="center">
                  <MessageOutlined className={s.sidebarIcon} />
                  <Text className={s.sidebarLink}>Messages</Text>
               </Space>
            </Badge>
         </NavLink>

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
   )
}
export default Sidebar
