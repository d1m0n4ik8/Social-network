import {
   CommentOutlined,
   DeleteOutlined,
   LikeOutlined,
   LikeTwoTone,
   MoreOutlined,
   ShareAltOutlined,
} from '@ant-design/icons'
import { Avatar, Card, Col, Dropdown, Row, Space, message, Popconfirm, Image, Modal, notification } from 'antd'
import React, { useState } from 'react'
import { useMediaQuery } from '../../../../common/Hooks/useMediaQuery'
import Comments from './Comments'
import s from './Post.module.css'
const { Meta } = Card

const Post = (props) => {
   const w992 = useMediaQuery('(min-width: 992px)')
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
               <Space className="text">
                  <DeleteOutlined /> Delete
               </Space>
            </Popconfirm>
         ),
      },
   ]
   return (
      <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}>
         <Card
            title={
               <Row justify="space-between" align="middle">
                  <Col>
                     <Space className="text">
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
                           <MoreOutlined className="text" />
                        </Dropdown>
                     )}
                  </Col>
               </Row>
            }
            hoverable
            className={s.post}
            headStyle={{ padding: 10 }}
            cover={<Image height={w992 ? 200 : 250} alt="postImage" src={props.post.image} />}
            actions={[
               <div
                  onClick={() => {
                     props.post.liked ? props.decreaseLikesCount(props.post.id) : increaseLikesCount(props.post.id)
                  }}
                  className="text">
                  {props.post.likesCount}
                  {contextHolder}
                  {props.post.liked ? <LikeTwoTone /> : <LikeOutlined key="like" />}
               </div>,
               <div>
                  <Modal title="Comments" closable={true} open={isModalOpen} onCancel={handleCancel} footer={[]}>
                     <Comments />
                  </Modal>
                  <CommentOutlined key="comment" className="text" onClick={showModal} />
               </div>,
               <div>
                  <ShareAltOutlined key="share" className="text" />
               </div>,
            ]}>
            <Meta title={<div className="text">{props.post.message}</div>} />
         </Card>
      </Col>
   )
}
export default React.memo(Post)
