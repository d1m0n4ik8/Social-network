import React from 'react'
import Post from './Posts/Post'
import avatar from '../../../assets/userAvatar.png'
import { Col, Divider, Empty, Row } from 'antd'
import { Statistics } from './Statistics'
import { ProfileEdit } from './ProfileEdit'
import s from './Profile.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'

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
      <div
         id="scrollableDiv"
         style={{
            height: '80vh',
            overflow: 'auto',
         }}>
         <InfiniteScroll dataLength={props.posts.length} scrollableTarget="scrollableDiv">
            <main className={s.main}>
               <Row gutter={[16, 16]} justify="center">
                  <Col span={6} className="AvatatMobile2">
                     <ProfileEdit allowChange={props.allowChange} profile={props.profile} />
                  </Col>
                  <Col xs={24} sm={18}>
                     <Statistics
                        status={props.status}
                        updateUserStatus={props.updateUserStatus}
                        allowChange={props.allowChange}
                        profile={props.profile}
                        savePhoto={props.savePhoto}
                        saveProfileInfo={props.saveProfileInfo}
                        addPost={props.addPost}
                     />
                  </Col>
               </Row>
               <Divider className="divider__text" style={{ padding: '20px 0px' }} plain>
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
         </InfiniteScroll>
      </div>
   )
}

export default Profile
