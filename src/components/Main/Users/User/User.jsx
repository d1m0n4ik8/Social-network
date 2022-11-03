import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './User.module.css'
import avatar from '../../../../assets/userAvatar.png'

const User = (props) => {
   const follow = () => {
      props.follow(props.user.id)
   }
   const unfollow = () => {
      props.unfollow(props.user.id)
   }
   return (
      <div className={s.user}>
         <NavLink className={s.userProfile} to={'/profile/' + props.user.id}>
            <div className={s.avatar}>
               <img src={props.user.photos.small || avatar} alt="avatar" />
            </div>
            <div className={s.fullName}>{props.user.name}</div>
         </NavLink>
         <div className={s.following}>
            {props.user.followed ? (
               <button
                  disabled={props.followingInProgress.some((id) => id === props.user.id)}
                  className={s.unfollow}
                  onClick={unfollow}>
                  Unfollow
               </button>
            ) : (
               <button disabled={props.followingInProgress.some((id) => id === props.user.id)} onClick={follow}>
                  Follow
               </button>
            )}
         </div>
         <div className={s.about}>
            <div className={s.status}>{props.user.status}</div>
         </div>
      </div>
   )
}
export default User
