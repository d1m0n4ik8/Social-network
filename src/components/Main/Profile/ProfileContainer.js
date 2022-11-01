import React from 'react'
import { addPost, setState, updateMessage, toggleIsFetching } from '../../../Redux/profileReducer'
import Profile from './Profile'
import { connect } from 'react-redux'
import Spinner from '../../../common/Spinner'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { profileAPI } from '../../../api/api'

class ProfileApiComponent extends React.Component {
   componentDidMount = () => {
      let userId = this.props.router.params.userId
      if (!userId) userId = 2
      this.props.toggleIsFetching(true)
      profileAPI.getProfile(userId).then((data) => {
         this.props.toggleIsFetching(false)
         this.props.setState(data)
      })
   }
   render = () => <>{this.props.isFetching ? <Spinner /> : <Profile {...this.props} />}</>
}

const MapStateToProps = (state) => {
   return {
      posts: state.profilePage.posts,
      newPostMessage: state.profilePage.newPostMessage,
      isFetching: state.profilePage.isFetching,
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

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation()
      let navigate = useNavigate()
      let params = useParams()
      return <Component {...props} router={{ location, navigate, params }} />
   }

   return ComponentWithRouterProp
}
const ProfileApiWithRouter = withRouter(ProfileApiComponent)
const ProfileContainer = connect(MapStateToProps, { updateMessage, setState, addPost, toggleIsFetching })(
   ProfileApiWithRouter
)
export default ProfileContainer
