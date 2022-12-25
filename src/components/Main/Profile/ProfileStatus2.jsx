import { useEffect } from 'react'
import { useState } from 'react'

const ProfileStatus2 = (props) => {
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
      <>
         <b>Status </b>
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
      </>
   )
}
export default ProfileStatus2
