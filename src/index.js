import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import store from './Redux/redux_store'
import AppContainer from './App'
import 'antd/dist/reset.css'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenderEntireTree = () => {
   root.render(<AppContainer />)
}
rerenderEntireTree()
store.subscribe(() => {
   rerenderEntireTree()
})

reportWebVitals()
