import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './User.module.css'
import avatar from '../../../../assets/userAvatar.png'
import FollowButton from '../../../../common/UIcomponents/FollowButton'

const User = (props) => {
   return (
      <div className={s.user}>
         <NavLink className={s.userProfile} to={'/profile/' + props.user.id}>
            <div className={s.avatar}>
               <img src={props.user.photos.small || avatar} alt="avatar" />
            </div>
            <div className={s.fullName}>{props.user.name}</div>
         </NavLink>
         <div className={s.following}>
            <FollowButton userId={props.user.id} followed={props.user.followed} />
         </div>
         <div className={s.about}>
            <div className={s.status}>{props.user.status}</div>
         </div>
      </div>
   )
}
export default User
