const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_STATE = 'SET-STATE'
const CHANGE_PAGE = 'CHANGE_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initState = {
   users: [],
   amountPages: 10,
   pageSize: 8,
   currentPage: 1,
   isFetching: false,
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
         return { ...state, currentPage: action.currentPage }
      case TOGGLE_IS_FETCHING:
         return { ...state, isFetching: action.isFetching }
      default:
         return state
   }
}

export default usersReducer

export const follow = (user_id) => ({ type: FOLLOW, user_id })
export const unfollow = (user_id) => ({ type: UNFOLLOW, user_id })
export const setUsers = (users) => ({ type: SET_STATE, users })
export const changePage = (currentPage) => ({ type: CHANGE_PAGE, currentPage })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
