import { getAuth } from './authReducer'

const SET_INITIALIZED = 'social-network/app/SET_INITIALIZED'
const CHANGE_THEME = 'social-network/app/CHANGE_THEME'

let initState = { initialized: true, theme: 'dark' }
const dark = {
   colorPrimary: '#d3d3d3',
   background: '#191919',
   borderRadius: '10px',
}
const light = {
   colorPrimary: '#050505',
   background: '#fff',
   borderRadius: '10px',
}
const appReducer = (state = initState, action) => {
   switch (action.type) {
      case SET_INITIALIZED: {
         return { ...state, initialized: true }
      }
      case CHANGE_THEME: {
         return { ...state, theme: action.theme === 'dark' ? dark : light }
      }
      default:
         return state
   }
}
export const initializedSuccess = () => ({
   type: SET_INITIALIZED,
})
export const changeTheme = (theme) => ({
   type: CHANGE_THEME,
   theme,
})

export const initialization = () => (dispatch) => {
   let promise = dispatch(getAuth())
   Promise.all([promise]).then(() => {
      dispatch(initializedSuccess())
   })
}
export default appReducer
