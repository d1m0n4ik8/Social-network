import React from 'react'
import { connect } from 'react-redux'
import { changePageAC, followAC, setStateAC, unfollowAC } from '../../../Redux/usersReducer'
import Users from './Users'
import * as axios from 'axios'

class UsersApiComponent extends React.Component {
   componentDidMount() {
      axios.get(`http://localhost:3001/users?page=${this.props.currentPage}`).then((resolve) => {
         this.props.setUsers(resolve.data)
      })
   }
   changePage = (currentPage) => {
      axios.get(`http://localhost:3001/users?page=${currentPage}`).then((resolve) => {
         this.props.setUsers(resolve.data)
      })
      this.props.changePage(currentPage)
   }
   render = () => (
      <Users
         users={this.props.users}
         amountPages={this.props.amountPages}
         currentPage={this.props.currentPage}
         changePage={this.changePage}
         following={this.props.following}
         unfollowing={this.props.unfollowing}
      />
   )
}

const MapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      amountPages: state.usersPage.amountPages,
      currentPage: state.usersPage.currentPage,
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

const UsersContainer = connect(MapStateToProps, DispatchToProps)(UsersApiComponent)
export default UsersContainer
