import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../../Redux/authReducer'

class HeaderApiContainer extends React.Component {
   render = () => {
      return <Header {...this.props} />
   }
}
let mapStateToProps = (state) => ({
   login: state.auth.login,
   isAuth: state.auth.isAuth,
})

const HeaderContainer = connect(mapStateToProps, { logout })(HeaderApiContainer)
export default HeaderContainer
