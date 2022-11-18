import React from 'react'
import { addPost, requestProfile, getUserStatus, updateUserStatus } from '../../../Redux/profileReducer'
import Profile from './Profile'
import { connect } from 'react-redux'
import Spinner from '../../../common/Spinner'
import { withAuthRedirection } from '../../../hoc/withAuthRedirection'
import { withRouter } from '../../../hoc/withRouter'
import { compose } from 'redux'
import {
   getId,
   getIsFetching,
   getNewPostMessage,
   getPosts,
   getProfile,
   getStatus,
} from '../../../Redux/profileSelectors'
import { getIsAuth } from '../../../Redux/authSelectors'

class ProfileApiComponent extends React.Component {
   componentDidMount = () => {
      let userId = this.props.router.params.userId
      if (!userId) userId = this.props.id
      this.props.requestProfile(userId)
      this.props.getUserStatus(userId)
   }
   render = () => {
      return <>{this.props.isFetching ? <Spinner /> : <Profile {...this.props} />}</>
   }
}

const MapStateToProps = (state) => {
   return {
      posts: getPosts(state),
      newPostMessage: getNewPostMessage(state),
      isFetching: getIsFetching(state),
      isAuth: getIsAuth(state),
      status: getStatus(state),
      profile: getProfile(state),
      id: getId(state),
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
   connect(MapStateToProps, { addPost, requestProfile, getUserStatus, updateUserStatus }),
   withAuthRedirection,
   withRouter
)(ProfileApiComponent)
