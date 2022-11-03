import { authAPI } from '../api/api'
const SET_USER_DATA = 'SET_USER_DATA'

let initState = { id: null, login: null, email: null, isAuth: false }

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case SET_USER_DATA: {
         return { ...state, ...action.data, isAuth: true }
      }
      default:
         return state
   }
}
export default authReducer
export const setAuthUserData = (data) => ({ type: SET_USER_DATA, data: data })
export const getAuth = () => (dispatch) => {
   authAPI.getAuth().then((resolve) => {
      if (resolve.resultCode === 0) {
         dispatch(setAuthUserData(resolve.data))
      }
   })
}
