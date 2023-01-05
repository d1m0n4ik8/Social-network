import { Button, Modal } from 'antd'
import { useState } from 'react'
import useInput from '../../../common/Hooks/useInput'
import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons'

const ProfileEditForm = (props) => {
   const [isModalOpen, setIsModalOpen] = useState(false)
   const showModal = () => {
      setIsModalOpen(true)
   }
   const handleOk = () => {
      const profileInfo = {
         ...props.profile,
         aboutMe: aboutMe.value,
         contacts: {
            facebook: facebook.value,
            website: website.value,
            twitter: twitter.value,
            instagram: instagram.value,
            youtube: youtube.value,
            github: github.value,
            mainLink: mainLink.value,
         },
         lookingForAJob: lookingForAJob.value,
         lookingForAJobDescription: lookingForAJobDescription.value,
         fullName: fullName.value,
      }
      props.onSubmit(profileInfo)
      setIsModalOpen(false)
   }
   const handleCancel = () => {
      setIsModalOpen(false)
   }

   const fullName = useInput(props.profile.fullName ? props.profile.fullName : '', { isEmpty: true, minLenght: 3 })
   const aboutMe = useInput(props.profile.aboutMe ? props.profile.aboutMe : '', {})
   const lookingForAJob = useInput(props.profile.aboutMe ? props.profile.aboutMe : props.profile.lookingForAJob, {})
   const lookingForAJobDescription = useInput(
      props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : '',
      {}
   )
   const facebook = useInput(props.profile.facebook ? props.profile.facebook : '', {})
   const website = useInput(props.profile.website ? props.profile.website : '', {})
   const twitter = useInput(props.profile.twitter ? props.profile.twitter : '', {})
   const instagram = useInput(props.profile.instagram ? props.profile.instagram : '', {})
   const youtube = useInput(props.profile.youtube ? props.profile.youtube : '', {})
   const github = useInput(props.profile.github ? props.profile.github : '', {})
   const mainLink = useInput(props.profile.mainLink ? props.profile.mainLink : '', {})

   return (
      <>
         <Button type="primary" onClick={showModal}>
            Edit profile info <EditOutlined />
         </Button>
         <Modal
            title="User profile"
            closable={false}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
               <Button key="back" onClick={handleCancel}>
                  Return <CloseOutlined />
               </Button>,
               <Button key="submit" type="primary" onClick={handleOk}>
                  Save <CheckOutlined />
               </Button>,
            ]}>
            <form id="ProfileInfoForm" onSubmit={props.onSubmit}>
               <div>
                  <b>Full name : </b>
                  <input
                     type="text"
                     name="fullName"
                     onBlur={fullName.onBlur}
                     onChange={fullName.onChange}
                     value={fullName.value}
                  />
               </div>
               <div>
                  <b>About me : </b>
                  <textarea
                     type="text"
                     name="aboutMe"
                     onBlur={aboutMe.onBlur}
                     onChange={aboutMe.onChange}
                     value={aboutMe.value}
                  />
               </div>
               <div>
                  <b>Looking for a job</b>
                  <input
                     onChange={lookingForAJob.onChange}
                     type="checkbox"
                     name="lookingForAJob"
                     value={lookingForAJob.value}
                  />
               </div>
               <div>
                  <b>Skills </b>
                  <textarea
                     type="text"
                     name="lookingForAJobDescription"
                     onBlur={lookingForAJobDescription.onBlur}
                     onChange={lookingForAJobDescription.onChange}
                     value={lookingForAJobDescription.value}
                  />
               </div>
               <div>
                  <div>
                     <b>Facebook </b>
                     <input
                        type="text"
                        name="facebook"
                        onBlur={facebook.onBlur}
                        onChange={facebook.onChange}
                        value={facebook.value}
                     />
                  </div>
                  <div>
                     <b>Website </b>
                     <input
                        type="text"
                        name="website"
                        onBlur={website.onBlur}
                        onChange={website.onChange}
                        value={website.value}
                     />
                  </div>
                  <div>
                     <b>Twitter </b>
                     <input
                        type="text"
                        name="twitter"
                        onBlur={twitter.onBlur}
                        onChange={twitter.onChange}
                        value={twitter.value}
                     />
                  </div>
                  <div>
                     <b>Instagram </b>
                     <input
                        type="text"
                        name="instagram"
                        onBlur={instagram.onBlur}
                        onChange={instagram.onChange}
                        value={instagram.value}
                     />
                  </div>
                  <div>
                     <b>Youtube </b>
                     <input
                        type="text"
                        name="youtube"
                        onBlur={youtube.onBlur}
                        onChange={youtube.onChange}
                        value={youtube.value}
                     />
                  </div>
                  <div>
                     <b>Github </b>
                     <input
                        type="text"
                        name="github"
                        onBlur={github.onBlur}
                        onChange={github.onChange}
                        value={github.value}
                     />
                  </div>
                  <div>
                     <b>Main Link </b>
                     <input
                        type="text"
                        name="mainLink"
                        onBlur={mainLink.onBlur}
                        onChange={mainLink.onChange}
                        value={mainLink.value}
                     />
                  </div>
               </div>
            </form>
         </Modal>
      </>
   )
}
export default ProfileEditForm
