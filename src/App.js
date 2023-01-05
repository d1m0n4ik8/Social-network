import React, { lazy, Suspense, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Main/Home/Home'
import News from './components/Main/News/News'
import Music from './components/Main/Music/Music'
import Settings from './components/Main/Settings/Settings'
//import ProfileContainer from './components/Main/Profile/ProfileContainer'
//import MessagesContainer from './components/Main/Messages/MessagesContainer'
import UsersContainer from './components/Main/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
//import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { initialization } from './Redux/appReducer'
import Spinner from './common/Spinner'
import { compose } from 'redux'
import { withBrowserRouter } from './hoc/withBrowserRouter'
import { Col, ConfigProvider, Row } from 'antd'
import { getInitialized, getTheme } from './Redux/appSelectors'

const ProfileContainer = lazy(() => import('./components/Main/Profile/ProfileContainer'))
const MessagesContainer = lazy(() => import('./components/Main/Messages/MessagesContainer'))
const Login = lazy(() => import('./components/Login/Login'))

const App = (props) => {
   useEffect(() => {
      props.initialization()
   })
   if (!props.initialized) return <Spinner />

   return (
      <ConfigProvider theme={{ token: props.theme }}>
         <div className="page">
            <HeaderContainer />
            <div className="content container">
               <Row className="w100" wrap={false}>
                  <Col className="sidebar" flex="200px">
                     <Sidebar />
                  </Col>
                  <Col className="main" flex="auto">
                     <Suspense>
                        <Routes>
                           <Route path="login" element={<Login />} />
                           <Route path="/" element={<Home />} />
                           <Route path="profile" element={<ProfileContainer />}>
                              <Route path=":userId" element={<ProfileContainer />} />
                              <Route path="" element={<ProfileContainer />} />
                           </Route>
                           <Route path="messages" element={<MessagesContainer />} />
                           <Route path="users" element={<UsersContainer />} />
                           <Route path="news" element={<News />} />
                           <Route path="music" element={<Music />} />
                           <Route path="settings" element={<Settings />} />
                        </Routes>
                     </Suspense>
                  </Col>
               </Row>
            </div>
            <Footer />
         </div>
      </ConfigProvider>
   )
}
let mapStateToProps = (state) => ({
   initialized: getInitialized(state),
   theme: getTheme(state),
})
const AppContainer = compose(withBrowserRouter, connect(mapStateToProps, { initialization }))(App)
export default AppContainer
