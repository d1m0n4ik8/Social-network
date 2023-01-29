const ADD_NEW_MESSAGE_TYPE = 'social-network/dialog/ADD-NEW-MESSAGE'

let initState = {
   dialogs: [
      {
         id: 0,
         name: 'Rayan ',
         surname: 'Gosling',
         userName: '@rayan_gosling',
         image: 'https://www.usmagazine.com/wp-content/uploads/2022/10/Ken-Who-Ryan-Gosling-Unrecognizable-While-Filming-New-80s-Film-Photos-001.jpg?w=1600&quality=86&strip=all',
         messages: [
            {
               id: 0,
               message: 'Hello, Dima',
               fromMe: false,
            },
            {
               id: 1,
               message: 'How are you?',
               fromMe: false,
            },
            {
               id: 2,
               message: 'What do you do?',
               fromMe: false,
            },
            {
               id: 3,
               message: '😊😊😊',
               fromMe: false,
            },
            {
               id: 4,
               message: '😊😊😊',
               fromMe: false,
            },
            {
               id: 5,
               message: '😊😊😊',
               fromMe: false,
            },
         ],
      },
      {
         id: 1,
         name: 'Alexandra ',
         surname: 'Daddario',
         userName: '@alexandra_daddario',
         image: 'https://i.pinimg.com/736x/1d/57/11/1d5711984bbf16352b0874b078f7497f.jpg',
         messages: [
            { id: 0, message: 'Hi', fromMe: false },
            {
               id: 1,
               message: 'Lets go to the cinema?',
               fromMe: false,
            },
            {
               id: 2,
               message: 'At 20:00',
               fromMe: false,
            },
            {
               id: 3,
               message: '😘',
               fromMe: false,
            },
         ],
      },
      {
         id: 2,
         name: 'Robert ',
         surname: 'Downey jr',
         userName: '@robert_downey.jr',
         image: 'https://www.californiamuseum.org/sites/main/files/imagecache/lightbox/main-images/robertdowneyjr_cahalloffameinductee.png',
         messages: [
            {
               id: 0,
               message: "What's up broooo",
               fromMe: false,
            },
            {
               id: 1,
               message: 'Call me',
               fromMe: false,
            },
            {
               id: 2,
               message: 'My number: 0974473766',
               fromMe: false,
            },
         ],
      },
      {
         id: 3,
         name: 'Dwayne ',
         surname: 'Johnson',
         userName: '@dwayne_johnson',
         image: 'https://cdn.britannica.com/60/222660-050-064DBA89/Dwayne-Johnson-AKA-The-Rock-2019.jpg?w=400&h=300&c=crop',
         messages: [
            { id: 0, message: 'HEY!', fromMe: false },
            {
               id: 1,
               message: 'How is your mood',
               fromMe: false,
            },
            {
               id: 2,
               message: "I'm fine, and you?",
               fromMe: false,
            },
         ],
      },
      {
         id: 4,
         name: 'Bella',
         surname: 'Poarch',
         userName: '@bella_poarch',
         image: 'https://assets.popbuzz.com/2020/37/where-does-bella-poarch-live-1600355145-view-1.jpg',
         messages: [
            { id: 0, message: 'Hi 😊', fromMe: false },
            {
               id: 1,
               message: 'How are you?',
               fromMe: false,
            },
         ],
      },
   ],
}
const dialogReducer = (state = initState, action) => {
   switch (action.type) {
      case ADD_NEW_MESSAGE_TYPE: {
         let message = {
            id: state.dialogs[action.dialogId].messages.length,
            message: action.newMessage,
            fromMe: true,
            image: action.photo,
         }
         return {
            ...state,
            dialogs: [
               ...state.dialogs.map((dialog) =>
                  dialog.id === action.dialogId ? { ...dialog, messages: [...dialog.messages, message] } : dialog
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
