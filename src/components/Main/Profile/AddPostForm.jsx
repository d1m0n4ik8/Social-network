import useInput from '../../../common/Hooks/useInput'
import s from './Profile.module.css'
let AddNewPostForm = (props) => {
   const postMessage = useInput('', { isEmpty: true, minLenght: 3 })
   if (!props.allowChange) return <></>
   return (
      <form onSubmit={props.onSubmit}>
         <div>
            <input
               onBlur={postMessage.onBlur}
               onChange={postMessage.onChange}
               value={postMessage.value}
               name="postMessage"
               type="text"
            />
            {postMessage.isDirty && postMessage.error && <div style={{ color: 'red' }}>{postMessage.error}</div>}
         </div>
         <div>
            <button disabled={!postMessage.inputValid} className={s.btn}>
               Add post
            </button>
         </div>
      </form>
   )
}
export default AddNewPostForm
