import React, { useEffect, useState } from 'react'
import { Avatar, Button, List, Skeleton } from 'antd'
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons'
const count = 3
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`
const Comments = () => {
   const [initLoading, setInitLoading] = useState(true)
   const [loading, setLoading] = useState(false)
   const [data, setData] = useState([])
   const [list, setList] = useState([])
   useEffect(() => {
      fetch(fakeDataUrl)
         .then((res) => res.json())
         .then((res) => {
            const newData = res.results
            const myItemsWithIds = newData.map((item, index) => ({ ...item, id: index }))
            setInitLoading(false)
            setData(myItemsWithIds)
            setList(myItemsWithIds)
         })
   }, [])
   const onLoadMore = () => {
      setLoading(true)
      setList(
         data.concat(
            [...new Array(count)].map((item) => ({
               ...item,
               loading: true,
               name: {},
               picture: {},
            }))
         )
      )
      fetch(fakeDataUrl)
         .then((res) => res.json())
         .then((res) => {
            const newData = data.concat(res.results.map((item, index) => ({ ...item, id: data.length + index })))
            setData(newData)
            setList(newData)
            setLoading(false)
            window.dispatchEvent(new Event('resize'))
         })
   }
   const loadMore =
      !initLoading && !loading ? (
         <div
            style={{
               textAlign: 'center',
               marginTop: 12,
               height: 32,
               lineHeight: '32px',
            }}>
            <Button onClick={onLoadMore}>loading more</Button>
         </div>
      ) : null
   return (
      <List
         loading={initLoading}
         itemLayout="horizontal"
         loadMore={loadMore}
         dataSource={list}
         rowKey={(item) => item.id}
         renderItem={(item) => (
            <List.Item>
               <Skeleton avatar title={false} loading={item.loading} active>
                  <List.Item.Meta
                     avatar={<Avatar src={item.picture.large} />}
                     title={item.name?.last}
                     description="This is so beautiful"
                  />
                  <SmileTwoTone />
                  <HeartTwoTone twoToneColor="#eb2f96" />
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
               </Skeleton>
            </List.Item>
         )}
      />
   )
}
export default Comments
