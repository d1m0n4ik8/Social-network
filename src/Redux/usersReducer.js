const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_STATE = 'SET-STATE'
const CHANGE_PAGE = 'CHANGE_PAGE'

let initState = {
   users: [],
   currentPage: 1,
   amountPages: 3,
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
      case CHANGE_PAGE:
         return { ...state, currentPage: action.page }
      default:
         return state
   }
}

export default usersReducer

export const followAC = (user_id) => ({ type: FOLLOW, user_id })
export const unfollowAC = (user_id) => ({ type: UNFOLLOW, user_id })
export const setStateAC = (users) => ({ type: SET_STATE, users })
export const changePageAC = (page) => ({ type: SET_STATE, page })
