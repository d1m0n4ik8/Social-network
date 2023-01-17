import React, { useState } from 'react'
import useInput from '../../../common/Hooks/useInput'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, message, Modal, Upload } from 'antd'
import s from './Profile.module.css'

const getBase64 = (img, callback) => {
   const reader = new FileReader()
   reader.addEventListener('load', () => callback(reader.result))
   reader.readAsDataURL(img)
}
const beforeUpload = (file) => {
   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
   if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
   }
   return isJpgOrPng
}

const AddPostForm = (props) => {
   const [isModalOpen, setIsModalOpen] = useState(false)
   const showModal = () => {
      setIsModalOpen(true)
   }
   const handleCancel = () => {
      setIsModalOpen(false)
   }
   const [loading, setLoading] = useState(false)
   const [imageUrl, setImageUrl] = useState()
   const handleChange = (info) => {
      if (info.file.status === 'uploading') {
         setLoading(true)
         return
      }
      if (info.file.status === 'done') {
         getBase64(info.file.originFileObj, (url) => {
            setLoading(false)
            setImageUrl(url)
         })
      }
   }
   const addPost = () => {
      setIsModalOpen(false)
      props.onSubmit(postMessage.value, imageUrl)
   }
   const postMessage = useInput('', { isEmpty: true, minLenght: 3 })

   const uploadButton = (
      <div>
         {loading ? <LoadingOutlined /> : <PlusOutlined />}
         <div
            style={{
               marginTop: 8,
            }}>
            Upload
         </div>
      </div>
   )

   if (!props.allowChange) return <></>
   return (
      <>
         <Button type="primary" onClick={showModal}>
            Add post
         </Button>
         <Modal
            title="Add new post"
            open={isModalOpen}
            footer={[
               <button onClick={handleCancel} className={s.btn}>
                  Cancel
               </button>,
               <button onClick={addPost} disabled={!postMessage.inputValid || !imageUrl} className={s.btn}>
                  Add post
               </button>,
            ]}>
            <form onSubmit={(e) => e.preventDefault()}>
               <div>
                  <input
                     onBlur={postMessage.onBlur}
                     onChange={postMessage.onChange}
                     value={postMessage.value}
                     name="postMessage"
                     type="text"
                  />
                  {postMessage.isDirty && postMessage.error && <div style={{ color: 'red' }}>{postMessage.error}</div>}
               </div>

               <div>
                  <Upload
                     name="postImage"
                     listType="picture-card"
                     showUploadList={false}
                     beforeUpload={beforeUpload}
                     onChange={handleChange}>
                     {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                  </Upload>
               </div>
            </form>
         </Modal>
      </>
   )
}
export default AddPostForm
