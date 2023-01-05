import React from 'react'
import {
   ChromeOutlined,
   FacebookOutlined,
   GithubOutlined,
   InstagramOutlined,
   LinkedinOutlined,
   TwitterOutlined,
   YoutubeOutlined,
   CaretDownOutlined,
} from '@ant-design/icons'
import { Dropdown } from 'antd'

import s from './Profile.module.css'

const Contacts = ({ contacts }) => {
   const items = [
      {
         key: '1',
         label: (
            <>
               <b>Facebook</b> {contacts.facebook}
            </>
         ),
         icon: <FacebookOutlined className={s.contactsIcon} />,
      },
      {
         key: '2',
         label: (
            <>
               <b>Website</b> {contacts.website}
            </>
         ),
         icon: <ChromeOutlined className={s.contactsIcon} />,
      },
      {
         key: '3',
         label: (
            <>
               <b>Twitter</b> {contacts.twitter}
            </>
         ),
         icon: <TwitterOutlined className={s.contactsIcon} />,
      },
      {
         key: '4',
         label: (
            <>
               <b>Instagram</b> {contacts.instagram}
            </>
         ),
         icon: <InstagramOutlined className={s.contactsIcon} />,
      },
      {
         key: '5',
         label: (
            <>
               <b>Youtube</b> {contacts.youtube}
            </>
         ),
         icon: <YoutubeOutlined className={s.contactsIcon} />,
      },
      {
         key: '6',
         label: (
            <>
               <b>Github</b> {contacts.github}
            </>
         ),
         icon: <GithubOutlined className={s.contactsIcon} />,
      },
      {
         key: '7',
         label: (
            <>
               <b>Main Link</b> {contacts.mainLink}
            </>
         ),
         icon: <LinkedinOutlined className={s.contactsIcon} />,
      },
   ]
   return (
      <div>
         <Dropdown
            menu={{
               items,
            }}>
            <div onClick={(e) => e.preventDefault()}>
               Contacts <CaretDownOutlined />
            </div>
         </Dropdown>
      </div>
   )
}
export default Contacts
