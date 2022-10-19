import React from 'react'
import { addPost, setState, updateMessage } from '../../../Redux/profileReducer'
import Profile from './Profile'
import { connect } from 'react-redux'
import * as axios from 'axios'
import Spinner from '../../../common/Spinner'

class ProfileApiComponent extends React.Component {
   componentDidMount = () => {
      this.props.toggleIsFetching(true)
      axios.get(`http://localhost:3001/profile`).then((resolve) => {
         this.props.toggleIsFetching(false)
         this.props.setUsers(resolve.data)
      })
   }
   render = () => <>{this.props.isFetching ? <Spinner /> : <Profile />}</>
}

const MapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostMessage: state.profilePage.newPostMessage,
   }
}
// const DispatchToProps = (dispatch) => {
//    return {
//       onPostChange: (text) => {
//          dispatch(updateMessageActionCreator(text))
//       },
//       addPost: () => {
//          dispatch(addPostActionCreator())
//       },
//       setState: (posts) => {
//          dispatch(setStateAC(posts))
//       },
//    }
// }
const ProfileContainer = connect(MapStateToProps, { updateMessage, setState, addPost })(ProfileApiComponent)
export default ProfileContainer
