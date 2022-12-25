import { addNewMessage } from '../../../Redux/dialogReducer'
import Messages from './Messages'
import { connect } from 'react-redux'
import { withAuthRedirection } from '../../../hoc/withAuthRedirection'
import { compose } from 'redux'
import { getIsAuth } from '../../../Redux/authSelectors'
import { getDialog, getMessages, getNewMessage } from '../../../Redux/dialogSelector'

const MapStateToProps = (state) => ({
   dialog: getDialog(state),
   messages: getMessages(state),
   newMessage: getNewMessage(state),
   isAuth: getIsAuth(state),
})
export default compose(connect(MapStateToProps, { addNewMessage }), withAuthRedirection)(Messages)
