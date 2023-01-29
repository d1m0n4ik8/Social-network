import { EditOutlined, FrownOutlined, SmileOutlined } from '@ant-design/icons'
import { Col, message, Row, Statistic } from 'antd'
import React from 'react'
import AddPostForm from './AddPostForm'
import { ProfileEdit } from './ProfileEdit'
import ProfileEditForm from './ProfileEditForm'
import ProfileInfo from './ProfileInfo'
import ProfileStatus from './ProfileStatus'
import s from './Profile.module.css'

export const Statistics = (props) => {
   const onSubmit = (profileInfo) => {
      props.saveProfileInfo(profileInfo)
   }
   const addNewPost = (postMessage, image) => {
      props.addPost(postMessage, image)
      message.success('Post added')
   }
   return (
      <Row gutter={[16, 16]} justify={{ sm: 'start', md: 'center' }}>
         <Col span={8}>
            <Statistic className={s.statistic__item} title="Followers" value={props.profile.followed ? 1 : 0} />
         </Col>
         <Col span={8}>
            <Statistic className={s.statistic__item} title="Follows" value={10} />
         </Col>
         <Col span={8}>
            <Statistic
               className={s.statistic__item}
               title="Now"
               suffix={props.allowChange ? <SmileOutlined /> : <FrownOutlined />}
               value={props.allowChange ? 'online' : 'offline'}
            />
         </Col>
         <Col span={24} className="AvatatMobile1">
            <Row justify="center">
               <ProfileEdit allowChange={props.allowChange} profile={props.profile} />
            </Row>
         </Col>
         <Col sm={24} md={props.allowChange ? 8 : 12}>
            <Row justify={{ sm: 'start', md: 'center' }}>
               <ProfileInfo profile={props.profile} />
            </Row>
         </Col>
         <Col sm={8} md={props.allowChange ? 8 : 12}>
            <Row justify={{ sm: 'start', md: 'center' }}>
               <ProfileStatus
                  status={props.status}
                  updateUserStatus={props.updateUserStatus}
                  allowChange={props.allowChange}
               />
            </Row>
         </Col>
         {props.allowChange && (
            <Col sm={16} md={8}>
               <Row justify={{ sm: 'start', md: 'center' }}>
                  <ProfileEditForm onSubmit={onSubmit} profile={props.profile}>
                     <button className="btn">
                        Edit info <EditOutlined />
                     </button>
                  </ProfileEditForm>
                  <AddPostForm onSubmit={addNewPost} />
               </Row>
            </Col>
         )}
      </Row>
   )
}
