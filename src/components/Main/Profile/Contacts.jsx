const Contacts = ({ contacts }) => {
   return (
      <div>
         <div>
            <b>Facebook</b> {contacts.facebook}
         </div>
         <div>
            <b>Website</b> {contacts.website}
         </div>
         <div>
            <b>Twitter</b> {contacts.twitter}
         </div>
         <div>
            <b>Instagram</b> {contacts.instagram}
         </div>
         <div>
            <b>Youtube</b> {contacts.youtube}
         </div>
         <div>
            <b>Github</b> {contacts.github}
         </div>
         <div>
            <b>Main Link</b> {contacts.mainLink}
         </div>
      </div>
   )
}
export default Contacts
