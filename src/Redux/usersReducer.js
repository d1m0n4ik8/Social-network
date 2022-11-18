import { usersAPI } from '../api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_STATE = 'SET-STATE'
const CHANGE_PAGE = 'CHANGE_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'
let initState = {
   users: [],
   amountPages: 10,
   pageSize: 8,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
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
      case TOGGLE_FOLLOWING_PROGRESS:
         return action.isFetching
            ? { ...state, followingInProgress: [...state.followingInProgress, action.userId] }
            : {
                 ...state,
                 followingInProgress: [state.followingInProgress.filter((id) => id !== action.userId)],
              }
      default:
         return state
   }
}

export default usersReducer

export const followSuccess = (user_id) => ({ type: FOLLOW, user_id })
export const unfollowSuccess = (user_id) => ({ type: UNFOLLOW, user_id })
export const setUsers = (users) => ({ type: SET_STATE, users })
export const changePage = (currentPage) => ({ type: CHANGE_PAGE, currentPage })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProcces = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId })

export const requestUsers = (currentPage, pageSize) => (dispatch) => {
   dispatch(toggleIsFetching(true))
   usersAPI.requestUsers(currentPage, pageSize).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
   })
}
export const follow = (userId) => (dispatch) => {
   dispatch(toggleFollowingProcces(true, userId))
   usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) dispatch(followSuccess(userId))
      dispatch(toggleFollowingProcces(false, userId))
   })
}
export const unfollow = (userId) => (dispatch) => {
   dispatch(toggleFollowingProcces(true, userId))
   usersAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
      dispatch(toggleFollowingProcces(false, userId))
   })
}
