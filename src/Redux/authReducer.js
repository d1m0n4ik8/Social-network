import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'
const SET_USER_DATA = 'SET_USER_DATA'

let initState = { id: null, login: null, email: null, isAuth: false }

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return { ...state, ...action.data }
      }
      default:
         return state
   }
}
export default authReducer
export const setAuthUserData = (id, login, email, isAuth) => ({
   type: SET_USER_DATA,
   data: { id, login, email, isAuth },
})

export const getAuth = () => (dispatch) => {
   return authAPI.getAuth().then((resolve) => {
      if (resolve.resultCode === 0) {
         let { id, login, email } = resolve.data
         dispatch(setAuthUserData(id, login, email, true))
      }
   })
}

export const login = (login, password, rememberMe) => (dispatch) => {
   authAPI.login(login, password, rememberMe).then((resolve) => {
      if (resolve.resultCode === 0) {
         dispatch(getAuth())
      } else {
         let message = resolve.messages.length > 0 ? resolve.messages[0] : 'some error'
         console.log(message)
         dispatch(stopSubmit('loginForm', { _error: message }))
      }
   })
}
export const logout = () => (dispatch) => {
   authAPI.logout().then((resolve) => {
      if (resolve.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false))
      }
   })
}
