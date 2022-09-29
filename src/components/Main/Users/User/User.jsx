import React from 'react'
import s from './User.module.css'
const User = (props) => {
   const follow = () => {
      props.following(props.user.id)
   }
   const unfollow = () => {
      props.unfollowing(props.user.id)
   }
   return (
      <div className={s.user}>
         <div className={s.userProfile}>
            <div className={s.avatar}>
               <img src={props.user.avatar} alt="avatar" />
            </div>
            <div className={s.fullName}>
               <div className={s.firstName}>{props.user.fullName.firstName}</div>
               <div className={s.secondName}>{props.user.fullName.secondName}</div>
            </div>
            <div className={s.following}>
               {props.user.followed ? (
                  <button className={s.unfollow} onClick={unfollow}>
                     Unfollow
                  </button>
               ) : (
                  <button onClick={follow}>Follow</button>
               )}
            </div>
         </div>
         <div className={s.about}>
            <div className={s.status}>{props.user.status}</div>
            <div className={s.location}>
               <div>{props.user.location.city}</div>
               <div>{props.user.location.country}</div>
            </div>
         </div>
      </div>
   )
}
export default User
