const addNewMessageType = 'ADD-NEW-MESSAGE'
const updateMessageType = 'UPDATE-NEW-MESSAGE'
let initState = {
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
}
const dialogReducer = (state = initState, action) => {
   switch (action.type) {
      case addNewMessageType: {
         let message = {
            id: state.messages.length,
            message: state.newMessage,
         }
         return { ...state, messages: [...state.messages, message] }
      }
      case updateMessageType:
         return { ...state, newMessage: action.message }
      default:
         return state
   }
}

export default dialogReducer
export const addNewMessageCreator = () => ({ type: addNewMessageType })
export const updateMessageCreator = (message) => ({ type: updateMessageType, message: message })
