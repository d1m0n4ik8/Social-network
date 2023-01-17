import { connect } from 'react-redux'
import Login from '../components/Login/Login'
import { getIsAuth } from '../Redux/authSelectors'

const mapStateToProps = (state) => ({
   isAuth: getIsAuth(state),
})

export const withAuthRedirection = (Component) => {
   const RedirectComponent = (props) => {
      if (!props.isAuth) return <Login />
      return <Component {...props} />
   }
   const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
   return ConnectedRedirectComponent
}
