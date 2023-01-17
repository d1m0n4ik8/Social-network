const INCREASE_LIKES_COUNT = 'social-network/news/INCREASE_LIKES_COUNT'
const DECREASE_LIKES_COUNT = 'social-network/news/DECREASE_LIKES_COUNT'
const initState = {
   news: [
      {
         id: 0,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lTvrtShubuIthbLdsOwRgKHXd0tiv3LsA&usqp=CAU',
         title: 'ukrainian news',
         images: [
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
            'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg',
         ],
         message: 'Beautiful',
         likesCount: 0,
         comments: ['Cool', 'Beautiful', 'Amazing'],
         liked: false,
      },
      {
         id: 1,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lTvrtShubuIthbLdsOwRgKHXd0tiv3LsA&usqp=CAU',
         title: 'ukrainian news',
         images: ['https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg'],
         message: 'Fall',
         likesCount: 0,
         liked: false,
      },
      {
         id: 2,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lTvrtShubuIthbLdsOwRgKHXd0tiv3LsA&usqp=CAU',
         title: 'ukrainian news',
         images: ['https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg'],
         message: 'Lake',
         likesCount: 0,
         liked: false,
      },
      {
         id: 3,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lTvrtShubuIthbLdsOwRgKHXd0tiv3LsA&usqp=CAU',
         title: 'ukrainian news',
         images: ['https://cdn.pixabay.com/photo/2022/12/30/11/09/cat-7686662_960_720.jpg'],
         message: 'Cat',
         likesCount: 0,
         liked: false,
      },
      {
         id: 4,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lTvrtShubuIthbLdsOwRgKHXd0tiv3LsA&usqp=CAU',
         title: 'ukrainian news',
         images: ['https://cdn.pixabay.com/photo/2022/12/30/11/09/cat-7686662_960_720.jpg'],
         message: 'Cat',
         likesCount: 0,
         liked: false,
      },
      {
         id: 5,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lTvrtShubuIthbLdsOwRgKHXd0tiv3LsA&usqp=CAU',
         title: 'ukrainian news',
         images: ['https://cdn.pixabay.com/photo/2022/12/30/11/09/cat-7686662_960_720.jpg'],
         message: 'Cat',
         likesCount: 0,
         liked: false,
      },
      {
         id: 6,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lTvrtShubuIthbLdsOwRgKHXd0tiv3LsA&usqp=CAU',
         title: 'ukrainian news',
         images: ['https://cdn.pixabay.com/photo/2022/12/30/11/09/cat-7686662_960_720.jpg'],
         message: 'Cat',
         likesCount: 0,
         liked: false,
      },
   ],
}

const newsReducer = (state = initState, action) => {
   switch (action.type) {
      case INCREASE_LIKES_COUNT:
         return {
            ...state,
            news: [
               ...state.news.map((p) =>
                  p.id === action.newsId ? { ...p, likesCount: p.likesCount + 1, liked: true } : p
               ),
            ],
         }
      case DECREASE_LIKES_COUNT:
         return {
            ...state,
            news: [
               ...state.news.map((p) =>
                  p.id === action.newsId && p.likesCount > 0 ? { ...p, likesCount: p.likesCount - 1, liked: false } : p
               ),
            ],
         }
      default:
         return state
   }
}

export const increaseNewsLikesCount = (newsId) => ({ type: INCREASE_LIKES_COUNT, newsId })
export const decreaseNewsLikesCount = (newsId) => ({ type: DECREASE_LIKES_COUNT, newsId })
export default newsReducer
