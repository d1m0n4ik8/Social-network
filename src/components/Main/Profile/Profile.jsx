import React from 'react'
import s from './Profile.module.css'
import Post from './Posts/Post'
import avatar from '../../../assets/userAvatar.png'
import ProfileStatus from './ProfileStatus'
import AddNewPostForm from './AddPostForm'

const Profile = (props) => {
   const addNewPost = (values) => {
      props.addPost(values.postMessage)
   }
   let myPosts = props.posts.map((el) => <Post key={el.id} image={el.image} message={el.message} />)
   return (
      <main className={s.main}>
         <div className={s.main_img}>
            <img src={props.profile.photos.large || avatar} alt="main-img" />
         </div>
         <div className={s.name}>{props.profile.fullName}</div>
         <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
         <AddNewPostForm onSubmit={addNewPost} />
         {myPosts}
      </main>
   )
}
export default Profile
