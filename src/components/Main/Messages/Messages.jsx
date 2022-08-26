import s from './Messages.module.css'
import MessageItem from './Message/MessageItem'
import DialogItem from './Dialogs/DialogItem'
const Messages = (props) => {
   let dialogs = props.state.dialog.map((el) => <DialogItem name={el.name} surname={el.surname} image={el.image} />)
   let messages = props.state.messages.map((el) => <MessageItem message={el.message} />)
   return (
      <div className={s.messages}>
         <div className={s.dialog}>{dialogs}</div>
         <div className={s.message}>{messages}</div>
      </div>
   )
}
export default Messages
