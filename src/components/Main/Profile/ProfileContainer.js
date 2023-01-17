import React, { useEffect } from 'react'
import {
   addPost,
   requestProfile,
   getUserStatus,
   updateUserStatus,
   deletePost,
   increaseLikesCount,
   decreaseLikesCount,
   savePhoto,
   saveProfileInfo,
} from '../../../Redux/profileReducer'
import Profile from './Profile'
import { connect } from 'react-redux'
import Spinner from '../../../common/UIcomponents/Spinner'
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

const ProfileApiComponent = (props) => {
   let userId = props.router.params.userId
   let allowChange = false
   const { requestProfile, getUserStatus } = props
   if (!userId) {
      userId = props.id
      allowChange = true
   }
   useEffect(() => {
      requestProfile(userId)
      getUserStatus(userId)
   }, [userId, requestProfile, getUserStatus])
   return <>{props.isFetching ? <Spinner /> : <Profile {...props} allowChange={allowChange} />}</>
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
   connect(MapStateToProps, {
      addPost,
      deletePost,
      increaseLikesCount,
      decreaseLikesCount,
      requestProfile,
      getUserStatus,
      updateUserStatus,
      savePhoto,
      saveProfileInfo,
   }),
   withRouter
)(ProfileApiComponent)
