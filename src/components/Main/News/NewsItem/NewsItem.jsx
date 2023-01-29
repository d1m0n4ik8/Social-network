import { CommentOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Avatar, Card, Carousel, Image, Modal, Space } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
const NewsItem = (props) => {
   const images = props.news.images.map((img, index) => <Image key={index} alt="newsImage" src={img} />)
   return (
      <Card
         title={
            <Space className="text">
               <Avatar size={30} icon={<img src={props.news.avatar} alt="news-img" />} />
               {props.news.title}
            </Space>
         }
         style={{ width: '75%', marginBottom: 30 }}
         cover={<Carousel>{images}</Carousel>}
         actions={[
            <div
               onClick={() => {
                  props.news.liked ? props.decreaseLikesCount(props.id) : props.increaseLikesCount(props.id)
               }}
               className="text">
               {props.news.likesCount}
               <LikeOutlined key="like" className="text" />
            </div>,
            <div>
               <Modal title="Comments" closable={true} open={false} onCancel={'handleCancel'} footer={[]}></Modal>
               <CommentOutlined key="comment" className="text" />
            </div>,
            <div>
               <ShareAltOutlined key="share" className="text" />
            </div>,
         ]}>
         <Meta title={<div className="text">{props.news.message}</div>} className="meta" />
      </Card>
   )
}
export default NewsItem
