import s from './Post.module.css'
const Post = (props) => {
   return (
      <div className={s.post}>
         <div className={s.image}>
            <img src={props.image} alt="avatar" />
         </div>
         <div className={s.discription}>
            <p>{props.message}</p>
         </div>
      </div>
   )
}
export default Post
