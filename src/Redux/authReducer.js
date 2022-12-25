import { authAPI, securityAPI } from '../api/api'
const SET_USER_DATA = 'social-network/auth/SET_USER_DATA'
const SET_ERROR_MESSAGE = 'social-network/auth/SET_ERROR_MESSAGE'
const SET_CAPTCH_URL = 'social-network/auth/SET_CAPTCH_URL'

let initState = { id: null, login: null, email: null, isAuth: false, errorMessage: null, captchaURL: null }

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return { ...state, ...action.data }
      }
      case SET_ERROR_MESSAGE: {
         return { ...state, errorMessage: action.errorMessage }
      }
      case SET_CAPTCH_URL: {
         return { ...state, captchaURL: action.captchaURL }
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
const setErrorMessage = (errorMessage) => ({
   type: SET_ERROR_MESSAGE,
   errorMessage,
})
const setCaptchaURL = (captchaURL) => ({
   type: SET_CAPTCH_URL,
   captchaURL,
})

export const getAuth = () => async (dispatch) => {
   const resolve = await authAPI.getAuth()
   if (resolve.resultCode === 0) {
      let { id, login, email } = resolve.data
      dispatch(setAuthUserData(id, login, email, true))
   }
}

export const login = (login, password, rememberMe, captcha) => async (dispatch) => {
   const resolve = await authAPI.login(login, password, rememberMe, captcha)
   if (resolve.resultCode === 0) {
      dispatch(getAuth())
   } else {
      if (resolve.resultCode === 10) {
         dispatch(getCaptchaURL())
      }
      let message = resolve.messages.length > 0 ? resolve.messages[0] : 'some error'
      dispatch(setErrorMessage(message))
   }
}

export const getCaptchaURL = () => async (dispatch) => {
   const resolve = await securityAPI.getCaptcha()
   dispatch(setCaptchaURL(resolve.url))
}

export const logout = () => async (dispatch) => {
   const resolve = await authAPI.logout()
   if (resolve.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
   }
}
