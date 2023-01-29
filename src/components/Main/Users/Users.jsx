import React from 'react'
import Paginator from '../../../common/UIcomponents/Paginator'
import User from './User/User'
import Spinner from '../../../common/UIcomponents/Spinner'
import { Col, Row } from 'antd'
const Users = (props) => {
   return (
      <>
         <div style={{ height: '85%' }}>
            {props.isFetching ? (
               <Spinner />
            ) : (
               <Row justify="center" align="middle" gutter={[30, 8]}>
                  {props.users.map((user) => (
                     <Col xs={24} md={12}>
                        <User key={user.id} user={user} follow={props.follow} />
                     </Col>
                  ))}
               </Row>
            )}
         </div>
         <Paginator
            totalUsersCount={props.totalUsersCount}
            pageSize={props.pageSize}
            currentPage={props.currentPage}
            onChangePage={props.changePage}
            portionSize={props.portionSize}
         />
      </>
   )
}
export default Users
