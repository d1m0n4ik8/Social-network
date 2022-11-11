import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
})

export const withAuthRedirection = (Component) => {
   const RedirectComponent = (props) => {
      if (!props.isAuth) return <Navigate replace to="/login" />
      return <Component {...props} />
   }
   const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
   return ConnectedRedirectComponent
}
