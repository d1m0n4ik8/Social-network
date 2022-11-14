const ADD_NEW_MESSAGE_TYPE = 'ADD-NEW-MESSAGE'

let initState = {
   dialog: [
      { id: 0, name: 'Dima', surname: 'Svyryd', image: 'https://cdn-icons-png.flaticon.com/512/147/147140.png' },
      { id: 1, name: 'Max', surname: 'Bober', image: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
      { id: 2, name: 'Vova', surname: 'Beresten', image: 'https://cdn-icons-png.flaticon.com/512/147/147133.png' },
   ],
   messages: [
      { id: 0, message: 'Hello', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147140.png' },
      { id: 1, message: 'How are you', avatar: 'https://cdn-icons-png.flaticon.com/512/147/147140.png' },
      { id: 2, message: "I'm fine, and you?", avatar: 'https://cdn-icons-png.flaticon.com/512/147/147140.png' },
   ],
}
const dialogReducer = (state = initState, action) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE_TYPE: {
         let message = {
            id: state.messages.length,
            message: action.newMessage,
            avatar: 'https://cdn-icons-png.flaticon.com/512/147/147140.png',
         }
         return { ...state, messages: [...state.messages, message] }
      }
      default:
         return state
   }
}

export default dialogReducer
export const addNewMessage = (newMessage) => ({ type: ADD_NEW_MESSAGE_TYPE, newMessage })
