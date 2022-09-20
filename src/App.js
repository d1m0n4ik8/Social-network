import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Main/Sidebar/Sidebar'
import Profile from './components/Main/Profile/Profile'
import Messages from './components/Main/Messages/Messages'
import Home from './components/Main/Home/Home'
import News from './components/Main/News/News'
import Music from './components/Main/Music/Music'
import Settings from './components/Main/Settings/Settings'

const App = (props) => {
   return (
      <div className="page">
         <Header />
         <div className="content container">
            <Sidebar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="Profile" element={<Profile state={props.state.profilePage} dispatch={props.dispatch} />} />
               <Route path="Messages" element={<Messages state={props.state.messagesPage} dispatch={props.dispatch} />} />
               <Route path="News" element={<News />} />
               <Route path="Music" element={<Music />} />
               <Route path="Settings" element={<Settings />} />
            </Routes>
         </div>
         <Footer />
      </div>
   )
}
export default App
