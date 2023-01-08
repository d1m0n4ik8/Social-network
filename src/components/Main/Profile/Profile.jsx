import React from 'react'
import Post from './Posts/Post'
import avatar from '../../../assets/userAvatar.png'
import ProfileStatus2 from './ProfileStatus2'
import AddNewPostForm from './AddPostForm'
import ProfileEditForm from './ProfileEditForm'
import ProfileInfo from './ProfileInfo'
import { Avatar, Col, Divider, Empty, message, Row, Statistic } from 'antd'
import UploadButton from '../../../common/UploadButton'
import { SmileOutlined } from '@ant-design/icons'
import FollowButton from '../../../common/FollowButton'
import s from './Profile.module.css'

const Profile = (props) => {
   const onSubmit = (profileInfo) => {
      props.saveProfileInfo(profileInfo)
      message.success('Profile info updated')
   }
   const addNewPost = (postMessage, image) => {
      props.addPost(postMessage, image)
      message.success('Post added')
   }
   const deletePost = (postId) => {
      props.deletePost(postId)
   }
   const increaseLikesCount = (postId) => {
      props.increaseLikesCount(postId)
   }
   const decreaseLikesCount = (postId) => {
      props.decreaseLikesCount(postId)
   }

   let myPosts = props.posts.map((post) => (
      <Post
         userAvatar={props.profile.photos.large || avatar}
         userName={props.profile.fullName}
         key={post.id}
         post={post}
         deletePost={deletePost}
         decreaseLikesCount={decreaseLikesCount}
         increaseLikesCount={increaseLikesCount}
         allowChange={props.allowChange}
      />
   ))
   return (
      <main className={s.main}>
         <Row gutter={[16, 16]}>
            <Col span={6}>
               <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Avatar size={150} icon={<img src={props.profile.photos.large || avatar} alt="main-img" />} />
               </div>
               <div style={{ display: 'flex', justifyContent: 'center' }}>
                  {props.allowChange ? (
                     <>
                        <UploadButton savePhoto={props.savePhoto} />
                        <ProfileEditForm onSubmit={onSubmit} profile={props.profile} />
                     </>
                  ) : (
                     <FollowButton userId={props.profile.userId} followed={props.profile.followed} />
                  )}
               </div>
            </Col>
            <Col span={18}>
               <Row>
                  <Col span={8}>
                     <Statistic title="Followers" value={10} />
                  </Col>
                  <Col span={8}>
                     <Statistic title="Follows" value={10} />
                  </Col>
                  <Col span={8}>
                     <Statistic title="Now" prefix={<SmileOutlined />} value={'online'} />
                  </Col>
                  <Col span={12}>
                     <ProfileInfo profile={props.profile} />
                  </Col>
                  <Col span={12}>
                     <ProfileStatus2
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                        allowChange={props.allowChange}
                     />
                  </Col>
               </Row>
            </Col>
         </Row>
         <Divider style={{ color: 'white', borderColor: 'white' }} plain>
            Posts
         </Divider>
         {props.allowChange && <AddNewPostForm onSubmit={addNewPost} allowChange={props.allowChange} />}
         {myPosts.length ? (
            <Row style={{ width: '100%' }} gutter={[16, 16]}>
               {myPosts}
            </Row>
         ) : (
            <Empty />
         )}
      </main>
   )
}

export default Profile
