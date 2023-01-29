import { Divider } from 'antd'
import React from 'react'
import s from './Footer.module.css'
const Footer = () => {
   return (
      <>
         <Divider className="divider" type="horizontal" style={{ margin: 0 }} />
         <footer className={s.footer}>
            <h3>© All rights reserved</h3>
            <h5>Develop by Dima Svyryd</h5>
         </footer>
      </>
   )
}
export default Footer
