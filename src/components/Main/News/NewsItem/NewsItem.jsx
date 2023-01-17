import { CommentOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Avatar, Card, Carousel, Image, Modal, Space } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
const NewsItem = (props) => {
   const images = props.news.images.map((img, index) => <Image key={index} alt="newsImage" src={img} />)
   return (
      <Card
         title={
            <Space>
               <Avatar size={30} icon={<img src={props.news.avatar} alt="news-img" />} />
               {props.news.title}
            </Space>
         }
         hoverable
         style={{ width: '75%', marginBottom: 30 }}
         cover={<Carousel>{images}</Carousel>}
         actions={[
            <div
               onClick={() => {
                  props.news.liked ? props.decreaseLikesCount(props.id) : props.increaseLikesCount(props.id)
               }}>
               {props.news.likesCount}
               <LikeOutlined key="like" />
            </div>,
            <>
               <Modal title="Comments" closable={true} open={false} onCancel={'handleCancel'} footer={[]}></Modal>
               <CommentOutlined key="comment" />
            </>,
            <ShareAltOutlined key="share" />,
         ]}>
         <Meta title={props.news.message} description="www.instagram.com" />
      </Card>
   )
}
export default NewsItem
