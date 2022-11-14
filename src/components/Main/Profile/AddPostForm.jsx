import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requaired } from '../../../common/Validation/Validation'
import { Textarea } from '../../../common/Validation/ValidationForm'
import s from './Profile.module.css'
const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field className={s.textarea} validate={[requaired, maxLength10]} component={Textarea} name="postMessage" />
         <div>
            <button className={s.btn}>Add post</button>
         </div>
      </form>
   )
}
AddNewPostForm = reduxForm({ form: 'AddNewPost' })(AddNewPostForm)
export default AddNewPostForm
