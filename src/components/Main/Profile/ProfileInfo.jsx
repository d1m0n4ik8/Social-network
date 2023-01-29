import Contacts from './Contacts'
import s from './Profile.module.css'
const ProfileInfo = (props) => {
   return (
      <div className={s.info}>
         <div>
            <b>{props.profile.fullName}</b>
         </div>
         <div>{props.profile.aboutMe}</div>
         {props.profile.lookingForAJob ? (
            <div>
               <div>Looking for a job</div>
               <div>{props.profile.lookingForAJobDescription}</div>
            </div>
         ) : (
            <div>Don't looking for a job</div>
         )}
         {Object.values(props.profile.contacts).some((el) => el) && <Contacts contacts={props.profile.contacts} />}
      </div>
   )
}
export default ProfileInfo
