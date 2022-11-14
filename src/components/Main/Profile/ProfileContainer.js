import React from 'react'
import { addPost, getProfile, getUserStatus, updateUserStatus } from '../../../Redux/profileReducer'
import Profile from './Profile'
import { connect } from 'react-redux'
import Spinner from '../../../common/Spinner'
import { withAuthRedirection } from '../../../hoc/withAuthRedirection'
import { withRouter } from '../../../hoc/withRouter'
import { compose } from 'redux'

class ProfileApiComponent extends React.Component {
   componentDidMount = () => {
      let userId = this.props.router.params.userId
      if (!userId) userId = this.props.id
      this.props.getProfile(userId)
      this.props.getUserStatus(userId)
   }
   render = () => {
      return <>{this.props.isFetching ? <Spinner /> : <Profile {...this.props} />}</>
   }
}

const MapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostMessage: state.profilePage.newPostMessage,
      isFetching: state.profilePage.isFetching,
      isAuth: state.auth.isAuth,
      status: state.profilePage.status,
      profile: state.profilePage.profile,
      id: state.auth.id,
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

export default compose(
   connect(MapStateToProps, { addPost, getProfile, getUserStatus, updateUserStatus }),
   withAuthRedirection,
   withRouter
)(ProfileApiComponent)
