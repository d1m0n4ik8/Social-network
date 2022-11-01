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
