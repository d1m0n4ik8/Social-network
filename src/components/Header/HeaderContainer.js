import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { logout } from '../../Redux/authReducer'
import { getAuthProfile, getIsAuth, getLogin } from '../../Redux/authSelectors'
import { saveProfileInfo } from '../../Redux/profileReducer'

const HeaderApiContainer = (props) => <Header {...props} />

let mapStateToProps = (state) => ({
   login: getLogin(state),
   isAuth: getIsAuth(state),
   profile: getAuthProfile(state),
})

const HeaderContainer = connect(mapStateToProps, { logout, saveProfileInfo })(HeaderApiContainer)
export default HeaderContainer
