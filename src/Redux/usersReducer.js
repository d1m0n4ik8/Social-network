const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_STATE = 'SET-STATE'

let initState = {
   users: [],
}
const usersReducer = (state = initState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.user_id) {
                  u.followed = true
                  return u
               }
               return u
            }),
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map((u) => {
               if (u.id === action.user_id) {
                  u.followed = false
                  return u
               }
               return u
            }),
         }
      case SET_STATE:
         return { ...state, users: [...action.users] }
      default:
         return state
   }
}

export default usersReducer

export const followAC = (user_id) => ({ type: FOLLOW, user_id })
export const unfollowAC = (user_id) => ({ type: UNFOLLOW, user_id })
export const setStateAC = (users) => ({ type: SET_STATE, users })
