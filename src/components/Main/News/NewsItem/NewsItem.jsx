import { CommentOutlined, LikeOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Card, Carousel, Image, Modal } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'
const NewsItem = (props) => {
   return (
      <Card
         title={'news'}
         hoverable
         style={{ width: 250 }}
         cover={
            <Carousel>
               <Image
                  height={200}
                  alt="postImage"
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
               />
               <Image
                  height={200}
                  alt="postImage"
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
               />
               <Image
                  height={200}
                  alt="postImage"
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
               />
            </Carousel>
         }
         actions={[
            <div>
               <LikeOutlined key="like" />
            </div>,
            <>
               <Modal title="Comments" closable={true} open={false} onCancel={'handleCancel'} footer={[]}></Modal>
               <CommentOutlined key="comment" onClick={'showModal'} sh />
            </>,
            <ShareAltOutlined key="share" />,
         ]}>
         <Meta title={'props.post.message'} description="www.instagram.com" />
      </Card>
   )
}
export default NewsItem
