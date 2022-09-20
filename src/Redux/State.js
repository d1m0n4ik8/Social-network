const addPostType = 'ADD-NEW-POST'
const updatePostMessageType = 'UPDATE-POST'
const addNewMessageType = 'ADD-NEW-MESSAGE'
const updateMessageType = 'UPDATE-NEW-MESSAGE'
export const addPostActionCreator = () => ({ type: addPostType })
export const updateMessageActionCreator = (postMessage) => ({ type: updatePostMessageType, postMessage: postMessage })
export const addNewMessageCreator = () => ({ type: addNewMessageType })
export const updateMessageCreator = (message) => ({ type: updateMessageType, message: message })
let store = {
   _state: {
      messagesPage: {
         dialog: [
            { id: 0, name: 'Dima', surname: 'Svyryd', image: 'https://cdn-icons-png.flaticon.com/512/147/147140.png' },
            { id: 1, name: 'Max', surname: 'Bober', image: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            { id: 2, name: 'Vova', surname: 'Beresten', image: 'https://cdn-icons-png.flaticon.com/512/147/147133.png' },
         ],
         messages: [
            { id: 0, message: 'Hello' },
            { id: 1, message: 'How are you' },
            { id: 2, message: "I'm fine, and you?" },
         ],
         newMessage: '',
      },
      profilePage: {
         posts: [
            { id: 0, image: 'https://cdn-icons-png.flaticon.com/512/147/147130.png', message: 'Hello, how are you?' },
            { id: 1, image: 'https://cdn-icons-png.flaticon.com/512/147/147131.png', message: "Hello, I'm fine, and you?" },
            { id: 2, image: 'https://cdn-icons-png.flaticon.com/512/147/147132.png', message: "I'm OK" },
         ],
         newPostMessage: '',
      },
   },
   _rerenderEntireTree() {
      console.log('state update')
   },
   getstate() {
      return this._state
   },
   subscribe(observer) {
      this._rerenderEntireTree = observer
   },
   dispatch(action) {
      if (action.type === addPostType) {
         let post = {
            id: this._state.profilePage.posts.length,
            image: `https://cdn-icons-png.flaticon.com/512/147/147133.png`,
            message: this._state.profilePage.newPostMessage,
         }
         this._state.profilePage.posts.push(post)
         this._rerenderEntireTree(this._state)
      } else if (action.type === updatePostMessageType) {
         this._state.profilePage.newPostMessage = action.postMessage
         this._rerenderEntireTree(this._state)
      } else if (action.type === addNewMessageType) {
         let message = {
            id: this._state.messagesPage.messages.length,
            message: this._state.messagesPage.newMessage,
         }
         this._state.messagesPage.messages.push(message)
         this._rerenderEntireTree(this._state)
      } else if (action.type === updateMessageType) {
         this._state.messagesPage.newMessage = action.message
         this._rerenderEntireTree(this._state)
      }
   },
}
export default store
