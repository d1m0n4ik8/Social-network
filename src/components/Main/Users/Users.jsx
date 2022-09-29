import React from 'react'
import User from './User/User'
import s from './User.module.css'
import * as axios from 'axios'

class Users extends React.Component {
   componentDidMount() {
      axios.get(`http://localhost:3001/users?page=${this.props.currentPage}`).then((resolve) => {
         this.props.setUsers(resolve.data)
      })
   }
   render = () => {
      let users = this.props.users.map((user) => (
         <User key={user.id} user={user} following={this.props.following} unfollowing={this.props.unfollowing} />
      ))
      let pages = []
      for (let i = 1; i <= this.props.amountPages; i++) {
         if (this.props.currentPage === i) {
            pages.push(
               <div key={i} className={s.activePage}>
                  {i}
               </div>
            )
         } else {
            pages.push(
               <div
                  key={i}
                  onClick={(e) => {
                     this.props.changePage(e.target.innerHTML)
                  }}
                  className={s.page}>
                  {i}
               </div>
            )
         }
      }
      return (
         <div>
            <div className={s.users}>{users}</div>
            <div className={s.paginations}>{pages}</div>
         </div>
      )
   }
}
export default Users
