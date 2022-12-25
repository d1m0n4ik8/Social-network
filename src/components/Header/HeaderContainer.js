import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../../Redux/authReducer'
import { getIsAuth, getLogin } from '../../Redux/authSelectors'

const HeaderApiContainer = (props) => <Header {...props} />

let mapStateToProps = (state) => ({
   login: getLogin(state),
   isAuth: getIsAuth(state),
})

const HeaderContainer = connect(mapStateToProps, { logout })(HeaderApiContainer)
export default HeaderContainer
