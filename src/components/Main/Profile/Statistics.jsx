import { SmileOutlined } from '@ant-design/icons'
import { Col, Row, Statistic } from 'antd'
import React from 'react'
import ProfileInfo from './ProfileInfo'
import ProfileStatus from './ProfileStatus'

export const Statistics = (props) => {
   return (
      <Row gutter={[16, 16]}>
         <Col span={8}>
            <Statistic
               className="statistic__item"
               valueStyle={{ color: '#fff' }}
               title="Followers"
               value={props.profile.followed ? 1 : 0}
            />
         </Col>
         <Col span={8}>
            <Statistic className="statistic__item" title="Follows" value={10} />
         </Col>
         <Col span={8}>
            <Statistic className="statistic__item" title="Now" suffix={<SmileOutlined />} value={'online'} />
         </Col>
         <Col span={12} className="justifyCenter">
            <ProfileInfo profile={props.profile} />
         </Col>
         <Col span={12} className="justifyCenter">
            <ProfileStatus
               status={props.status}
               updateUserStatus={props.updateUserStatus}
               allowChange={props.allowChange}
            />
         </Col>
      </Row>
   )
}
