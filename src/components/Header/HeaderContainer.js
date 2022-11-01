import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../Redux/authReducer'
import { authAPI } from '../../api/api'

class HeaderApiContainer extends React.Component {
   componentDidMount() {
      authAPI.getAuth().then((resolve) => {
         if (resolve.resultCode === 0) {
            this.props.setAuthUserData(resolve.data)
         }
      })
   }
   render = () => {
      return <Header {...this.props} />
   }
}
let mapStateToProps = (state) => ({
   login: state.auth.login,
   isAuth: state.auth.isAuth,
})

const HeaderContainer = connect(mapStateToProps, { setAuthUserData })(HeaderApiContainer)
export default HeaderContainer
