import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './User.module.css'
import avatar from '../../../../assets/userAvatar.png'
import FollowButton from '../../../../common/UIcomponents/FollowButton'
import { Avatar, Col, Row, Space } from 'antd'

const User = (props) => {
   return (
      <Row align="middle">
         <Col span={12}>
            <NavLink className={s.userProfile} to={'/profile/' + props.user.id}>
               <Space size="large">
                  <Avatar size={60} icon={<img src={props.user.photos.small || avatar} alt="avatar" />} />
                  <div className={s.fullName}>{props.user.name}</div>
               </Space>
            </NavLink>
         </Col>
         <Col span={12}>
            <Row justify="end">
               <FollowButton userId={props.user.id} followed={props.user.followed} />
            </Row>
         </Col>
      </Row>
   )
}
export default User
