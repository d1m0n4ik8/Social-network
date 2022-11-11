import React from 'react'
import { Field, reduxForm } from 'redux-form'
const Login = () => {
   const onSubmit = (formData) => {
      console.log(formData)
   }
   return (
      <div>
         <div>
            <h1>Login</h1>
         </div>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   )
}
class LoginForm extends React.Component {
   render() {
      return (
         <>
            <form onSubmit={this.props.handleSubmit}>
               <div>
                  <Field placeholder="login" name={'login'} component={'input'} />
               </div>
               <div>
                  <Field placeholder="password" name={'password'} component={'input'} />
               </div>
               <div>
                  <Field name={'rememberMe'} type={'checkBox'} component={'input'} />
                  Remember me
               </div>
               <button>log in</button>
            </form>
         </>
      )
   }
}
const LoginReduxForm = reduxForm({ form: 'loginForm' })(LoginForm)

export default Login
