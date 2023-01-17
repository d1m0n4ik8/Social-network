import { addNewMessage } from '../../../Redux/dialogReducer'
import Messages from './Messages'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getAuthProfile, getIsAuth } from '../../../Redux/authSelectors'
import { getDialogs, getNewMessage } from '../../../Redux/dialogSelector'

const MapStateToProps = (state) => ({
   dialogs: getDialogs(state),
   newMessage: getNewMessage(state),
   isAuth: getIsAuth(state),
   profile: getAuthProfile(state),
})
export default compose(connect(MapStateToProps, { addNewMessage }))(Messages)
