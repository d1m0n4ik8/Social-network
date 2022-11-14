import { addNewMessage } from '../../../Redux/dialogReducer'
import Messages from './Messages'
import { connect } from 'react-redux'
import { withAuthRedirection } from '../../../hoc/withAuthRedirection'
import { compose } from 'redux'

const MapStateToProps = (state) => {
   return {
      dialog: state.dialogPage.dialog,
      messages: state.dialogPage.messages,
      newMessage: state.dialogPage.newMessage,
      isAuth: state.auth.isAuth,
   }
}
export default compose(connect(MapStateToProps, { addNewMessage }), withAuthRedirection)(Messages)
