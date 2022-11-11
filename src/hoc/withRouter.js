import { useLocation, useNavigate, useParams } from 'react-router-dom'
export const withRouter = (Component) => {
   const ComponentWithRouter = (props) => {
      let location = useLocation()
      let navigate = useNavigate()
      let params = useParams()
      return <Component {...props} router={{ location, navigate, params }} />
   }

   return ComponentWithRouter
}
