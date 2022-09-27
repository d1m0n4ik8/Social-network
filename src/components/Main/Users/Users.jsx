import React from 'react'
import User from './User/User'
import s from './User.module.css'
import * as axios from 'axios'

class Users extends React.Component {
   componentDidMount() {
      axios.get('http://localhost:3001/users').then((resolve) => {
         this.props.setUsers(resolve.data)
      })
   }
   render = () => {
      let users = this.props.users.map((user) => (
         <User key={user.id} user={user} following={this.props.following} unfollowing={this.props.unfollowing} />
      ))
      return <div className={s.users}>{users}</div>
   }
}
export default Users
