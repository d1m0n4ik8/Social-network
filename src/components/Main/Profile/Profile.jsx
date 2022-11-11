import React from 'react'
import s from './Profile.module.css'
import Post from './Posts/Post'
import avatar from '../../../assets/userAvatar.png'
import ProfileStatus from './ProfileStatus'

const Profile = (props) => {
   let myPosts = props.posts.map((el) => <Post key={el.id} image={el.image} message={el.message} />)
   let newPostElement = React.createRef()

   let textChange = () => {
      let text = newPostElement.current.value
      props.updateMessage(text)
   }
   return (
      <main className={s.main}>
         <div className={s.main_img}>
            <img src={props.profile.photos.large || avatar} alt="main-img" />
         </div>
         <div className={s.name}>{props.profile.fullName}</div>
         <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
         <textarea className={s.textarea} ref={newPostElement} onChange={textChange} value={props.newPostMessage} />
         <div>
            <button className={s.btn} onClick={props.addPost}>
               Add post
            </button>
         </div>
         {myPosts}
      </main>
   )
}
export default Profile
