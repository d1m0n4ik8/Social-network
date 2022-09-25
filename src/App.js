import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Sidebar from './components/Main/Sidebar/Sidebar'
import Home from './components/Main/Home/Home'
import News from './components/Main/News/News'
import Music from './components/Main/Music/Music'
import Settings from './components/Main/Settings/Settings'
import ProfileContainer from './components/Main/Profile/ProfileContainer'
import MessagesContainer from './components/Main/Messages/MessagesContainer'

const App = () => {
   return (
      <div className="page">
         <Header />
         <div className="content container">
            <Sidebar />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="Profile" element={<ProfileContainer />} />
               <Route path="Messages" element={<MessagesContainer />} />
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
