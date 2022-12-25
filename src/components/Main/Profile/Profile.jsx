import React from 'react'
import s from './Profile.module.css'
import Post from './Posts/Post'
import avatar from '../../../assets/userAvatar.png'
import ProfileStatus2 from './ProfileStatus2'
import AddNewPostForm from './AddPostForm'
import { useState } from 'react'
import ProfileEditForm from './ProfileEditForm'
import ProfileInfo from './ProfileInfo'

const Profile = (props) => {
   let [editMode, setEditMode] = useState(false)
   const onSubmit = (e) => {
      e.preventDefault()
      setEditMode(false)
      const profileInfo = {
         ...props.profile,
         aboutMe: e.target.aboutMe.value,
         contacts: {
            facebook: e.target.facebook.value,
            website: e.target.website.value,
            twitter: e.target.twitter.value,
            instagram: e.target.instagram.value,
            youtube: e.target.youtube.value,
            github: e.target.github.value,
            mainLink: e.target.mainLink.value,
         },
         lookingForAJob: e.target.lookingForAJob.checked,
         lookingForAJobDescription: e.target.lookingForAJobDescription.value,
         fullName: e.target.fullName.value,
      }
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
   const onMainPhoroSelected = (e) => {
      if (e.target.files.length) props.savePhoto(e.target.files[0])
   }
   let myPosts = props.posts.map((post) => (
      <Post
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
         <div className={s.main_img}>
            <img src={props.profile.photos.large || avatar} alt="main-img" />
         </div>
         {props.allowChange && <input type="file" onChange={onMainPhoroSelected} />}
         <button onClick={() => setEditMode(true)}>Edit</button>
         {editMode ? (
            <ProfileEditForm onSubmit={onSubmit} profile={props.profile} setEditMode={setEditMode} />
         ) : (
            <ProfileInfo profile={props.profile} />
         )}
         <ProfileStatus2
            status={props.status}
            updateUserStatus={props.updateUserStatus}
            allowChange={props.allowChange}
         />
         <AddNewPostForm onSubmit={addNewPost} allowChange={props.allowChange} />
         <div className={s.posts}>{myPosts}</div>
      </main>
   )
}

export default Profile
