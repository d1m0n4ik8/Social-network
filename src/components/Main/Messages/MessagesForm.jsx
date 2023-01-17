import { SendOutlined } from '@ant-design/icons'
import s from './Messages.module.css'

let MessagesForm = (props) => {
   return (
      <form className={s.form} onSubmit={(e) => props.onSubmit(e, props.dialogId)}>
         <input className={s.textarea} name="message" placeholder="Write message" />
         <button className={s.btn}>
            <SendOutlined />
         </button>
      </form>
   )
}
export default MessagesForm
