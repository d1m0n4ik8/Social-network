import React, { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import News from './components/Main/News/News'
import Music from './components/Main/Music/Music'
import Settings from './components/Main/Settings/Settings'
import UsersContainer from './components/Main/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import { connect } from 'react-redux'
import { initialization } from './Redux/appReducer'
import Spinner from './common/UIcomponents/Spinner'
import { compose } from 'redux'
import { withBrowserRouter } from './hoc/withBrowserRouter'
import { Col, Row } from 'antd'
import { getInitialized } from './Redux/appSelectors'
import NotFound from './components/Main/NotFound'
import { getIsAuth } from './Redux/authSelectors'
import Login from './components/Login/Login'
import './App.css'
import useTheme from './common/Hooks/useTheme'

const ProfileContainer = lazy(() => import('./components/Main/Profile/ProfileContainer'))
const MessagesContainer = lazy(() => import('./components/Main/Messages/MessagesContainer'))

const App = (props) => {
   const { theme, setTheme } = useTheme()
   const { initialization } = props
   useEffect(() => {
      initialization()
   }, [initialization])
   if (!props.initialized) return <Spinner />

   if (props.initialized && !props.isAuth) return <Login theme={theme} setTheme={setTheme} />

   return (
      <div className="page">
         <HeaderContainer theme={theme} setTheme={setTheme} />
         <div className="content container">
            <Row className="w100" wrap={false}>
               <Col className="sidebar">
                  <Sidebar />
               </Col>
               <Col className="main" flex="auto">
                  <Suspense>
                     <Routes>
                        <Route path="/" element={<News />} />
                        <Route path="Social-network" element={<News />} />
                        <Route path="profile" element={<ProfileContainer />}>
                           <Route path=":userId" element={<ProfileContainer />} />
                           <Route path="" element={<ProfileContainer />} />
                        </Route>
                        <Route path="messages" element={<MessagesContainer />} />
                        <Route path="users" element={<UsersContainer />} />
                        <Route path="news" element={<News />} />
                        <Route path="music" element={<Music />} />
                        <Route path="login" element={<Login theme={theme} setTheme={setTheme} />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="*" element={<NotFound />} />
                     </Routes>
                  </Suspense>
               </Col>
            </Row>
         </div>
         <Footer />
      </div>
   )
}
let mapStateToProps = (state) => ({
   isAuth: getIsAuth(state),
   initialized: getInitialized(state),
})
const AppContainer = compose(withBrowserRouter, connect(mapStateToProps, { initialization }))(App)
export default AppContainer
