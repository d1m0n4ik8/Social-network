import React, { useState } from 'react'
import { Avatar, Button, Divider, Dropdown, Space } from 'antd'
import { UserOutlined, LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import ProfileEditForm from '../../Main/Profile/ProfileEditForm'
import { NavLink } from 'react-router-dom'
import SwitchTheme from './SwitchTheme'

export default function HeaderDropdown(props) {
   const onSubmit = (profileInfo) => {
      props.saveProfileInfo(profileInfo)
   }
   const [open, setOpen] = useState(false)
   const handleMenuClick = (e) => {
      if (e.key === '1') {
         setOpen(false)
      }
   }
   const handleOpenChange = (flag) => {
      setOpen(flag)
   }

   const items = [
      {
         key: '1',
         label: (
            <>
               {!!props.profile ? (
                  <NavLink to="/profile">
                     <Space>
                        <Avatar size={30} icon={<img src={props.profile.photos.small} alt="avatar" />} />
                        <div className="text">
                           <div>{props.profile.fullName}</div>
                           <div>{'@' + props.login}</div>
                        </div>
                     </Space>
                  </NavLink>
               ) : (
                  'userName'
               )}
               <Divider className="divider" plain />
            </>
         ),
      },

      {
         key: '2',
         label: <SwitchTheme theme={props.theme} setTheme={props.setTheme} />,
      },
      {
         key: '3',
         label: (
            <ProfileEditForm onSubmit={onSubmit} profile={props.profile}>
               <Space className="text">
                  <SettingOutlined /> Settings
               </Space>
            </ProfileEditForm>
         ),
      },
      {
         key: '4',
         label: (
            <Space size="small" onClick={props.logout} className="text">
               <LogoutOutlined />
               logout
            </Space>
         ),
      },
   ]
   return (
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
               <div level={4} className="text" style={{ fontSize: 20, fontStyle: 'italic' }}>
                  {props.login}
               </div>
               <Avatar
                  size={30}
                  icon={!!props.profile ? <img src={props.profile.photos.small} alt="avatar" /> : <UserOutlined />}
               />
            </Space>
         </Button>
      </Dropdown>
   )
}
