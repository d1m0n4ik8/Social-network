import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { getAuth } from '../../Redux/authReducer'

class HeaderApiContainer extends React.Component {
   componentDidMount() {
      this.props.getAuth()
   }
   render = () => {
      return <Header {...this.props} />
   }
}
let mapStateToProps = (state) => ({
   login: state.auth.login,
   isAuth: state.auth.isAuth,
})

const HeaderContainer = connect(mapStateToProps, { getAuth })(HeaderApiContainer)
export default HeaderContainer
