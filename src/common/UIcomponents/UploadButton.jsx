import React from 'react'
import { message, Upload } from 'antd'
import ImgCrop from 'antd-img-crop'
import { UploadOutlined } from '@ant-design/icons'

const UploadButton = (props) => {
   const beforeUpload = (file) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 5
      if (!isJpgOrPng) {
         message.error('You can only upload JPG/PNG file!')
      } else if (!isLt2M) {
         message.error('Image must smaller than 5MB!')
      } else {
         props.savePhoto(file)
         message.success('Image update')
      }
      return isJpgOrPng && isLt2M
   }
   const onPreview = async (file) => {
      let src = file.url
      if (!src) {
         src = await new Promise((resolve) => {
            const reader = new FileReader()
            reader.readAsDataURL(file.originFileObj)
            reader.onload = () => resolve(reader.result)
         })
      }
      const image = new Image()
      image.src = src
      const imgWindow = window.open(src)
      imgWindow?.document.write(image.outerHTML)
   }
   return (
      <ImgCrop rotate>
         <Upload showUploadList={false} beforeUpload={beforeUpload} onPreview={onPreview}>
            <button className="btn">
               Upload <UploadOutlined />
            </button>
         </Upload>
      </ImgCrop>
   )
}
export default UploadButton
