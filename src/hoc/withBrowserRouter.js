import { BrowserRouter } from 'react-router-dom'
import store from '../Redux/redux_store'
import { Provider } from 'react-redux'

export const withBrowserRouter = (Component) => {
   const ComponentwithBrowserRouter = (props) => {
      return (
         <BrowserRouter>
            <Provider store={store}>
               <Component {...props} />
            </Provider>
         </BrowserRouter>
      )
   }

   return ComponentwithBrowserRouter
}
