import s from './Messages.module.css'
import MessageItem from './Message/MessageItem'
import DialogItem from './Dialogs/DialogItem'
import { addNewMessageCreator, updateMessageCreator } from '../../../Redux/State'
const Messages = (props) => {
   let dialogs = props.state.dialog.map((el) => <DialogItem name={el.name} surname={el.surname} image={el.image} />)
   let messages = props.state.messages.map((el) => <MessageItem message={el.message} />)
   let changeNewMessage = (e) => {
      let text = e.target.value
      props.dispatch(updateMessageCreator(text))
   }
   let addNewMessage = () => {
      props.dispatch(addNewMessageCreator())
   }
   return (
      <div className={s.messages}>
         <div className={s.dialog}>{dialogs}</div>
         <div className={s.message}>
            {messages}
            <div>
               <textarea onChange={changeNewMessage} value={props.state.newMessage} />
               <button onClick={addNewMessage}>Send</button>
            </div>
         </div>
      </div>
   )
}
export default Messages
