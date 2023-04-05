import { HashRouter } from 'react-router-dom'
import store from '../Redux/redux_store'
import { Provider } from 'react-redux'

export const withBrowserRouter = (Component) => {
   const ComponentwithBrowserRouter = (props) => {
      return (
         <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
               <Component {...props} />
            </Provider>
         </HashRouter>
      )
   }

   return ComponentwithBrowserRouter
}
