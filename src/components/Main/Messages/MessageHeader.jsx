import { ArrowLeftOutlined, EllipsisOutlined, PhoneOutlined } from '@ant-design/icons'
import { Avatar, Divider, Row, Space } from 'antd'
import React from 'react'
import s from './Messages.module.css'

export default function MessageHeader({ dialog, back }) {
   return (
      <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
         <Row justify="space-between" align="middle" className={s.header}>
            <ArrowLeftOutlined className={s.messageIcon} onClick={back} />

            <Row justify="center" align="middle">
               <Avatar className={s.headerAvatar} icon={<img src={dialog.image} alt="avatar" />} />
               <div style={{ margin: 10 }}>
                  <Row justify="center" className={s.text}>
                     {dialog.name}
                     {dialog.surname}
                  </Row>
                  <Row justify="center" className={s.text}>
                     {dialog.userName}
                  </Row>
               </div>
            </Row>
            <Space size="middle">
               <PhoneOutlined className={s.messageIcon} />
               <EllipsisOutlined className={s.messageIcon} />
            </Space>
            <Divider className="divider" type="horizontal" />
         </Row>
      </div>
   )
}
