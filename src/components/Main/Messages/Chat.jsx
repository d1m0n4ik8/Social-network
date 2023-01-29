import { Avatar, List, Row, Space } from 'antd'
import React from 'react'
import s from './Messages.module.css'

export default function Chat({ dialog }) {
   return (
      <List
         dataSource={dialog.messages}
         renderItem={(item) => (
            <List.Item>
               {item.fromMe ? (
                  <Row justify="end" align="middle" style={{ width: '100%' }}>
                     <Space size="middle" className={s.text}>
                        <div className={s.header__text + ' ' + s.message__item}>{item.message}</div>
                        <Avatar size={40} icon={<img src={item.image} alt="avatar" />} />
                     </Space>
                  </Row>
               ) : (
                  <Row justify="start" align="middle" style={{ width: '100%' }}>
                     <Space size="middle" className={s.text + ' ' + s.message__item}>
                        <Avatar size={40} icon={<img src={dialog.image} alt="avatar" />} />
                        <div>{item.message}</div>
                     </Space>
                  </Row>
               )}
            </List.Item>
         )}
      />
   )
}
