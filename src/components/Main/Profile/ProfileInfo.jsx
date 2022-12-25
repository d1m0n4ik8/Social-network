import Contacts from './Contacts'

const ProfileInfo = (props) => {
   return (
      <div>
         <div>
            <b>Full name : </b>
            {props.profile.fullName}
         </div>
         <div>
            <b>About me : </b>
            {props.profile.aboutMe}
         </div>
         {props.profile.lookingForAJob ? (
            <div>
               <div>
                  <b>Lopking for a job</b>
               </div>
               <div>
                  <b>Skills</b>
                  {props.profile.lookingForAJobDescription}
               </div>
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
