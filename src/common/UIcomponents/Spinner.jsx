import spinner from '../../assets/spinner.svg'
import s from './Spinner.module.css'
const Spinner = () => {
   return (
      <div className={s.spinner}>
         <div>
            <img src={spinner} alt="spinner" />
         </div>
      </div>
   )
}
export default Spinner
