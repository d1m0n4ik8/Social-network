import dialogReducer from './dialogReducer'
import profileReducer from './profileReducer'

let store = {
   _state: {
      messagesPage: {
         dialog: [
            { id: 0, name: 'Dima', surname: 'Svyryd', image: 'https://cdn-icons-png.flaticon.com/512/147/147140.png' },
            { id: 1, name: 'Max', surname: 'Bober', image: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
            {
               id: 2,
               name: 'Vova',
               surname: 'Beresten',
               image: 'https://cdn-icons-png.flaticon.com/512/147/147133.png',
            },
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
            {
               id: 1,
               image: 'https://cdn-icons-png.flaticon.com/512/147/147131.png',
               message: "Hello, I'm fine, and you?",
            },
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
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.messagesPage = dialogReducer(this._state.messagesPage, action)
      this._rerenderEntireTree(this._state)
   },
}
export default store
