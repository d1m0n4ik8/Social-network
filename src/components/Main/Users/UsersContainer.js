import React from 'react'
import { connect } from 'react-redux'
import { changePage, follow, unfollow, getUsers } from '../../../Redux/usersReducer'
import Users from './Users'
import Spinner from '../../../common/Spinner'
import { compose } from 'redux'

class UsersApiComponent extends React.Component {
   componentDidMount = () => {
      this.props.getUsers(this.props.currentPage, this.props.pageSize)
   }
   changePage = (currentPage) => {
      this.props.getUsers(currentPage, this.props.pageSize)
      this.props.changePage(currentPage)
   }
   render = () => <>{this.props.isFetching ? <Spinner /> : <Users {...this.props} changePage={this.changePage} />}</>
}

const MapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      amountPages: state.usersPage.amountPages,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
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
      getUsers,
   })
)(UsersApiComponent)
