import { useState } from 'react'
import s from './Paginator.module.css'
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
               onClick={() => {
                  setPortionNumber(portionNumber - 1)
               }}>
               Prev
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
               onClick={() => {
                  setPortionNumber(portionNumber + 1)
               }}>
               Next
            </button>
         )}
      </div>
   )
}
export default Paginator
