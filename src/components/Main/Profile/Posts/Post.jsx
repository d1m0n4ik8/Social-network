import { CommentOutlined, DeleteOutlined, LikeOutlined, MoreOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Avatar, Card, Col, Dropdown, Row, Space, message, Popconfirm, Image } from 'antd'
import React, { useState } from 'react'
//import s from './Post.module.css'
const { Meta } = Card

const Post = (props) => {
   const [open, setOpen] = useState(false)
   const handleOpenChange = (flag) => {
      setOpen(flag)
   }
   const confirm = () => {
      props.deletePost(props.post.id)
      message.success('Post deleted')
   }

   const items = [
      {
         key: '1',
         label: (
            <Popconfirm
               title="Delete the post"
               description="Are you sure to delete this post?"
               onConfirm={confirm}
               okText="Yes"
               cancelText="No">
               <Space>
                  <DeleteOutlined />
                  Delete
               </Space>
            </Popconfirm>
         ),
      },
   ]
   return (
      <Space wrap>
         <Card
            title={
               <Row justify="space-between" align="middle">
                  <Col>
                     <Space>
                        <Avatar size={30} icon={<img src={props.userAvatar} alt="main-img" />} />
                        {props.userName}
                     </Space>
                  </Col>
                  <Col>
                     {props.allowChange && (
                        <Dropdown
                           placement="bottomRight"
                           trigger="click"
                           menu={{ items }}
                           onOpenChange={handleOpenChange}
                           open={open}>
                           <MoreOutlined />
                        </Dropdown>
                     )}
                  </Col>
               </Row>
            }
            hoverable
            style={{ width: 240 }}
            cover={<Image height={200} alt="postImage" src={props.post.image} />}
            actions={[
               <div
                  onClick={() => {
                     props.post.liked
                        ? props.decreaseLikesCount(props.post.id)
                        : props.increaseLikesCount(props.post.id)
                  }}>
                  {props.post.likesCount}
                  <LikeOutlined key="like" />
               </div>,
               <CommentOutlined key="comment" />,
               <ShareAltOutlined key="share" />,
            ]}>
            <Meta title={props.post.message} description="www.instagram.com" />
         </Card>
      </Space>
   )
}
export default React.memo(Post)
