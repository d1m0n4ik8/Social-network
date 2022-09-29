import React from 'react'
import s from './Messages.module.css'
import MessageItem from './Message/MessageItem'
import DialogItem from './Dialogs/DialogItem'
const Messages = (props) => {
   let dialogs = props.dialog.map((el) => (
      <DialogItem key={el.id} name={el.name} surname={el.surname} image={el.image} />
   ))
   let messages = props.messages.map((el) => <MessageItem key={el.id} message={el.message} avatar={el.avatar} />)
   let changeNewMessage = (e) => {
      let text = e.target.value
      props.changeNewMessage(text)
   }
   return (
      <div className={s.messages}>
         <div className={s.dialog}>{dialogs}</div>
         <div className={s.userMessage}>
            <div className={s.message}>{messages}</div>
            <div className={s.send}>
               <textarea
                  className={s.textarea}
                  placeholder="Write message"
                  onChange={changeNewMessage}
                  value={props.newMessage}
               />
               <button className={s.btn} onClick={props.addNewMessage}>
                  Send
               </button>
            </div>
         </div>
      </div>
   )
}
export default Messages
