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
            <a href={contacts.facebook} target="_blank" rel="noreferrer">
               <span className="text">
                  <b>Facebook</b> {contacts.facebook}
               </span>
            </a>
         ),
         icon: <FacebookOutlined className={s.contactsIcon} />,
         disabled: !contacts.facebook,
      },
      {
         key: '2',
         label: (
            <a href={contacts.website} target="_blank" rel="noreferrer">
               <span className="text">
                  <b>Website</b> {contacts.website}
               </span>
            </a>
         ),
         icon: <ChromeOutlined className={s.contactsIcon} />,
         disabled: !contacts.website,
      },
      {
         key: '3',
         label: (
            <a href={contacts.twitter} target="_blank" rel="noreferrer">
               <span className="text">
                  <b>Twitter</b> {contacts.twitter}
               </span>
            </a>
         ),
         icon: <TwitterOutlined className={s.contactsIcon} />,
         disabled: !contacts.twitter,
      },
      {
         key: '4',
         label: (
            <a href={contacts.instagram} target="_blank" rel="noreferrer">
               <span className="text">
                  <b>Instagram</b> {contacts.instagram}
               </span>
            </a>
         ),
         icon: <InstagramOutlined className={s.contactsIcon} />,
         disabled: !contacts.instagram,
      },
      {
         key: '5',
         label: (
            <a href={contacts.youtube} target="_blank" rel="noreferrer">
               <span className="text">
                  <b>Youtube</b> {contacts.youtube}
               </span>
            </a>
         ),
         icon: <YoutubeOutlined className={s.contactsIcon} />,
         disabled: !contacts.youtube,
      },
      {
         key: '6',
         label: (
            <a href={contacts.github} target="_blank" rel="noreferrer">
               <span className="text">
                  <b>Github</b> {contacts.github}
               </span>
            </a>
         ),
         icon: <GithubOutlined className={s.contactsIcon} />,
         disabled: !contacts.github,
      },
      {
         key: '7',
         label: (
            <a className="text" href={contacts.mainLink} target="_blank" rel="noreferrer">
               <span className="text">
                  <b>Main Link</b> {contacts.mainLink}
               </span>
            </a>
         ),
         icon: <LinkedinOutlined className={s.contactsIcon} />,
         disabled: !contacts.mainLink,
      },
   ].filter((el) => !el.disabled)
   return (
      <div style={{ cursor: 'pointer' }}>
         <Dropdown menu={{ items }} trigger={['click']}>
            <div>
               Contacts <CaretDownOutlined />
            </div>
         </Dropdown>
      </div>
   )
}
export default Contacts
