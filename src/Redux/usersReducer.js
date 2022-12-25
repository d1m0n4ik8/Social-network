import { usersAPI } from '../api/api'
import { objArrayChangeHelper } from '../common/Helper/objChangeHelper'

const FOLLOW = 'social-network/users/FOLLOW'
const UNFOLLOW = 'social-network/users/UNFOLLOW'
const SET_STATE = 'social-network/users/SET-STATE'
const CHANGE_PAGE = 'social-network/users/CHANGE_PAGE'
const TOGGLE_IS_FETCHING = 'social-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'social-network/users/TOGGLE_FOLLOWING_PROGRESS'
const SET_TOTAL_USERS_COUNT = 'social-network/users/SET_TOTAL_USERS_COUNT'
let initState = {
   users: [],
   totalUsersCount: 0,
   pageSize: 10,
   currentPage: 1,
   isFetching: false,
   followingInProgress: [],
}

const usersReducer = (state = initState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: objArrayChangeHelper(state.users, action.user_id, 'followed', true),
         }
      case UNFOLLOW:
         return {
            ...state,
            users: objArrayChangeHelper(state.users, action.user_id, 'followed', false),
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
      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsersCount: action.totalCount }

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
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount })

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
   dispatch(toggleIsFetching(true))
   const data = await usersAPI.requestUsers(currentPage, pageSize)
   dispatch(toggleIsFetching(false))
   dispatch(setUsers(data.items))
   dispatch(setTotalUsersCount(data.totalCount))
}
export const follow = (userId) => async (dispatch) => {
   dispatch(toggleFollowingProcces(true, userId))
   const data = await usersAPI.follow(userId)
   if (data.resultCode === 0) {
      dispatch(followSuccess(userId))
      dispatch(toggleFollowingProcces(false, userId))
   }
}
export const unfollow = (userId) => async (dispatch) => {
   dispatch(toggleFollowingProcces(true, userId))
   const data = await usersAPI.unfollow(userId)
   if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId))
      dispatch(toggleFollowingProcces(false, userId))
   }
}
