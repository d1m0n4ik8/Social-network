import React from 'react'
import s from './Post.module.css'
const Post = (props) => {
   return (
      <div className={s.post}>
         <div className={s.image}>
            <img src={props.post.image} alt="post" />
         </div>
         <div className={s.discription}>
            <p>{props.post.message}</p>
         </div>
         <div className={s.likesCount}>
            <button
               onClick={() => {
                  props.post.liked ? props.decreaseLikesCount(props.post.id) : props.increaseLikesCount(props.post.id)
               }}>
               {props.post.likesCount}
            </button>
         </div>
         <div className={s.comments}>
            <div>{props.post.comments}</div>
         </div>
         {props.allowChange && (
            <button
               onClick={() => {
                  props.deletePost(props.post.id)
               }}>
               Delete
            </button>
         )}
      </div>
   )
}
export default React.memo(Post)
