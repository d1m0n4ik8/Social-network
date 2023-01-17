import React from 'react'
import Paginator from '../../../common/UIcomponents/Paginator'
import User from './User/User'
import s from './Users.module.css'
import Spinner from '../../../common/UIcomponents/Spinner'
const Users = (props) => {
   return (
      <div>
         {props.isFetching ? (
            <Spinner />
         ) : (
            <div className={s.users}>
               {props.users.map((user) => (
                  <User key={user.id} user={user} follow={props.follow} />
               ))}
            </div>
         )}

         <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onChangePage={props.changePage}
         />
      </div>
   )
}
export default Users
