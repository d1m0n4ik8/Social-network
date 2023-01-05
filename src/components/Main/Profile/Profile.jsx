import React from 'react'
import Post from './Posts/Post'
import avatar from '../../../assets/userAvatar.png'
import ProfileStatus2 from './ProfileStatus2'
import AddNewPostForm from './AddPostForm'
import ProfileEditForm from './ProfileEditForm'
import ProfileInfo from './ProfileInfo'
import { Avatar, Col, Divider, Empty, Row, Space, Statistic } from 'antd'
import UploadButton from '../../../common/UploadButton'
import { SmileOutlined } from '@ant-design/icons'
import FollowButton from '../../../common/FollowButton'
import s from './Profile.module.css'

const Profile = (props) => {
   const onSubmit = (profileInfo) => {
      props.saveProfileInfo(profileInfo)
   }
   const addNewPost = (e) => {
      e.preventDefault()
      props.addPost(e.target.postMessage.value)
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
         <Row>
            <Col span={6}>
               <Avatar size={150} icon={<img src={props.profile.photos.large || avatar} alt="main-img" />} />
            </Col>
            <Col span={6}>
               <Statistic title="Followers" value={10} />
            </Col>
            <Col span={6}>
               <Statistic title="Follows" value={10} />
            </Col>
            <Col span={6}>
               <Statistic title="Now" prefix={<SmileOutlined />} value={'online'} />
            </Col>
         </Row>
         {props.allowChange ? (
            <UploadButton savePhoto={props.savePhoto} />
         ) : (
            <FollowButton userId={props.profile.userId} followed={props.profile.followed} />
         )}

         {props.allowChange && <ProfileEditForm onSubmit={onSubmit} profile={props.profile} />}
         <ProfileInfo profile={props.profile} />
         <ProfileStatus2
            status={props.status}
            updateUserStatus={props.updateUserStatus}
            allowChange={props.allowChange}
         />
         <Divider style={{ color: 'white', borderColor: 'white' }} plain>
            Posts
         </Divider>
         {props.allowChange && <AddNewPostForm onSubmit={addNewPost} allowChange={props.allowChange} />}
         {myPosts.length ? (
            <>
               <Space wrap={true}>
                  <div className={s.posts}>{myPosts}</div>
               </Space>
            </>
         ) : (
            <Empty />
         )}
      </main>
   )
}

export default Profile
