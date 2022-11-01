const ADD_POST_TYPE = 'ADD-NEW-POST'
const UPDATE_POST_TEXT_TYPE = 'UPDATE-POST'
const SET_STATE = 'SET_STATE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initState = {
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
   posts: [
      { id: 0, image: 'https://cdn-icons-png.flaticon.com/512/147/147130.png', message: 'Hello, how are you?' },
      { id: 1, image: 'https://cdn-icons-png.flaticon.com/512/147/147131.png', message: "Hello, I'm fine, and you?" },
      { id: 2, image: 'https://cdn-icons-png.flaticon.com/512/147/147132.png', message: "I'm OK" },
   ],
   newPostMessage: '',
   isFetching: false,
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
      case SET_STATE:
         return {
            ...state,
            ...action.state,
         }
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching,
         }
      default:
         return state
   }
}

export default profileReducer

export const addPost = () => ({ type: ADD_POST_TYPE })
export const updateMessage = (postMessage) => ({ type: UPDATE_POST_TEXT_TYPE, postMessage })
export const setState = (state) => ({ type: SET_STATE, state })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
