import React from 'react'
import User from './User/User'
import s from './Users.module.css'

const Users = (props) => {
   let pages = []
   for (let i = 1; i <= props.amountPages; i++) {
      pages.push(i)
   }
   return (
      <div>
         <div className={s.users}>
            {props.users.map((user) => (
               <User key={user.id} user={user} follow={props.follow} unfollow={props.unfollow} />
            ))}
         </div>
         <div className={s.paginations}>
            {pages.map((p) => {
               return (
                  <span
                     key={p}
                     className={props.currentPage === p ? s.activePage : s.page}
                     onClick={() => props.changePage(p)}>
                     {p}
                  </span>
               )
            })}
         </div>
      </div>
   )
}
export default Users
