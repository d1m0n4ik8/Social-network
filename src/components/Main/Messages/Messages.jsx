import React from 'react'
import s from './Messages.module.css'
import MessagesForm from './MessagesForm'
import { Avatar, List, Space, Tabs } from 'antd'
const Messages = (props) => {
   const addNewMessage = (values) => {
      props.addNewMessage(values.message)
   }
   const items = props.dialogs.map((dialog, index) => ({
      label: (
         <Space>
            <Avatar size={64} icon={<img src={dialog.image} alt="avatar" />}></Avatar>
            {dialog.name}
            {dialog.surname}
         </Space>
      ),
      key: index,
      children: (
         <>
            <List
               bordered
               dataSource={dialog.messages}
               renderItem={(item) => (
                  <List.Item>
                     <Avatar size={64} icon={<img src={dialog.image} alt="avatar" />}></Avatar>
                     {item}
                  </List.Item>
               )}
            />
            <MessagesForm onSubmit={addNewMessage} />
         </>
      ),
   }))

   return (
      <div className={s.messages}>
         <Tabs defaultActiveKey="1" tabPosition="left" items={items} />
      </div>
   )
}
export default Messages
