const ADD_NEW_MESSAGE_TYPE = 'social-network/dialog/ADD-NEW-MESSAGE'

let initState = {
   dialogs: [
      {
         id: 0,
         name: 'Dima',
         surname: 'Svyryd',
         image: 'https://cdn-icons-png.flaticon.com/512/147/147140.png',
         messages: ['Hello', 'How are you', "I'm fine, and you?"],
      },
      {
         id: 1,
         name: 'Max',
         surname: 'Bober',
         image: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
         messages: ['Hello', 'How are you', "I'm fine, and you?"],
      },
      {
         id: 2,
         name: 'Vova',
         surname: 'Beresten',
         image: 'https://cdn-icons-png.flaticon.com/512/147/147133.png',
         messages: ['Hello', 'How are you', "I'm fine, and you?"],
      },
   ],
}
const dialogReducer = (state = initState, action) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE_TYPE: {
         let message = {
            id: state.dialogs.messages.length,
            message: action.newMessage,
            avatar: action.photo,
         }
         return {
            ...state,
            dialogs: [
               ...state.dialogs.map(
                  (dialog) =>
                     (dialog.id = action.dialogId ? { ...dialog, messages: [...dialog.messages, message] } : dialog)
               ),
            ],
         }
      }
      default:
         return state
   }
}

export default dialogReducer
export const addNewMessage = (newMessage, dialogId, photo) => ({
   type: ADD_NEW_MESSAGE_TYPE,
   newMessage,
   dialogId,
   photo,
})
