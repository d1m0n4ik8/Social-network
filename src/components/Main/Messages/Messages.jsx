import React from 'react'
import s from './Messages.module.css'
import MessageItem from './Message/MessageItem'
import DialogItem from './Dialogs/DialogItem'
import MessagesForm from './MessagesForm'
const Messages = (props) => {
   let dialogs = props.dialog.map((el) => (
      <DialogItem key={el.id} name={el.name} surname={el.surname} image={el.image} />
   ))
   let messages = props.messages.map((el) => <MessageItem key={el.id} message={el.message} avatar={el.avatar} />)
   const addNewMessage = (values) => {
      props.addNewMessage(values.message)
   }
   return (
      <div className={s.messages}>
         <div className={s.dialog}>{dialogs}</div>
         <div className={s.userMessage}>
            <div className={s.message}>{messages}</div>
            <MessagesForm onSubmit={addNewMessage} />
         </div>
      </div>
   )
}
export default Messages
