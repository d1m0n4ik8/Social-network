import { profileAPI } from '../api/api'
const ADD_POST_TYPE = 'ADD-NEW-POST'
const UPDATE_POST_TEXT_TYPE = 'UPDATE-POST'
const SET_PROFILE = 'SET_PROFILE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initState = {
   profile: {
      aboutMe: '',
      contacts: {
         facebook: null,
         website: null,
         vk: null,
         twitter: null,
         instagram: null,
         youtube: null,
         github: null,
         mainLink: null,
      },
      lookingForAJob: false,
      lookingForAJobDescription: null,
      fullName: null,
      userId: 0,
      photos: {
         small: null,
         large: null,
      },
   },
   posts: [
      { id: 0, image: 'https://cdn-icons-png.flaticon.com/512/147/147130.png', message: 'Hello, how are you?' },
      { id: 1, image: 'https://cdn-icons-png.flaticon.com/512/147/147131.png', message: "Hello, I'm fine, and you?" },
      { id: 2, image: 'https://cdn-icons-png.flaticon.com/512/147/147132.png', message: "I'm OK" },
   ],
   newPostMessage: '',
   isFetching: false,
   status: '',
}
const profileReducer = (state = initState, action) => {
   switch (action.type) {
      case ADD_POST_TYPE: {
         let post = {
            id: state.posts.length,
            image: `https://cdn-icons-png.flaticon.com/512/147/14713${state.posts.length}.png`,
            message: state.newPostMessage,
         }
         return { ...state, posts: [...state.posts, post] }
      }
      case UPDATE_POST_TEXT_TYPE: {
         return { ...state, newPostMessage: action.postMessage }
      }
      case SET_PROFILE:
         return {
            ...state,
            profile: action.profile,
         }
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching,
         }
      case SET_USER_STATUS:
         return {
            ...state,
            status: action.status,
         }
      default:
         return state
   }
}

export default profileReducer

export const addPost = () => ({ type: ADD_POST_TYPE })
export const updateMessage = (postMessage) => ({ type: UPDATE_POST_TEXT_TYPE, postMessage })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getProfile = (userId) => (dispatch) => {
   dispatch(toggleIsFetching(true))
   profileAPI.getProfile(userId).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setProfile(data))
   })
}

export const getUserStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId).then((data) => {
      dispatch(setUserStatus(data))
   })
}

export const updateUserStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) dispatch(setUserStatus(status))
   })
}
