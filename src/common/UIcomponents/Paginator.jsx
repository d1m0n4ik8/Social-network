import { useState } from 'react'
import s from './Paginator.module.css'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'

const Paginator = ({ totalUsersCount, pageSize, currentPage, onChangePage, portionSize = 10 }) => {
   let pagesCount = Math.ceil(totalUsersCount / pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   let portionsCount = Math.ceil(pagesCount / portionSize)
   let currentPortion = Math.floor((currentPage - 1) / portionSize) + 1
   let [portionNumber, setPortionNumber] = useState(currentPortion)

   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
   let rigthPortionPageNumber = portionNumber * portionSize
   return (
      <div className={s.paginations}>
         {leftPortionPageNumber > 1 && (
            <button
               style={{ margin: '0 10px' }}
               className={s.activePage}
               onClick={() => {
                  setPortionNumber(portionNumber - 1)
               }}>
               <DoubleLeftOutlined />
            </button>
         )}
         {pages
            .filter((p) => {
               return p >= leftPortionPageNumber && p <= rigthPortionPageNumber
            })
            .map((p) => {
               return (
                  <span key={p} className={currentPage === p ? s.activePage : s.page} onClick={() => onChangePage(p)}>
                     {p}
                  </span>
               )
            })}
         {rigthPortionPageNumber < portionsCount && (
            <button
               style={{ margin: '0 10px' }}
               className={s.activePage}
               onClick={() => {
                  setPortionNumber(portionNumber + 1)
               }}>
               <DoubleRightOutlined />
            </button>
         )}
      </div>
   )
}
export default Paginator
