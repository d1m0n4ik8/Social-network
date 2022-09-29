import React from 'react'
import s from './MessageItem.module.css'
const Message = (props) => {
   return (
      <div className={s.message}>
         <img src={props.avatar} alt="avatar" />
         <div>{props.message}</div>
      </div>
   )
}
export default Message
