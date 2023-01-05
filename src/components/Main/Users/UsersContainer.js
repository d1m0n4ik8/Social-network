import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { changePage, requestUsers } from '../../../Redux/usersReducer'
import Users from './Users'
import { compose } from 'redux'
import { getTotalUsersCount, getCurrentPage, getIsFetching, getPageSize, getUsers } from '../../../Redux/usersSelectors'

const UsersApiComponent = (props) => {
   let { requestUsers, currentPage, pageSize } = props
   useEffect(() => {
      requestUsers(currentPage, pageSize)
   }, [requestUsers, currentPage, pageSize])
   const changePage = (currentPage) => {
      props.changePage(currentPage)
   }
   return <Users {...props} changePage={changePage} />
}

const MapStateToProps = (state) => {
   return {
      users: getUsers(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      pageSize: getPageSize(state),
      isFetching: getIsFetching(state),
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
      changePage,
      requestUsers,
   })
)(UsersApiComponent)
