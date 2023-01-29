const INCREASE_LIKES_COUNT = 'social-network/news/INCREASE_LIKES_COUNT'
const DECREASE_LIKES_COUNT = 'social-network/news/DECREASE_LIKES_COUNT'
const initState = {
   news: [
      {
         id: 0,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lTvrtShubuIthbLdsOwRgKHXd0tiv3LsA&usqp=CAU',
         title: 'beautiful_photos',
         images: [
            'https://wallpaperaccess.com/full/284466.jpg',
            'http://wallpaperset.com/w/full/3/0/f/120853.jpg',
            'https://preview.redd.it/5ubq6jf2jgx01.jpg?auto=webp&s=afacd7e6f6b573f5e963bba77943f6b95cf6d63b',
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
         images: [
            'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701304394.jpg',
            'https://rare-gallery.com/uploads/posts/576318-autumn-wallpaper.jpg',
         ],
         message: 'Fall',
         likesCount: 0,
         liked: false,
      },
      {
         id: 2,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lTvrtShubuIthbLdsOwRgKHXd0tiv3LsA&usqp=CAU',
         title: 'ukrainian news',
         images: ['https://wallpaperaccess.com/full/3050941.jpg', 'https://wallpaperaccess.com/full/464609.jpg'],
         message: 'Lake',
         likesCount: 0,
         liked: false,
      },
      {
         id: 3,
         avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7lTvrtShubuIthbLdsOwRgKHXd0tiv3LsA&usqp=CAU',
         title: 'ukrainian news',
         images: ['https://wallpaperaccess.com/full/4872666.jpg', 'https://wallpaperaccess.com/full/5922554.jpg'],
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
