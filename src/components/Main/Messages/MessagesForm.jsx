import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requaired } from '../../../common/Validation/Validation'
import { Textarea } from '../../../common/Validation/ValidationForm'
import s from './Messages.module.css'

const maxLength30 = maxLengthCreator(30)
let MessagesForm = (props) => {
   return (
      <form className={s.form} onSubmit={props.handleSubmit}>
         <Field
            className={s.textarea}
            name="message"
            validate={[requaired, maxLength30]}
            placeholder="Write message"
            component={Textarea}
         />
         <button className={s.btn}>Send</button>
      </form>
   )
}
MessagesForm = reduxForm({ form: 'MessageForm' })(MessagesForm)
export default MessagesForm
