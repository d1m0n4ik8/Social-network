import { addPostActionCreator, updateMessageActionCreator } from '../../../Redux/profileReducer'
import Profile from './Profile'
import { connect } from 'react-redux'

const MapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostMessage: state.profilePage.newPostMessage,
   }
}
const DispatchToProps = (dispatch) => {
   return {
      onPostChange: (text) => {
         dispatch(updateMessageActionCreator(text))
      },
      addPost: () => {
         dispatch(addPostActionCreator())
      },
   }
}
const ProfileContainer = connect(MapStateToProps, DispatchToProps)(Profile)
export default ProfileContainer
