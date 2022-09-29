import { connect } from 'react-redux'
import { changePageAC, followAC, setStateAC, unfollowAC } from '../../../Redux/usersReducer'
import Users from './Users'
const MapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      currentPage: state.usersPage.currentPage,
      amountPages: state.usersPage.amountPages,
   }
}
const DispatchToProps = (dispatch) => {
   return {
      following: (user_id) => {
         dispatch(followAC(user_id))
      },
      unfollowing: (user_id) => {
         dispatch(unfollowAC(user_id))
      },
      setUsers: (users) => {
         dispatch(setStateAC(users))
      },
      changePage: (page) => {
         dispatch(changePageAC(page))
      },
   }
}

const UsersContainer = connect(MapStateToProps, DispatchToProps)(Users)
export default UsersContainer
