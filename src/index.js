import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import store from './Redux/redux_store'
import AppContainer from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenderEntireTree = () => {
   root.render(
      <React.StrictMode>
         <AppContainer />
      </React.StrictMode>
   )
}
rerenderEntireTree()
store.subscribe(() => {
   rerenderEntireTree()
})

reportWebVitals()
