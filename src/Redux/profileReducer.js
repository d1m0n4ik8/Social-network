import { profileAPI } from '../api/api'
const ADD_POST_TYPE = 'social-network/profile/ADD-NEW-POST'
const SET_PROFILE = 'social-network/profile/SET_PROFILE'
const TOGGLE_IS_FETCHING = 'social-network/profile/TOGGLE_IS_FETCHING'
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS'
const INCREASE_LIKES_COUNT = 'social-network/profile/INCREASE_LIKES_COUNT'
const DECREASE_LIKES_COUNT = 'social-network/profile/DECREASE_LIKES_COUNT'
const DELETE_POST = 'social-network/profile/DELETE_POST'
const ADD_COMMENT = 'social-network/profile/ADD_COMMENT'
const SET_PROFILE_PHOTOS = 'social-network/profile/SET_PROFILE_PHOTOS'

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
      {
         id: 0,
         image: 'https://cdn-icons-png.flaticon.com/512/147/147130.png',
         message: 'Hello, how are you?',
         likesCount: 0,
         comments: ['Cool', 'Beautiful', 'Amazing'],
         liked: false,
      },
      {
         id: 1,
         image: 'https://cdn-icons-png.flaticon.com/512/147/147131.png',
         message: "Hello, I'm fine, and you?",
         likesCount: 0,
         comments: ['Cool', 'Beautiful', 'Amazing'],
         liked: false,
      },
      {
         id: 2,
         image: 'https://cdn-icons-png.flaticon.com/512/147/147132.png',
         message: "I'm OK",
         likesCount: 0,
         comments: ['Cool', 'Beautiful', 'Amazing'],
         liked: false,
      },
   ],
   isFetching: false,
   status: '',
}
const profileReducer = (state = initState, action) => {
   switch (action.type) {
      case ADD_POST_TYPE: {
         let post = {
            id: state.posts.length,
            image: `https://cdn-icons-png.flaticon.com/512/147/14713${state.posts.length}.png`,
            message: action.message,
            likesCount: 0,
            comments: ['Cool', 'Beautiful', 'Amazing'],
            liked: false,
         }
         return { ...state, posts: [...state.posts, post] }
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
      case INCREASE_LIKES_COUNT:
         return {
            ...state,
            posts: [
               ...state.posts.map((p) =>
                  p.id === action.postId ? { ...p, likesCount: p.likesCount + 1, liked: true } : p
               ),
            ],
         }
      case DECREASE_LIKES_COUNT:
         return {
            ...state,
            posts: [
               ...state.posts.map((p) =>
                  p.id === action.postId && p.likesCount > 0 ? { ...p, likesCount: p.likesCount - 1, liked: false } : p
               ),
            ],
         }
      case DELETE_POST:
         return {
            ...state,
            posts: [...state.posts.filter((p) => p.id !== action.postId)],
         }
      case ADD_COMMENT:
         return {
            ...state,
            posts: [
               ...state.posts.map((p) =>
                  p.id === action.postId ? { ...p, comments: [...p.comments, action.comment] } : p
               ),
            ],
         }
      case SET_PROFILE_PHOTOS:
         return {
            ...state,
            profile: { ...state.profile, photos: action.photos },
         }
      default:
         return state
   }
}

export default profileReducer

export const addPost = (message) => ({ type: ADD_POST_TYPE, message })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const increaseLikesCount = (postId) => ({ type: INCREASE_LIKES_COUNT, postId })
export const decreaseLikesCount = (postId) => ({ type: DECREASE_LIKES_COUNT, postId })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const addComment = (postId, comment) => ({ type: ADD_COMMENT, postId, comment })
export const setProfilePhoto = (photos) => ({ type: SET_PROFILE_PHOTOS, photos })
export const requestProfile = (userId) => (dispatch) => {
   dispatch(toggleIsFetching(true))
   profileAPI.requestProfile(userId).then((data) => {
      dispatch(toggleIsFetching(false))
      dispatch(setProfile(data))
   })
}

export const getUserStatus = (userId) => (dispatch) => {
   profileAPI.requestStatus(userId).then((data) => {
      dispatch(setUserStatus(data))
   })
}

export const updateUserStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) dispatch(setUserStatus(status))
   })
}
export const savePhoto = (photo) => (dispatch) => {
   profileAPI.savePhoto(photo).then((data) => {
      if (data.resultCode === 0) dispatch(setProfilePhoto(data.data.photos))
   })
}
export const saveProfileInfo = (profileInfo) => (dispatch) => {
   profileAPI.updateProfileInfo(profileInfo).then((data) => {
      if (data.resultCode === 0) dispatch(setProfile(profileInfo))
   })
}
