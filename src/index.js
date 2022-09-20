import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/State'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenderEntireTree = (state) => {
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
         </BrowserRouter>
      </React.StrictMode>
   )
}

store.subscribe(rerenderEntireTree)
rerenderEntireTree(store.getstate())

reportWebVitals()
