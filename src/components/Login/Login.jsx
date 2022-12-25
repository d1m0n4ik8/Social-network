import { connect } from 'react-redux'
import { login } from '../../Redux/authReducer'
import s from './Login.module.css'
import { Navigate } from 'react-router-dom'
import { getCaptchaURL, getErrorMessage, getIsAuth } from '../../Redux/authSelectors'
import useInput from '../../common/Hooks/useInput'

const Login = (props) => {
   const onSubmit = (e) => {
      e.preventDefault()
      let captcha = props.captchaURL ? e.target.captcha.value : null
      props.login(e.target.login.value, e.target.password.value, e.target.rememberMe.checked, captcha)
   }
   if (props.isAuth) return <Navigate replace to="/profile" />
   return (
      <div>
         <div>
            <h1>Login</h1>
         </div>
         <LoginForm captchaURL={props.captchaURL} errorMessage={props.errorMessage} onSubmit={onSubmit} />
      </div>
   )
}

let LoginForm = (props) => {
   const login = useInput('', { isEmpty: true, minLenght: 3, isEmail: true })
   const password = useInput('', { isEmpty: true, minLenght: 3 })
   const captcha = useInput('', { isEmpty: true })
   return (
      <form onSubmit={props.onSubmit}>
         {props.errorMessage && <div style={{ color: 'red' }}>{props.errorMessage}</div>}
         <div>
            <input onBlur={login.onBlur} onChange={login.onChange} value={login.value} name="login" type="text" />
         </div>
         {login.isDirty && login.error && <div style={{ color: 'red' }}>{login.error}</div>}
         <div>
            <input
               onBlur={password.onBlur}
               onChange={password.onChange}
               value={password.value}
               name="password"
               type="text"
            />
            {password.isDirty && password.error && <div style={{ color: 'red' }}>{password.error}</div>}
         </div>
         <div className={s.rememberMe}>
            <input name="rememberMe" type="checkBox" />
            Remember me
         </div>
         {props.captchaURL && (
            <div>
               <div>
                  <img src={props.captchaURL} alt="captch" />
               </div>
               <input
                  onBlur={captcha.onBlur}
                  onChange={captcha.onChange}
                  value={captcha.value}
                  name="captcha"
                  type="text"
               />
            </div>
         )}
         <button>log in</button>
      </form>
   )
}

let mapStateToProps = (state) => ({
   isAuth: getIsAuth(state),
   errorMessage: getErrorMessage(state),
   captchaURL: getCaptchaURL(state),
})
export default connect(mapStateToProps, { login })(Login)
