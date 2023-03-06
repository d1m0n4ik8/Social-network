import React, { useState } from 'react'
import s from './Messages.module.css'
import MessagesForm from './MessagesForm'
import { Avatar, Divider, Space, Tabs } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component'
import MessageHeader from './MessageHeader'
import Chat from './Chat'
import { useMediaQuery } from '../../../common/Hooks/useMediaQuery'

const Messages = (props) => {
   const w768 = useMediaQuery('(min-width: 768px)')
   const [isTabOpened, setIsTabOpened] = useState(false)

   const addNewMessage = (e, id) => {
      e.preventDefault()
      props.addNewMessage(e.target.message.value, id, props.profile.photos.small)
   }

   const renderTabBar = (props, DefaultTabBar) => (
      <div style={{ width: '100%', display: !isTabOpened ? 'flex' : 'none' }}>
         <DefaultTabBar {...props} />
      </div>
   )

   const items = props.dialogs.map((dialog, index) => ({
      label: (
         <>
            <Space size={w768 ? 'large' : 'small'} className={s.tab__inner}>
               <Avatar className={s.headerAvatar} icon={<img src={dialog.image} alt="avatar" />} />
               {dialog.name}
               {dialog.surname}
            </Space>
            <Divider className="divider" type="horizontal" />
         </>
      ),
      key: String(index + 1),
      children: (
         <div style={{ display: isTabOpened ? 'block' : 'none' }}>
            <div
               id="scrollableDiv"
               style={{
                  height: '70vh',
                  overflow: 'auto',
                  borderRadius: 20,
               }}>
               <MessageHeader back={() => setIsTabOpened(false)} dialog={dialog} />
               <InfiniteScroll dataLength={dialog.messages.length} scrollableTarget="scrollableDiv">
                  <Chat dialog={dialog} />
               </InfiniteScroll>
            </div>
            <MessagesForm dialogId={index} onSubmit={addNewMessage} />
         </div>
      ),
   }))

   return (
      <div className={s.messages}>
         <Tabs
            onTabClick={() => setIsTabOpened(true)}
            renderTabBar={renderTabBar}
            defaultActiveKey="1"
            tabPosition="left"
            items={items}
            style={{ height: '100%', width: '100%' }}
            tabBarStyle={{
               width: '100%',
               border: '1px solid rgba(140, 140, 140, 0.35)',
               borderRadius: 20,
               color: '#fff',
               paddingTop: 15,
            }}
         />
      </div>
   )
}
export default Messages
