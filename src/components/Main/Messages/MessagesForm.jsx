import { SendOutlined } from '@ant-design/icons'
import useInput from '../../../common/Hooks/useInput'
import s from './Messages.module.css'

let MessagesForm = (props) => {
   const message = useInput('', { isEmpty: true })
   return (
      <form className={s.form} onSubmit={(e) => props.onSubmit(e, props.dialogId)}>
         <input
            className={s.textarea}
            onChange={message.onChange}
            value={message.value}
            name="message"
            placeholder="Write message"
         />
         <button disabled={!message.value} className={s.btn}>
            <SendOutlined size={40} />
         </button>
      </form>
   )
}
export default MessagesForm
