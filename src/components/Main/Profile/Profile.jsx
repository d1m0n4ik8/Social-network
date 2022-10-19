import React from 'react'
import s from './Profile.module.css'
import Post from './Posts/Post'
const Profile = (props) => {
   let myPosts = props.posts.map((el) => <Post key={el.id} image={el.image} message={el.message} />)
   let newPostElement = React.createRef()

   let textChange = () => {
      let text = newPostElement.current.value
      props.updateMessage(text)
   }
   return (
      <main className={s.main}>
         <div className={s.main_img}>
            <img
               src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NCA0ICAcHBw0HBwcHDQ8IDQcNFREWFhURFRMYHSggGCYlJxMTITEhMSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrKystNzcrKysrLSs3Ny0rLS0rKysrKysrKystKy0rKystKysrKysrKysrKysrKysrLf/AABEIAGQB+QMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAACAQADBwT/xAAeEAEBAQEBAAMAAwAAAAAAAAAAARECEgNRgTFhkf/EABgBAQEBAQEAAAAAAAAAAAAAAAIBAwAE/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAhL/2gAMAwEAAhEDEQA/APEGZmzmixlhRWhRIUKFGhxIUKHIsOJIchxrzFkKRJDkJrIsiyNFinIuNjQnYQ+WwmxyDiyFi4uOSclIshzkpDiTk5GkORpI15aQ5F5hzlpI3gYljp5SxxOVg10sGwaljnYNjpYmCzscrEx08tiazsc8THTy2FKFjljY6WJhzoKGLhYuNZ0IYmGzSUcc7BsdsGxRscrBrp0FCjQQqNC0KiatELUbUtZKN6FLUrVKztRKNWjWVopUq0ayopUWiyqIiozqIzMCEzM0cqxChQlhQYUKFChwYXJxpDhyDDhxrFkODChxpFVoy4WsUFY52lixouOTWWNIUjnavMODKfMaSHFkdOYnMdOY1kbc1ZDkaNpY35q2BYcaxKbjYFdegsCuc8TDqM7Qo4lhUams6FonjY7QoxcXF9YUrOii7qtOaODIvkm1rK7AwadSw9GxysGx1sc+ktCxzoWHYFZ2s6NSwhrK0KNGrRoWo1GrRC0UqVaNC1ESqlZ0Uo1alZVERUZ1ErMwoTMzRVhQYUKLChQYUKHChwIcaQ4cKDChxpKcWDFhQtNh1dJfRMLarvTpK6SuGrK7E131dcue/t0nUWRZSkdeHOWOnNaSNJXbmHHLnp0jSRrzSWRpF0m0rDa1o0a0la0LFqVlV0bErXobWdRUxC9QNCpYmJ139Od61wWF119CDaUoWOkb1HNYco0/TDCjSdIsLA0Ovk+j0aXTnY3tL0uhRsGla59dBQqdVzpWjQo1KNWpQo0alWjWdCpRpUazo1KNWpWdFKi0WdFkZgqIzMLiZlaKqxIsKLChQYUKHDhQYUaQoUOBChwtKKKnF0l0VJ2qyMrtJkWK7ShQYcKQ5T5dOa58ukayHK681157cIcaTlrK+idM5Sl7WxpKY1L2F6ZdHKVrn1UtC1j0crWJlbUZVdSyplJBcLLRcNaoyaoVVge0vyLKzrro9fJn8ON6HTlCul71PQamnOhtdPQ3oNTV9BatqWpaNqXobVtG1rRtC0LVtG1rRtC0bVtG1rRtC0LVo1rUrO0bUqVagVERUCoiVUCozMwOJoyxoqrEWHFhQoMKFCKHAhRpChwoMU4pRRiw4pMjEiqjK4osEoUXShwIcaSFKcdOXOOnLbmHKcOBCjSRpKTI2pTlZLWtG1j0c6ajWtRh0crI1RlTlbW1KmiWrqf4lo2oNK/g38G0bU1naV/As/uDaNq6ztO/g38G0dX0ytK1NHU1fQXotbQ1NX0F6LUtHU13obStG1NTRvQ6tqampoXodXU1NQbU1URAtRUZB1GRUCoyMw1zMzC4liK0cqopQihQIcOKUKBDjSEUKDFaRSWJFKOVkUnKzRScsWJChRShwIca8xYfJwYUbcw4cVIrQ5VRkGlK1o2tRYdHK2prDa8/RSrampqayrSUtG1LUtDV9LaFrWhaOpeltG1LRtTWd6a0bUtG1NZXpbUtG1NdrK1dTR1NX0Fpamjqa70Fpa2jqanodLU0dZPSautqImpq6yImuVGYUZmZHIzMlcjMwuZmYXErM0cqsxRVhRmOEUKKxxVhRmaRVWKxxWVmKOYojFHEUZjinD5Zm3KnDjM2hworMRRqNZg6IaNZmHSwalZnn6OIKsypQalZgqjQrMKUaNZhZ0KNVkZ0aNZnM6lSozmdZGZBqMzORGZkRkVnIjMyOZmZHMjM5zMzC5GZkczMwuf/2Q=="
               alt="main-img"
            />
         </div>
         <textarea className={s.textarea} ref={newPostElement} onChange={textChange} value={props.newPostMessage} />
         <div>
            <button className={s.btn} onClick={props.addPost}>
               Add post
            </button>
         </div>
         {myPosts}
      </main>
   )
}
export default Profile
