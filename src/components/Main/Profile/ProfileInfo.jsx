import Contacts from './Contacts'

const ProfileInfo = (props) => {
   return (
      <div>
         <div>{props.profile.fullName}</div>
         <div>{props.profile.aboutMe}</div>
         {props.profile.lookingForAJob ? (
            <div>
               <div>
                  <b>Looking for a job</b>
               </div>
               <div>{props.profile.lookingForAJobDescription}</div>
            </div>
         ) : (
            <div>
               <b>Don't looking for a job</b>
            </div>
         )}
         <Contacts contacts={props.profile.contacts} />
      </div>
   )
}
export default ProfileInfo
