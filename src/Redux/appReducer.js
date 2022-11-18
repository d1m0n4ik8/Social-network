import { getAuth } from './authReducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

let initState = { initialized: false }

const appReducer = (state = initState, action) => {
   switch (action.type) {
      case SET_INITIALIZED: {
         return { ...state, initialized: true }
      }
      default:
         return state
   }
}
export const initializedSuccess = () => ({
   type: SET_INITIALIZED,
})

export const initialization = () => (dispatch) => {
   let promise = dispatch(getAuth())
   Promise.all([promise]).then(() => {
      dispatch(initializedSuccess())
   })
}
export default appReducer
