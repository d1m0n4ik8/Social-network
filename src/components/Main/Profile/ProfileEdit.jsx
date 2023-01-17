import { Avatar, message, Space } from 'antd'
import avatar from '../../../assets/userAvatar.png'
import React from 'react'
import UploadButton from '../../../common/UIcomponents/UploadButton'
import FollowButton from '../../../common/UIcomponents/FollowButton'
import ProfileEditForm from './ProfileEditForm'
import AddPostForm from './AddPostForm'

export const ProfileEdit = (props) => {
   const onSubmit = (profileInfo) => {
      props.saveProfileInfo(profileInfo)
   }
   const addNewPost = (postMessage, image) => {
      props.addPost(postMessage, image)
      message.success('Post added')
   }
   return (
      <div>
         <div className="justifyCenter">
            <Avatar size={150} icon={<img src={props.profile.photos.large || avatar} alt="main-img" />} />
         </div>
         <div className="justifyCenter">
            {props.allowChange ? (
               <Space direction="vertical">
                  <UploadButton savePhoto={props.savePhoto} />
                  <ProfileEditForm onSubmit={onSubmit} profile={props.profile} />
                  <AddPostForm onSubmit={addNewPost} allowChange={props.allowChange} />
               </Space>
            ) : (
               <FollowButton userId={props.profile.userId} followed={props.profile.followed} />
            )}
         </div>
      </div>
   )
}
