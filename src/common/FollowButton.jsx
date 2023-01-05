import { connect } from 'react-redux'
import { follow, unfollow } from '../Redux/usersReducer'
import { getFollowingInProgress } from '../Redux/usersSelectors'
import s from './FollowButton.module.css'

let FollowButton = (props) => {
   const follow = () => {
      props.follow(props.userId)
   }
   const unfollow = () => {
      props.unfollow(props.userId)
   }

   return (
      <div className={s.following}>
         {props.followed ? (
            <button
               className={s.unfollow}
               disabled={props.followingInProgress.some((id) => id === props.userId)}
               onClick={unfollow}>
               Unfollow
            </button>
         ) : (
            <button disabled={props.followingInProgress.some((id) => id === props.userId)} onClick={follow}>
               Follow
            </button>
         )}
      </div>
   )
}

const MapStateToProps = (state) => {
   return {
      followingInProgress: getFollowingInProgress(state),
   }
}
FollowButton = connect(MapStateToProps, { follow, unfollow })(FollowButton)
export default FollowButton
