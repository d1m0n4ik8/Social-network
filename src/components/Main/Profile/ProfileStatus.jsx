import { useEffect } from 'react'
import { useState } from 'react'
import s from './Profile.module.css'

const ProfileStatus = (props) => {
   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)
   useEffect(() => setStatus(props.status), [props.status])
   let activateEditMode = () => {
      if (props.allowChange) setEditMode(true)
   }
   let deactivateEditMode = () => {
      setEditMode(false)
      props.updateUserStatus(status)
   }
   let onChangeStatus = (e) => {
      setStatus(e.currentTarget.value)
   }
   return (
      <div className={s.info}>
         <div>
            <b>Status</b>
         </div>
         {!editMode ? (
            <div>
               <span onDoubleClick={activateEditMode}>{status || '------------'}</span>
            </div>
         ) : (
            <div>
               <input
                  autoFocus={true}
                  onBlur={deactivateEditMode}
                  onChange={onChangeStatus}
                  type="text"
                  defaultValue={status}
               />
            </div>
         )}
      </div>
   )
}
export default ProfileStatus
