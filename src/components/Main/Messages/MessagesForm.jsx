import s from './Messages.module.css'

let MessagesForm = (props) => {
   return (
      <form className={s.form} onSubmit={props.handleSubmit}>
         <input className={s.textarea} name="message" placeholder="Write message" />
         <button className={s.btn}>Send</button>
      </form>
   )
}
export default MessagesForm
