import React from 'react'
import { connect } from 'react-redux'
import { changePage, follow, unfollow, requestUsers } from '../../../Redux/usersReducer'
import Users from './Users'
import Spinner from '../../../common/Spinner'
import { compose } from 'redux'
import {
   getAmountPages,
   getCurrentPage,
   getFollowingInProgress,
   getIsFetching,
   getUsers,
} from '../../../Redux/usersSelectors'

class UsersApiComponent extends React.Component {
   componentDidMount = () => {
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)
   }
   changePage = (currentPage) => {
      this.props.requestUsers(currentPage, this.props.pageSize)
      this.props.changePage(currentPage)
   }
   render = () => <>{this.props.isFetching ? <Spinner /> : <Users {...this.props} changePage={this.changePage} />}</>
}

const MapStateToProps = (state) => {
   return {
      users: getUsers(state),
      amountPages: getAmountPages(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
   }
}
// const DispatchToProps = (dispatch) => {
//    return {
//       follow: (user_id) => {
//          dispatch(followAC(user_id))
//       },
//       unfollow: (user_id) => {
//          dispatch(unfollowAC(user_id))
//       },
//       setUsers: (users) => {
//          dispatch(setStateAC(users))
//       },
//       changePage: (page) => {
//          dispatch(changePageAC(page))
//       },
//       toggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingAC(isFetching))
//       },
//    }
// }
export default compose(
   connect(MapStateToProps, {
      follow,
      unfollow,
      changePage,
      requestUsers,
   })
)(UsersApiComponent)
