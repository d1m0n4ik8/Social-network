import React, { useState } from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'
import { Avatar, Button, Divider, Dropdown, Space, Switch, Typography } from 'antd'
import { UserOutlined, LogoutOutlined, SettingOutlined, BulbOutlined } from '@ant-design/icons'

const { Title } = Typography

const Header = (props) => {
   const [open, setOpen] = useState(false)
   const handleMenuClick = (e) => {
      if (e.key === '2') {
         setOpen(false)
      }
   }
   const handleOpenChange = (flag) => {
      setOpen(flag)
   }
   const changeTheme = (cheaked) => {
      cheaked ? props.changeTheme('dark') : props.changeTheme('light')
   }
   const items = [
      {
         key: '1',
         label: (
            <>
               {!!props.profile ? (
                  <Space>
                     <Avatar size={30} icon={<img src={props.profile.photos.small} alt="avatar" />} />
                     <div>
                        <div>{props.profile.fullName}</div>
                        <div>{'@' + props.login}</div>
                     </div>
                  </Space>
               ) : (
                  'userName'
               )}
               <Divider style={{ margin: 5 }} plain />
            </>
         ),
      },
      {
         key: '2',
         label: (
            <Space onClick={props.logout}>
               <LogoutOutlined />
               logout
            </Space>
         ),
      },
      {
         key: '3',
         label: (
            <Space>
               <BulbOutlined />
               DarkMode: <Switch onChange={changeTheme} checkedChildren="On" unCheckedChildren="Off" defaultChecked />
            </Space>
         ),
      },
      {
         key: '4',
         label: (
            <Space>
               <SettingOutlined />
               Settings
            </Space>
         ),
      },
   ]
   return (
      <header className={s.header}>
         <div className={s.logo}>
            <NavLink to="/">
               <div>Dimality</div>
            </NavLink>
            {props.isAuth ? (
               <Dropdown
                  menu={{
                     items,
                     onClick: handleMenuClick,
                  }}
                  onOpenChange={handleOpenChange}
                  open={open}
                  placement="bottomRight">
                  <Button type="text">
                     <Space align="center">
                        <Title level={4} style={{ margin: 0 }}>
                           {props.login}
                        </Title>
                        <Avatar
                           size={30}
                           icon={
                              !!props.profile ? <img src={props.profile.photos.small} alt="avatar" /> : <UserOutlined />
                           }
                        />
                     </Space>
                  </Button>
               </Dropdown>
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
