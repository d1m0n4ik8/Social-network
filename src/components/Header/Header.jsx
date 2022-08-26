import s from './Header.module.css'
const Header = () => {
   return (
      <header className={s.header}>
         <div className={s.logo}>
            <img src="https://cdn.pixabay.com/photo/2017/02/09/21/08/wings-2053515__340.png" alt="logo" />
         </div>
      </header>
   )
}
export default Header
