import React from 'react'
import { connect } from 'react-redux'
import { changePage, follow, setUsers, toggleIsFetching, unfollow } from '../../../Redux/usersReducer'
import Users from './Users'
import * as axios from 'axios'
import Spinner from '../../../common/Spinner'

class UsersApiComponent extends React.Component {
   componentDidMount = () => {
      this.props.toggleIsFetching(true)
      axios.get(`http://localhost:3001/users?page=${this.props.currentPage}`).then((resolve) => {
         this.props.toggleIsFetching(false)
         this.props.setUsers(resolve.data)
      })
   }
   changePage = (currentPage) => {
      this.props.toggleIsFetching(true)
      axios.get(`http://localhost:3001/users?page=${currentPage}`).then((resolve) => {
         this.props.toggleIsFetching(false)
         this.props.setUsers(resolve.data)
      })
      this.props.changePage(currentPage)
   }
   render = () => (
      <>
         {this.props.isFetching ? (
            <Spinner />
         ) : (
            <Users
               users={this.props.users}
               amountPages={this.props.amountPages}
               currentPage={this.props.currentPage}
               changePage={this.changePage}
               follow={this.props.follow}
               unfollow={this.props.unfollow}
            />
         )}
      </>
   )
}

const MapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      amountPages: state.usersPage.amountPages,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
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

const UsersContainer = connect(MapStateToProps, {
   follow,
   unfollow,
   setUsers,
   changePage,
   toggleIsFetching,
})(UsersApiComponent)
export default UsersContainer
