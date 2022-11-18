import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Main/Home/Home'
import News from './components/Main/News/News'
import Music from './components/Main/Music/Music'
import Settings from './components/Main/Settings/Settings'
import ProfileContainer from './components/Main/Profile/ProfileContainer'
import MessagesContainer from './components/Main/Messages/MessagesContainer'
import UsersContainer from './components/Main/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { initialization } from './Redux/appReducer'
import Spinner from './common/Spinner'

class App extends React.Component {
   componentDidMount() {
      this.props.initialization()
   }
   render() {
      if (!this.props.initialized) return <Spinner />
      return (
         <div className="page">
            <HeaderContainer />
            <div className="content container">
               <div className="side-bar">
                  <Sidebar />
               </div>
               <div className="main">
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
               </div>
            </div>
            <Footer />
         </div>
      )
   }
}
let mapStateToProps = (state) => ({
   initialized: state.app.initialized,
})
export default connect(mapStateToProps, { initialization })(App)
