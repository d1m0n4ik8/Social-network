import { Avatar, Row, Space } from 'antd'
import avatar from '../../../assets/userAvatar.png'
import React from 'react'
import UploadButton from '../../../common/UIcomponents/UploadButton'
import FollowButton from '../../../common/UIcomponents/FollowButton'

export const ProfileEdit = (props) => {
   return (
      <div>
         <Row justify="center">
            <Avatar className="avatar" icon={<img src={props.profile.photos.large || avatar} alt="main-img" />} />
         </Row>
         <Row justify="center">
            {props.allowChange ? (
               <Space direction="vertical">
                  <UploadButton savePhoto={props.savePhoto} />
               </Space>
            ) : (
               <FollowButton userId={props.profile.userId} followed={props.profile.followed} />
            )}
         </Row>
      </div>
   )
}
