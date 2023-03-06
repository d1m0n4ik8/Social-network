import { Divider } from 'antd'
import React from 'react'
import { useMediaQuery } from '../../common/Hooks/useMediaQuery'
import Sidebar from '../Sidebar/Sidebar'
import s from './Footer.module.css'
const Footer = () => {
   const w576 = useMediaQuery('(min-width: 576px)')
   return (
      <>
         {w576 ? (
            <>
               <Divider className="divider" type="horizontal" style={{ margin: 0 }} />
               <footer className={s.footer}>
                  <h3>© All rights reserved</h3>
                  <h5>Develop by Dima Svyryd</h5>
               </footer>
            </>
         ) : (
            <Sidebar style={{ flexDirection: 'row', justifyContent: 'space-around' }} />
         )}
      </>
   )
}
export default Footer
