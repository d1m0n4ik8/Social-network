import React from 'react'

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status,
   }
   activateEditMode = () => {
      this.setState({
         editMode: true,
      })
   }
   deactivateEditMode = () => {
      this.setState({
         editMode: false,
      })
      this.props.updateUserStatus(this.state.status)
   }
   onChangeStatus = (e) => {
      this.setState({
         status: e.currentTarget.value,
      })
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status,
         })
      }
   }

   render() {
      return (
         <>
            {!this.state.editMode ? (
               <div>
                  <span onDoubleClick={this.activateEditMode}>{this.state.status || '------------'}</span>
               </div>
            ) : (
               <div>
                  <input
                     autoFocus={true}
                     onBlur={this.deactivateEditMode}
                     onChange={this.onChangeStatus}
                     type="text"
                     defaultValue={this.state.status}
                  />
               </div>
            )}
         </>
      )
   }
}
export default ProfileStatus
