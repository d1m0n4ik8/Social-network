import { addNewMessageCreator, updateMessageCreator } from '../../../Redux/dialogReducer'
import Messages from './Messages'
import { connect } from 'react-redux'

const MapStateToProps = (state) => {
   return {
      dialog: state.dialogPage.dialog,
      messages: state.dialogPage.messages,
      newMessage: state.dialogPage.newMessage,
   }
}
const MapDispatchToProps = (dispatch) => {
   return {
      changeNewMessage: (text) => {
         dispatch(updateMessageCreator(text))
      },
      addNewMessage: () => {
         dispatch(addNewMessageCreator())
      },
   }
}
const MessagesContainer = connect(MapStateToProps, MapDispatchToProps)(Messages)
export default MessagesContainer
