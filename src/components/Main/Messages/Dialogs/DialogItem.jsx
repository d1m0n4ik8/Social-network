import s from './DialogItem.module.css'
const DialogItem = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.avatar}>
            <img src={props.image} alt="avatar" />
         </div>
         <div className={s.userName}>
            <div className={s.name}>{props.name}</div>
            <div className={s.surname}>{props.surname}</div>
         </div>
      </div>
   )
}
export default DialogItem
