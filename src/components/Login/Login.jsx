import { connect } from 'react-redux'
import { login } from '../../Redux/authReducer'
import s from './Login.module.css'
import { Navigate } from 'react-router-dom'
import { getCaptchaURL, getErrorMessage, getIsAuth } from '../../Redux/authSelectors'
import useInput from '../../common/Hooks/useInput'
import SwitchTheme from '../Header/HeaderDropdown/SwitchTheme'

const Login = (props) => {
   const onSubmit = (e) => {
      e.preventDefault()
      let captcha = props.captchaURL ? e.target.captcha.value : null
      props.login(e.target.login.value, e.target.password.value, e.target.rememberMe.checked, captcha)
   }
   if (props.isAuth) return <Navigate replace to="/profile" />
   return (
      <div className={s.login__container}>
         <h1 style={{ color: 'rgb(152, 48, 248)', fontStyle: 'italic' }}>Social network</h1>
         <div>
            <h3>Login: svyryd2012@gmail.com</h3>
            <h3>Password: social</h3>
         </div>
         <LoginForm captchaURL={props.captchaURL} errorMessage={props.errorMessage} onSubmit={onSubmit} />
         <SwitchTheme theme={props.theme} setTheme={props.setTheme} />
      </div>
   )
}

let LoginForm = (props) => {
   const login = useInput('', { isEmpty: true, minLenght: 3, isEmail: true })
   const password = useInput('', { isEmpty: true, minLenght: 3 })
   const captcha = useInput('', { isEmpty: true })
   return (
      <div className={s.login}>
         <form onSubmit={props.onSubmit}>
            <div>
               <input
                  className={s.input}
                  onBlur={login.onBlur}
                  onChange={login.onChange}
                  value={login.value}
                  name="login"
                  type="text"
                  placeholder="Enter login"
               />
            </div>
            {login.isDirty && login.error ? (
               <div style={{ color: 'red', height: 25 }}>{login.error}</div>
            ) : (
               <div style={{ height: 25 }}></div>
            )}

            <div>
               <input
                  className={s.input}
                  onBlur={password.onBlur}
                  onChange={password.onChange}
                  value={password.value}
                  name="password"
                  type="text"
                  placeholder="Enter password"
               />
               {password.isDirty && password.error ? (
                  <div style={{ color: 'red', height: 25 }}>{password.error}</div>
               ) : (
                  <div style={{ height: 25 }}></div>
               )}
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
                     className={s.input}
                     onBlur={captcha.onBlur}
                     onChange={captcha.onChange}
                     value={captcha.value}
                     name="captcha"
                     type="text"
                  />
               </div>
            )}
            <button className="btn" style={{ width: '100%', marginBottom: 30 }}>
               log in
            </button>
            {props.errorMessage && <div style={{ color: 'red', marginBottom: 30 }}>{props.errorMessage}</div>}
         </form>
      </div>
   )
}

let mapStateToProps = (state) => ({
   isAuth: getIsAuth(state),
   errorMessage: getErrorMessage(state),
   captchaURL: getCaptchaURL(state),
})
export default connect(mapStateToProps, { login })(Login)
