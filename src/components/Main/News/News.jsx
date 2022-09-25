import React from 'react'
import s from './News.module.css'
import NewsItem from './NewsItem/NewsItem'
const News = () => {
   return (
      <div className={s.news}>
         <NewsItem news="News" />
      </div>
   )
}
export default News
