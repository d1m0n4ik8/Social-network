import s from './Profile.module.css'
import Post from './Posts/Post'
const Profile = (props) => {
   let myPosts = props.state.posts.map((el) => <Post image={el.image} message={el.message} />)
   return (
      <main className={s.main}>
         <div className={s.main_img}>
            <img src="https://www.tripsavvy.com/thmb/FwmQ-JvBEBDDlVb-j_zdEo0iVsA=/2048x1152/smart/filters:no_upscale()/beach-5b59c9b7c9e77c004b3e0ff0.jpg" alt="main-img" />
         </div>
         {myPosts}
      </main>
   )
}
export default Profile
