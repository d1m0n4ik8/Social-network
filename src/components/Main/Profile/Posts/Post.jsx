import { CommentOutlined, DeleteOutlined, LikeOutlined, MoreOutlined, ShareAltOutlined } from '@ant-design/icons'
import { Avatar, Card, Col, Dropdown, Row, Space, message, Popconfirm, Image, Modal, Button, notification } from 'antd'
import React, { useState } from 'react'
import Comments from './Comments'
//import s from './Post.module.css'
const { Meta } = Card

const Post = (props) => {
   const [open, setOpen] = useState(false)
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [api, contextHolder] = notification.useNotification()

   const openNotification = (id) => {
      api.open({
         message: `${props.userName} liked your post`,
         description: <Image height={100} alt="postImage" src={props.post.image} />,
         icon: <LikeOutlined />,
         placement: 'bottomRight',
         duration: 2,
         maxCount: 2,
      })
   }
   const increaseLikesCount = (id) => {
      props.increaseLikesCount(id)
      openNotification(id)
   }
   const showModal = () => {
      setIsModalOpen(true)
   }
   const handleCancel = () => {
      setIsModalOpen(false)
   }
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
               <Button type="ghost">
                  <DeleteOutlined />
                  Delete
               </Button>
            </Popconfirm>
         ),
      },
   ]
   return (
      <Col xs={24} sm={24} md={12} lg={8} xl={6}>
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
            style={{ width: 250 }}
            cover={<Image height={200} alt="postImage" src={props.post.image} />}
            actions={[
               <div
                  onClick={() => {
                     props.post.liked ? props.decreaseLikesCount(props.post.id) : increaseLikesCount(props.post.id)
                  }}>
                  {props.post.likesCount}
                  {contextHolder}
                  <LikeOutlined key="like" />
               </div>,
               <>
                  <Modal title="Comments" closable={true} open={isModalOpen} onCancel={handleCancel} footer={[]}>
                     <Comments />
                  </Modal>
                  <CommentOutlined key="comment" onClick={showModal} />
               </>,
               <ShareAltOutlined key="share" />,
            ]}>
            <Meta title={props.post.message} description="www.instagram.com" />
         </Card>
      </Col>
   )
}
export default React.memo(Post)
