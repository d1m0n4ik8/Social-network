import React from 'react'
import Post from './Posts/Post'
import avatar from '../../../assets/userAvatar.png'
import { Col, Divider, Empty, Row } from 'antd'
import { Statistics } from './Statistics'
import { ProfileEdit } from './ProfileEdit'
import s from './Profile.module.css'

const Profile = (props) => {
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
               <ProfileEdit
                  savePhoto={props.savePhoto}
                  allowChange={props.allowChange}
                  profile={props.profile}
                  saveProfileInfo={props.saveProfileInfo}
                  addPost={props.addPost}
               />
            </Col>
            <Col span={18}>
               <Statistics
                  status={props.status}
                  updateUserStatus={props.updateUserStatus}
                  allowChange={props.allowChange}
                  profile={props.profile}
               />
            </Col>
         </Row>
         <Divider style={{ color: 'white', borderColor: 'white' }} plain>
            Posts
         </Divider>
         {props.allowChange ? (
            <>
               {myPosts.length ? (
                  <Row className="w100" gutter={[16, 16]}>
                     {myPosts}
                  </Row>
               ) : (
                  <Empty />
               )}
            </>
         ) : (
            <Empty />
         )}
      </main>
   )
}

export default Profile
