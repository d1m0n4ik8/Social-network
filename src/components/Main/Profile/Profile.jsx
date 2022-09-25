import React from 'react'
import s from './Profile.module.css'
import Post from './Posts/Post'
const Profile = (props) => {
   let myPosts = props.posts.map((el) => <Post key={el.id} image={el.image} message={el.message} />)
   let newPostElement = React.createRef()

   let textChange = () => {
      let text = newPostElement.current.value
      props.onPostChange(text)
   }
   return (
      <main className={s.main}>
         <div className={s.main_img}>
            <img src="https://www.tripsavvy.com/thmb/FwmQ-JvBEBDDlVb-j_zdEo0iVsA=/2048x1152/smart/filters:no_upscale()/beach-5b59c9b7c9e77c004b3e0ff0.jpg" alt="main-img" />
         </div>
         <textarea ref={newPostElement} onChange={textChange} value={props.newPostMessage} />
         <div>
            <button onClick={props.addPost}>Add post</button>
         </div>
         {myPosts}
      </main>
   )
}
export default Profile
