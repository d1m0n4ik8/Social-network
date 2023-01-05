import { profileAPI } from '../api/api'
import { getAuth } from './authReducer'
const ADD_POST_TYPE = 'social-network/profile/ADD-NEW-POST'
const SET_PROFILE = 'social-network/profile/SET_PROFILE'
const TOGGLE_IS_FETCHING = 'social-network/profile/TOGGLE_IS_FETCHING'
const SET_USER_STATUS = 'social-network/profile/SET_USER_STATUS'
const INCREASE_LIKES_COUNT = 'social-network/profile/INCREASE_LIKES_COUNT'
const DECREASE_LIKES_COUNT = 'social-network/profile/DECREASE_LIKES_COUNT'
const DELETE_POST = 'social-network/profile/DELETE_POST'
const ADD_COMMENT = 'social-network/profile/ADD_COMMENT'
const SET_PROFILE_PHOTOS = 'social-network/profile/SET_PROFILE_PHOTOS'
const SET_FOLLOWED = 'social-network/profile/SET_FOLLOWED'

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
      followed: false,
   },
   posts: [
      {
         id: 0,
         image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
         message: 'Beautiful',
         likesCount: 0,
         comments: ['Cool', 'Beautiful', 'Amazing'],
         liked: false,
      },
      {
         id: 1,
         image: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
         message: 'Fall',
         likesCount: 0,
         comments: ['Cool', 'Beautiful', 'Amazing'],
         liked: false,
      },
      {
         id: 2,
         image: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg',
         message: 'Lake',
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
            image: `https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_960_720.jpg`,
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
      case SET_FOLLOWED:
         return {
            ...state,
            profile: { ...state.profile, followed: action.followed },
         }
      default:
         return state
   }
}

export default profileReducer

export const addPost = (message) => ({ type: ADD_POST_TYPE, message })
export const setProfile = (profile) => ({ type: SET_PROFILE, profile })
export const setFollowed = (followed) => ({ type: SET_FOLLOWED, followed })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const increaseLikesCount = (postId) => ({ type: INCREASE_LIKES_COUNT, postId })
export const decreaseLikesCount = (postId) => ({ type: DECREASE_LIKES_COUNT, postId })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const addComment = (postId, comment) => ({ type: ADD_COMMENT, postId, comment })
export const setProfilePhoto = (photos) => ({ type: SET_PROFILE_PHOTOS, photos })

export const requestProfile = (userId) => async (dispatch) => {
   dispatch(toggleIsFetching(true))
   const data = await profileAPI.requestProfile(userId)
   dispatch(toggleIsFetching(false))
   dispatch(setProfile(data))
   const followed = await profileAPI.getFollowed(userId)
   dispatch(setFollowed(followed))
}

export const getUserStatus = (userId) => async (dispatch) => {
   const data = await profileAPI.requestStatus(userId)
   dispatch(setUserStatus(data))
}

export const updateUserStatus = (status) => async (dispatch) => {
   const data = await profileAPI.updateStatus(status)
   if (data.resultCode === 0) dispatch(setUserStatus(status))
}
export const savePhoto = (photo) => async (dispatch) => {
   const data = await profileAPI.savePhoto(photo)
   if (data.resultCode === 0) {
      dispatch(setProfilePhoto(data.data.photos))
      dispatch(getAuth())
   }
}
export const saveProfileInfo = (profileInfo) => async (dispatch) => {
   const data = await profileAPI.updateProfileInfo(profileInfo)
   if (data.resultCode === 0) dispatch(setProfile(profileInfo))
}
