import React, { Fragment } from 'react'
import s from './Messages.module.css'
import MessagesForm from './MessagesForm'
import { Avatar, Divider, List, Row, Space, Tabs } from 'antd'
import { EllipsisOutlined, PhoneOutlined, VideoCameraOutlined } from '@ant-design/icons'
import InfiniteScroll from 'react-infinite-scroll-component'
const Messages = (props) => {
   const addNewMessage = (e, id) => {
      e.preventDefault()
      props.addNewMessage(e.target.message.value, id, props.profile.photos.small)
   }
   const items = props.dialogs.map((dialog, index) => ({
      label: (
         <Space>
            <Avatar size={64} icon={<img src={dialog.image} alt="avatar" />} />
            {dialog.name}
            {dialog.surname}
         </Space>
      ),
      key: index,
      children: (
         <>
            <div
               id="scrollableDiv"
               style={{
                  height: '75vh',
                  overflow: 'auto',
                  padding: '0 16px',
                  border: '1px solid rgba(140, 140, 140, 0.35)',
               }}>
               <InfiniteScroll dataLength={dialog.messages.length} scrollableTarget="scrollableDiv">
                  <div
                     style={{
                        padding: '1px 75px 10px 530px',
                        position: 'fixed',
                        top: 60,
                        left: 0,
                        width: '100%',
                        zIndex: 2,
                     }}>
                     <Row
                        justify="space-between"
                        align="middle"
                        style={{
                           padding: '0 15px',
                           backgroundColor: '#191919',
                        }}>
                        <Avatar size={50} icon={<img src={dialog.image} alt="avatar" />} />
                        <div>
                           <Space style={{ color: 'white', fontSize: 20 }}>
                              {dialog.name}
                              {dialog.surname}
                           </Space>
                           <Row justify="center" style={{ color: 'white', fontSize: 16 }}>
                              {dialog.userName}
                           </Row>
                        </div>
                        <Space size="middle">
                           <PhoneOutlined style={{ color: 'white', fontSize: 30 }} />
                           <VideoCameraOutlined style={{ color: 'white', fontSize: 30 }} />
                           <EllipsisOutlined style={{ color: 'white', fontSize: 30 }} />
                        </Space>
                        <Divider type="horizontal" style={{ color: 'white', borderColor: 'white' }} />
                     </Row>
                  </div>

                  <div style={{ height: 100 }}></div>
                  <List
                     dataSource={dialog.messages}
                     renderItem={(item) => (
                        <List.Item>
                           {item.fromMe ? (
                              <Row justify="end" align="middle" style={{ width: '100%' }}>
                                 <Space size="middle" style={{ fontSize: '25px', color: 'white' }}>
                                    <div
                                       style={{
                                          padding: '10px 20px',
                                          borderRadius: 16,
                                          backgroundColor: '#333333',
                                       }}>
                                       {item.message}
                                    </div>
                                    <Avatar size={40} icon={<img src={item.image} alt="avatar" />} />
                                 </Space>
                              </Row>
                           ) : (
                              <Row justify="start" align="middle" style={{ width: '100%' }}>
                                 <Space size="middle" style={{ fontSize: '25px', color: 'white' }}>
                                    <Avatar size={40} icon={<img src={dialog.image} alt="avatar" />} />
                                    <div
                                       style={{
                                          padding: '10px 20px',
                                          borderRadius: 16,
                                          backgroundColor: '#333333',
                                       }}>
                                       {item.message}
                                    </div>
                                 </Space>
                              </Row>
                           )}
                        </List.Item>
                     )}
                  />
               </InfiniteScroll>
            </div>

            <MessagesForm dialogId={index} onSubmit={addNewMessage} />
         </>
      ),
   }))

   return (
      <div className={s.messages}>
         <Tabs defaultActiveKey="1" tabPosition="left" items={items} style={{ height: '100%' }} />
      </div>
   )
}
export default Messages
