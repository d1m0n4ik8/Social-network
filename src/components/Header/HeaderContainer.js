import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../../Redux/authReducer'
import { getAuthProfile, getIsAuth, getLogin } from '../../Redux/authSelectors'
import { changeTheme } from '../../Redux/appReducer'

const HeaderApiContainer = (props) => <Header {...props} />

let mapStateToProps = (state) => ({
   login: getLogin(state),
   isAuth: getIsAuth(state),
   profile: getAuthProfile(state),
})

const HeaderContainer = connect(mapStateToProps, { logout, changeTheme })(HeaderApiContainer)
export default HeaderContainer
