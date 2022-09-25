const addPostType = 'ADD-NEW-POST'
const updatePostMessageType = 'UPDATE-POST'
let initState = {
   posts: [
      { id: 0, image: 'https://cdn-icons-png.flaticon.com/512/147/147130.png', message: 'Hello, how are you?' },
      { id: 1, image: 'https://cdn-icons-png.flaticon.com/512/147/147131.png', message: "Hello, I'm fine, and you?" },
      { id: 2, image: 'https://cdn-icons-png.flaticon.com/512/147/147132.png', message: "I'm OK" },
   ],
   newPostMessage: '',
}
const profileReducer = (state = initState, action) => {
   switch (action.type) {
      case addPostType: {
         let post = {
            id: state.posts.length,
            image: `https://cdn-icons-png.flaticon.com/512/147/147133.png`,
            message: state.newPostMessage,
         }
         return { ...state, posts: [...state.posts, post] }
      }
      case updatePostMessageType: {
         return { ...state, newPostMessage: action.postMessage }
      }
      default:
         return state
   }
}

export default profileReducer

export const addPostActionCreator = () => ({ type: addPostType })
export const updateMessageActionCreator = (postMessage) => ({ type: updatePostMessageType, postMessage: postMessage })
