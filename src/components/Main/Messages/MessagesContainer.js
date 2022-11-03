import { addNewMessageCreator, updateMessageCreator } from '../../../Redux/dialogReducer'
import Messages from './Messages'
import { connect } from 'react-redux'
import { withAuthRedirection } from '../../../hoc/withAuthRedirection'

const MapStateToProps = (state) => {
   return {
      dialog: state.dialogPage.dialog,
      messages: state.dialogPage.messages,
      newMessage: state.dialogPage.newMessage,
      isAuth: state.auth.isAuth,
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

const MessagesContainer = withAuthRedirection(connect(MapStateToProps, MapDispatchToProps)(Messages))
export default MessagesContainer
