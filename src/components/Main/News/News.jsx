import { Divider } from 'antd'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { connect } from 'react-redux'
import { decreaseNewsLikesCount, increaseNewsLikesCount } from '../../../Redux/newsReducer'
import { getNews } from '../../../Redux/newsSelectors'
import NewsItem from './NewsItem/NewsItem'
import s from './News.module.css'
let News = (props) => {
   const increaseLikesCount = (newsid) => {
      props.increaseNewsLikesCount(newsid)
   }
   const decreaseLikesCount = (newsid) => {
      props.decreaseNewsLikesCount(newsid)
   }
   let news = props.news.map((news, index) => (
      <NewsItem
         id={index}
         key={index}
         news={news}
         increaseLikesCount={increaseLikesCount}
         decreaseLikesCount={decreaseLikesCount}
      />
   ))
   return (
      <div style={{ maxWidth: '100%' }}>
         <div
            id="scrollableDiv"
            style={{
               height: '75vh',
               overflow: 'auto',
               padding: '0 16px',
            }}>
            <InfiniteScroll
               dataLength={news.length}
               endMessage={
                  <Divider className={s.divider} plain>
                     It is all, nothing more 🤐
                  </Divider>
               }
               className="justifyCenter"
               scrollableTarget="scrollableDiv">
               {news}
            </InfiniteScroll>
         </div>
      </div>
   )
}
const mapStateToProps = (state) => ({
   news: getNews(state),
})

News = connect(mapStateToProps, { increaseNewsLikesCount, decreaseNewsLikesCount })(News)
export default News
