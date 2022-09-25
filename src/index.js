import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import store from './Redux/redux_store'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
let rerenderEntireTree = () => {
   root.render(
      <React.StrictMode>
         <BrowserRouter>
            <Provider store={store}>
               <App />
            </Provider>
         </BrowserRouter>
      </React.StrictMode>
   )
}
rerenderEntireTree()
store.subscribe(() => {
   rerenderEntireTree()
})

reportWebVitals()
