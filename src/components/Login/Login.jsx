import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { maxLengthCreator, requaired } from '../../common/Validation/Validation'
import { Input } from '../../common/Validation/ValidationForm'
import { login } from '../../Redux/authReducer'
import s from './Login.module.css'
import { Navigate } from 'react-router-dom'

const Login = (props) => {
   const onSubmit = (formData) => {
      props.login(formData.login, formData.password, formData.rememberMe)
   }
   if (props.isAuth) return <Navigate replace to="/profile" />
   return (
      <div>
         <div>
            <h1>Login</h1>
         </div>
         <LoginForm onSubmit={onSubmit} />
      </div>
   )
}
const maxLength30 = maxLengthCreator(30)
let LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field placeholder="login" validate={[requaired, maxLength30]} name={'login'} component={Input} />
         </div>
         <div>
            <Field placeholder="password" validate={[requaired, maxLength30]} name={'password'} component={Input} />
         </div>
         <div className={s.rememberMe}>
            <Field name={'rememberMe'} type={'checkBox'} component={Input} />
            Remember me
         </div>
         <button>log in</button>
         {props.error && <divc className={s.summaryError}>{props.error}</divc>}
      </form>
   )
}
LoginForm = reduxForm({ form: 'loginForm' })(LoginForm)

let mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
})
export default connect(mapStateToProps, { login })(Login)
