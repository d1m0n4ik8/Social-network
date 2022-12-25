import profileReducer, { addComment, decreaseLikesCount, deletePost, increaseLikesCount } from './profileReducer'

let initState = {
   profile: {
      aboutMe: '',
      contacts: {
         facebook: null,
         website: null,
         vk: null,
         twitter: null,
         instagram: null,
         youtube: null,
         github: null,
         mainLink: null,
      },
      lookingForAJob: false,
      lookingForAJobDescription: null,
      fullName: null,
      userId: 0,
      photos: {
         small: null,
         large: null,
      },
   },
   posts: [
      {
         id: 0,
         image: 'https://cdn-icons-png.flaticon.com/512/147/147130.png',
         message: 'Hello, how are you?',
         likesCount: 0,
         comments: ['Cool', 'Beautiful', 'Amazing'],
      },
      {
         id: 1,
         image: 'https://cdn-icons-png.flaticon.com/512/147/147131.png',
         message: "Hello, I'm fine, and you?",
         likesCount: 10,
         comments: ['Cool', 'Beautiful', 'Amazing'],
      },
      {
         id: 2,
         image: 'https://cdn-icons-png.flaticon.com/512/147/147132.png',
         message: "I'm OK",
         likesCount: 0,
         comments: ['Cool', 'Beautiful', 'Amazing'],
      },
   ],
   isFetching: false,
   status: '',
}

test('decrease likes count', () => {
   let id = 0
   let newState = profileReducer(initState, decreaseLikesCount(id))
   expect(newState.posts[id].likesCount).toBe(0)
})

test('increase likes count', () => {
   let id = 0
   let newState = profileReducer(initState, increaseLikesCount(id))
   expect(newState.posts[id].likesCount).toBe(1)
})

test('delete post', () => {
   let id = 0
   let newState = profileReducer(initState, deletePost(id))
   expect(newState.posts.length).toBe(2)
})

test('add comment', () => {
   let id = 0
   let newState = profileReducer(initState, addComment(id, 'Hello'))
   expect(newState.posts[id].comments.length).toBe(4)
})
